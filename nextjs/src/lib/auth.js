import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "./pool";
import bcrypt from "bcryptjs";
import { authConfig } from "./authConfig";

const login = async (credentials) => {
  try {
    const user = await pool.query("SELECT * FROM user WHERE Username = (?)", [
      credentials.Username,
    ]);

    if (user[0].length === 0) {
      throw new Error("Wrong credentials");
    }

    const isPasswordCorrect = bcrypt.compare(
      credentials.Password,
      user[0][0].Password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials");
    }

    return user;
  } catch (error) {
    console.log("there was an error in auth js login function");
    console.log(error);
    return { error: "There was an issue" }
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {

      if (account.provider === "github") {
        try {
          const user = await pool.query(
            "SELECT * FROM user WHERE Username = (?)",
            [profile.login]
          );

          if (user[0].length === 0) {
            const Username = profile.login;
            console.log(Username);

            await pool.query(
              "INSERT INTO `chatapp`.`user` (`Username`) VALUES (?);",
              [Username]
            );
          }
        } catch (error) {
          console.log("error in auth js callback");
          throw error
        }
      }

      return true;
    },

    ...authConfig.callbacks,
  },
});
