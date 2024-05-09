import { auth } from "@/lib/auth";
import React from "react";
import { handleGithubLogout } from "@/lib/action";
import Styles from "./links.module.css";
import CustomLink from "./CustomLink/CustomLink";

const Links = async () => {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div className={Styles.links}>
          <CustomLink address={"/"} name={"Chat"} />
          <form className={Styles.form} action={handleGithubLogout}>
            <button className={`${Styles.button}`}>Logout</button>
          </form>
        </div>
      ) : (
        <div className={Styles.links}>
          <CustomLink address={"/register"} name={"Register"} />
          <CustomLink address={"/login"} name={"Login"} />
        </div>
      )}
    </div>
  );
};

export default Links;
