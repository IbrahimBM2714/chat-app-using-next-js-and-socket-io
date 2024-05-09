"use client";

import Link from "next/link";
import React from "react";
import Styles from "./customLink.module.css";
import { usePathname } from "next/navigation";

const CustomLink = ({ address, name }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${Styles.link} ${
        pathname.startsWith(address) && Styles.active
      }`}
      href={address}
    >
      {name}
    </Link>
  );
};

export default CustomLink;
