import React, { useContext } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { NavigationButton } from "../../components/navigationButton";
import { LoginContext } from "../../contexts/loginContext";

export function HomeScreen() {
  const loginContextValue = useContext(LoginContext);
  const name = loginContextValue?.name;
  const token = loginContextValue?.token;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{token}</Text>
      <NavigationButton where="productDetails" />

      <NavigationButton where="myList" />
    </View>
  );
}
