import { useContext } from "react";

import handleLogin from "../../services/auth";
import { LoginContext } from "../../contexts/loginContext";

type LoginCredentials = {
  username: string;
  password: string;
};

export function useLoginActions() {
  const loginContext = useContext(LoginContext);

  const submitLogin = async ({ username, password }: LoginCredentials) => {
    const loginPayload = { username, password };
    console.log(loginPayload);

    try {
      const data = await handleLogin(username, password);
      const receivedName = data.lastName;
      const receivedToken = data.token ?? data.accessToken;
      if (receivedToken) {
        loginContext?.saveName(receivedName);
        loginContext?.saveToken(receivedToken);
        console.log(receivedToken);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      console.log("Erro:", message);
    }
  };

  return { submitLogin };
}
