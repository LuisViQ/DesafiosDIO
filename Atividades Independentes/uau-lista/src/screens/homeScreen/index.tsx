import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { NavigationButton } from "../../components/navigationButton";
import { LoginContext } from "../../contexts/loginContext";
import { ItemComponent } from "../../components/itemComponent";
import { ProductsContext } from "../../contexts/productsContext";

export function HomeScreen() {
  const loginContextValue = useContext(LoginContext);
  const name = loginContextValue?.name;
  const token = loginContextValue?.token;
  const productsContextValue = useContext(ProductsContext);
  const products = productsContextValue?.products ?? [];
  return (
    <View style={styles.container}>
      <Text>Hi {name}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemComponent item={item} />}
      />
    </View>
  );
}
