import { handleGithubLogin } from "@/lib/action";
import Styles from "./githubLogin.module.css";

const GithubLogin = () => {
  return (
    <div className={Styles.container}>
      <h2>Sign in with Github</h2>
      <form action={handleGithubLogin}>
        <button>Sign in with github</button>
      </form>
    </div>
  );
};

export default GithubLogin;
