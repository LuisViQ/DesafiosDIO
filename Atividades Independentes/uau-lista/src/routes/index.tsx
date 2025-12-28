import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import LoginContextProvider from "../contexts/loginContext";

export function Routes() {
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <StackRoutes />
      </LoginContextProvider>
    </NavigationContainer>
  );
}
