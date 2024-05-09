import { auth } from "./auth";
import pool from "./pool";

export const getUsers = async () => {
  try {
    const [result] = await pool.query("SELECT * FROM user;");

    return result;
  } catch (error) {
    console.log({ message: "error in getUsers" });
  }
};

export const getUser = async (Username) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM user WHERE Username = (?);",
      [Username]
    );
    return result;
  } catch (error) {
    console.log({ message: "error in getUsers" });
  }
};

export const getUserById = async (Id) => {
  try {
    const [result] = await pool.query("SELECT * FROM user WHERE Id = (?);", [
      Id,
    ]);
    return result;
  } catch (error) {
    console.log({ message: "error in getUsers" });
  }
};

export const getConversationId = async (user1, user2) => {
  try {
    const [id] = await pool.query(
      "SELECT id FROM conversation WHERE user1 = (?) && user2 = (?);",
      [user1, user2]
    );

    if (id.length === 0) {
      const [id1] = await pool.query(
        "SELECT id FROM conversation WHERE user1 = (?) && user2 = (?)",
        [user2, user1]
      )
      return id1

    } else {
      return id;
    }

  } catch (error) {
    console.log({ message: "error in getUsers" });
  }
};

export const getMessagesByConversationId = async (conversationId) => {
  try {
    const [messages] = await pool.query(
      "SELECT * FROM message WHERE conversationId = (?)",
      [conversationId]
    );
    return messages;
  } catch (error) {
    console.log({ message: "error in getMessagesByConversationId" });
  }
};

export const getAuthDetails = async () => {
  try {
    const session = await auth();
    return session;
  } catch (error) {
    console.log("error in getAuthDetails");
  }
};
