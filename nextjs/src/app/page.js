import { getUsers } from "@/lib/data";
import React from "react";
import Users from "@/components/UserList/Users";

// Main component that displays all the users
const Chat = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        All users
      </h1>
      <Users users={users} />
    </div>
  );
};

export default Chat;
