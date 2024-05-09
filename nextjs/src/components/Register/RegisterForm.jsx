"use client";
import { addUser } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const Register = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form action={formAction}>
      <input type="text" name="Username" placeholder="Username" />
      <input type="password" name="pass" placeholder="Password" />
      <button>Add User</button>
      {state?.error}
      <Link
        style={{
          color: "blue",
        }}
        href={"/login"}
      >
        Have an account? Consider login in{" "}
      </Link>
    </form>
  );
};

export default Register;
