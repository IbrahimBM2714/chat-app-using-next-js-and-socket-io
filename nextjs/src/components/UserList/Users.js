import React from "react";
import { auth } from "@/lib/auth";
import Styles from './UserList.module.css'
import ListItem from "./ListItem/ListItem";

const Users = async ({ users }) => {
  const session = await auth();

  const filteredUsers =
    session && users?.filter((user) => user.Username !== session.user.username);

  return (
    <div className={Styles.container}>
      {session &&
        filteredUsers?.map((user, index) => (
          <ListItem index={index} user={user} />
        ))}
    </div>
  );
};

export default Users;
