import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import LoginContextProvider from "../contexts/loginContext";
import ProductsContextProvider from "../contexts/productsContext";

export function Routes() {
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <ProductsContextProvider>
          <StackRoutes />
        </ProductsContextProvider>
      </LoginContextProvider>
    </NavigationContainer>
  );
}
