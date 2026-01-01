import { createContext, useState, type ReactNode } from "react";

interface UserContextProps {
  name: string;
  token: string;
  saveName: (name: string) => void;
  saveToken: (token: string) => void;
}

type LoginContextProviderProps = {
  children: ReactNode;
};

export const LoginContext = createContext<UserContextProps | null>(null);

export default function LoginContextProvider({
  children,
}: LoginContextProviderProps) {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const saveName = (user: string) => {
    setName(user);
  };
  const saveToken = (token: string) => {
    setToken(token);
  };

  const contextValue: UserContextProps = {
    name,
    token,
    saveName,
    saveToken,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
