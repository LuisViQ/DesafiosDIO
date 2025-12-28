import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginContext } from "../contexts/loginContext";
import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";
import { ProductDetail } from "../screens/productDetail";
import { MyList } from "../screens/myList";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Home", headerShown: true }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetail}
        options={{ title: "Details", headerShown: false }}
      />
      <Stack.Screen
        name="myList"
        component={MyList}
        options={{ title: "My List", headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function StackRoutes() {
  const loginContext = useContext(LoginContext);
  const isLoggedIn = Boolean(loginContext?.token);

  return isLoggedIn ? <AppStack /> : <AuthStack />;
}
