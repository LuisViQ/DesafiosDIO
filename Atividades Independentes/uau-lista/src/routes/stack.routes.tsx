import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";
import { ProductDetail } from "../screens/productDetail";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
      />

      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Home", headerShown: true }}
      />

      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="productDetails" component={ProductDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
