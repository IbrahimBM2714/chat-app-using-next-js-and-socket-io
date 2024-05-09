import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import Styles from "./navbar.module.css";
import Links from "./Links/Links";

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className={Styles.container}>
      <Link className={Styles.link} href={"/"}>
        Chat app
      </Link>
      <div>{session && <p>Welcome {session?.user.username}</p>}</div>
      <Links />
    </div>
  );
};

export default Navbar;
