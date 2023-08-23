import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export function useLogin() {
  const dispatch = useDispatch();
  const initialData = {
    email: "",
    password: "",
  };
  type FieldData = typeof initialData;

  const [data, setData] = useState(initialData);

  const { email, password } = data;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (
      email.toLowerCase() === "ssjbluemaaz@gmail.com" &&
      password.toLowerCase() === "dracula10"
    ) {
      dispatch(login());
      alert("Form Submitted");
    } else {
      alert("Invalid username or password");
    }
  }

  function updateFields(field: Partial<FieldData>) {
    setData((prev) => {
      return { ...prev, ...field };
    });
  }

  return {
    email,
    password,
    handleSubmit,
    updateFields,
  };
}
