import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { createStackNavigator } from "@react-navigation/stack";
const StackA = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
