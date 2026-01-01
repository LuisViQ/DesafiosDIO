import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { useCart } from "../../contexts/card";

type Item = {
  id: number;
  title: string;
  thumbnail: string;
  price: number; // precisa pro carrinho calcular total
};

type ItemComponentProps = {
  item: Item;
  onPress?: () => void;
};

export function ItemComponent({ item, onPress }: ItemComponentProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.content}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleAdd} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}
