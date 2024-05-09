import CredentialsLogin from "@/components/Login/CredentialsLogin/CredentialsLogin";
import GithubLogin from "@/components/Login/GithubLogin/GithubLogin";
import Styles from './login.module.css'

const Login = () => {
  return (
    <div className={Styles.container} >
      <GithubLogin />
      <CredentialsLogin />
    </div>
  );
};

export default Login;
