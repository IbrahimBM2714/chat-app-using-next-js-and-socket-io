export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user[0][0].Id;
        token.username = user[0][0].Username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user

      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login")
      const isOnRegister = request.nextUrl?.pathname.startsWith("/register")
      const isOnChatPage = request.nextUrl?.pathname.startsWith("/")

      if (isOnChatPage && !user) {
        if (isOnRegister) {
          return true
        } else {
          return false
        }
      }

      if ((isOnLoginPage || isOnRegister) && user) {
        console.log("baaa lesne")
        return Response.redirect(new URL("/", request.nextUrl))
      }

      return true

    }
  },
};
