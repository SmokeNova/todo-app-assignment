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
    // fetch user-data from some db maybe 😶
    const authState =
      email.toLowerCase() === "ssjbluemaaz@gmail.com" &&
      password.toLowerCase() === "dracula10";
    dispatch(login(authState));
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
