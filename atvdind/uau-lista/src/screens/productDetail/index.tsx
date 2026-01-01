import React, { useContext, useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { SingleProductsContext } from "../../contexts/singleProductContext";
import { useCart } from "../../contexts/card";

export function ProductDetail() {
  const singleProductsContextValue = useContext(SingleProductsContext);
  const product = singleProductsContextValue?.product ?? null;
  const navigation = useNavigation<any>();
  const { addItem, itemsCount } = useCart();
  const cardAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(cardAnim, {
      toValue: 1,
      duration: 520,
      useNativeDriver: true,
    }).start();
  }, [cardAnim, product]);

  if (singleProductsContextValue?.isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (singleProductsContextValue?.error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{singleProductsContextValue.error}</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Nenhum produto selecionado.</Text>
      </View>
    );
  }

  const handleAdd = () => {
    addItem({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
    });
  };

  const cardStyle = {
    opacity: cardAnim,
    transform: [
      {
        translateY: cardAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 0],
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View style={[styles.card, cardStyle]}>
          <View style={styles.topRow}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>Voltar</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("myList")}
              style={styles.cartButton}
            >
              <Text style={styles.cartText}>Carrinho</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{itemsCount}</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.divider} />
            <View style={styles.bottomRow}>
              <View>
                <Text style={styles.price}>
                  R$ {product.price.toFixed(2)}
                </Text>
                <Text style={styles.stock}>Estoque: {product.stock}</Text>
              </View>
              <Pressable onPress={handleAdd} style={styles.addButton}>
                <Text style={styles.addButtonText}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
