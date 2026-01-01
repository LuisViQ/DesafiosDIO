import React, { useContext, useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { LoginContext } from "../../contexts/loginContext";
import { ItemComponent } from "../../components/itemComponent";
import { ProductsContext } from "../../contexts/productsContext";
import { SingleProductsContext } from "../../contexts/singleProductContext";
import { useCart } from "../../contexts/card";

export function HomeScreen() {
  const loginContextValue = useContext(LoginContext);
  const name = loginContextValue?.name;
  const productsContextValue = useContext(ProductsContext);
  const products = productsContextValue?.products ?? [];
  const isLoading = productsContextValue?.isLoading;
  const error = productsContextValue?.error;
  const singleProductsContextValue = useContext(SingleProductsContext);
  const navigation = useNavigation<any>();
  const { itemsCount } = useCart();
  const headerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 650,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [headerAnim]);

  const handlePressItem = (id: number) => {
    singleProductsContextValue?.loadProduct(id);
    navigation.navigate("productDetails");
  };

  const handleOpenCart = () => {
    navigation.navigate("myList");
  };

  const headerStyle = {
    opacity: headerAnim,
    transform: [
      {
        translateY: headerAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [14, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View pointerEvents="none" style={styles.background}>
        <View style={[styles.blob, styles.blobOne]} />
        <View style={[styles.blob, styles.blobTwo]} />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Animated.View style={[styles.header, headerStyle]}>
            <View style={styles.titleBlock}>
              <Text style={styles.title}>Ola, {name}</Text>
              <Text style={styles.subtitle}>
                Encontre algo especial para sua lista hoje.
              </Text>
            </View>
            <Pressable onPress={handleOpenCart} style={styles.cartButton}>
              <Text style={styles.cartText}>Carrinho</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{itemsCount}</Text>
              </View>
            </Pressable>
          </Animated.View>
        }
        ListEmptyComponent={
          <View style={styles.stateCard}>
            <Text style={styles.stateText}>
              {isLoading
                ? "Carregando produtos..."
                : error ?? "Nenhum produto encontrado."}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ItemComponent item={item} onPress={() => handlePressItem(item.id)} />
        )}
      />
    </View>
  );
}
