import { useState } from "react";

export function useLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  return {
    username,
    password,
    isPasswordHidden,
    setUsername,
    setPassword,
    togglePasswordVisibility,
  };
}
