import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import LoginContextProvider from "../contexts/loginContext";
import ProductsContextProvider from "../contexts/productsContext";
import SingleProductsContextProvider from "../contexts/singleProductContext";
import { CartProvider } from "../contexts/card";

export function Routes() {
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <ProductsContextProvider>
          <SingleProductsContextProvider>
            <CartProvider>
              <StackRoutes />
            </CartProvider>
          </SingleProductsContextProvider>
        </ProductsContextProvider>
      </LoginContextProvider>
    </NavigationContainer>
  );
}
