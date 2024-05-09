import Styles from "./register.module.css";
import RegisterForm from "@/components/Register/RegisterForm";

const Register = () => {
  return (
    <div className={Styles.container}>
      <h2>Register</h2>

      <RegisterForm />
    </div>
  );
};

export default Register;
