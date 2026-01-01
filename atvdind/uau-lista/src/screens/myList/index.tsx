import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { useCart } from "../../contexts/card";
import { useNavigation } from "@react-navigation/native";

export function MyList() {
  const {
    items,
    itemsCount,
    total,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View pointerEvents="none" style={styles.background}>
        <View style={[styles.blob, styles.blobOne]} />
        <View style={[styles.blob, styles.blobTwo]} />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Seu Carrinho</Text>
              <Text style={styles.subtitle}>{itemsCount} itens</Text>
            </View>
            <Pressable style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Limpar</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>Voltar</Text>
            </Pressable>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>Seu carrinho esta vazio.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
              <View style={styles.qtyRow}>
                <Pressable
                  style={styles.qtyButton}
                  onPress={() => decreaseItem(item.id, 1)}
                >
                  <Text style={styles.qtyButtonText}>-</Text>
                </Pressable>
                <Text style={styles.qtyValue}>{item.quantity}</Text>
                <Pressable
                  style={styles.qtyButton}
                  onPress={() =>
                    addItem(
                      {
                        id: item.id,
                        title: item.title,
                        thumbnail: item.thumbnail,
                        price: item.price,
                      },
                      1
                    )
                  }
                >
                  <Text style={styles.qtyButtonText}>+</Text>
                </Pressable>
                <Pressable
                  style={styles.removeButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remover</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={
          items.length > 0 ? (
            <View style={styles.summary}>
              <Text style={styles.summaryLabel}>Total</Text>
              <Text style={styles.summaryValue}>R$ {total.toFixed(2)}</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}
