"use server";

import { redirect } from "next/navigation";
import pool from "./pool";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// Adding user to the database table user
export const addUser = async (previousState, formData) => {
  const { Username, pass } = Object.fromEntries(formData);

  try {
    const user = await pool.query("SELECT * FROM user WHERE Username = (?) ", [Username])

    if (user[0].length) {
      return { error: "User already exists" }
    }

    const salt = await bcrypt.genSalt(10);
    const Password = await bcrypt.hash(pass, salt);

    await pool.query(
      "INSERT INTO `chatapp`.`user` (`Username`, `Password`) VALUES (?, ?);",
      [Username, Password]
    );

    return { success: true }
  } catch (error) {
    return { error: "Something went wrong" }
  }
};

// Add conversation entry between two users to the database table conversation
export const addConversation = async (user1, user2) => {

  try {
    const [id1] = await pool.query(
      "SELECT * FROM conversation WHERE user1 = (?) && user2 = (?)",
      [user1, user2]
    );

    const [id2] = await pool.query(
      "SELECT * FROM conversation WHERE user1 = (?) && user2 = (?)",
      [user2, user1]
    )
    if (id1.length === 0 && id2.length === 0) {
      await pool.query(
        "INSERT INTO `chatapp`.`conversation` (`user1`, `user2`) VALUES (?, ?);",
        [user1, user2]
      );
    } else {
      console.log("Conversation already exists");
    }

  } catch (error) {
    console.log({ message: "error while inserting conversation" });

    throw error;
  }
};

// Add message to the database table message
export const addMessage = async (formData) => {
  const { message, userId, conversationId } = Object.fromEntries(formData);

  try {
    await pool.query(
      "INSERT INTO `chatapp`.`message` (`message`, `userId`, `conversationId`) VALUES (?, ?, ?);",
      [message, userId, conversationId]
    );
    console.log("successfully inserted a new message");
  } catch (error) {
    console.log("error while inserting message");
    throw error;
  }
};

export const handleGithubLogin = async () => {
  try {
    await signIn("github");
  } catch (error) {
    throw error;
  }
};

export const handleGithubLogout = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};

// Handling Credential login from Next Auth
export const handleLogin = async (previousState, formData) => {
  const { Username, Password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { Username, Password });

  } catch (error) {
    if (error.message.includes("NEXT_REDIRECT")) {
      redirect("/")
    } else {
      return { error: "Something went wrong \n Check your credentials" }
    }
  }
};
