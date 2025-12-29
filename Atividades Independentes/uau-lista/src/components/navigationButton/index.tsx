import React from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";
import { useNavigationActions } from "../../hooks/useNavigationActions";

type NavigationButtonProps = {
  where: "home" | "productDetails" | "myList" | "login";
  label?: string;
};

export function NavigationButton({ where, label }: NavigationButtonProps) {
  const navigation = useNavigationActions();

  const actions = {
    home: navigation.goToHome,
    productDetails: navigation.goToProductDetails,
    myList: navigation.goToMyList,
    login: navigation.goToLogin,
  } as const;

  const handlePress = actions[where];

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.textButton}>{label ?? `Ir para ${where}`}</Text>
    </Pressable>
  );
}
