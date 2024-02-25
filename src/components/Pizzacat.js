import React, { useState, useEffect } from "react";
import { SIZES, COLORS } from "../constants.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.0.103:8080", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={{ paddingTop: 40 }}>
        <Text style={{ fontSize: SIZES.h2, fontWeight: "bold" }}>
          Римская пицца
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "auto",
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        {pizzas.map((pizza) => (
          <View
            key={pizza.id}
            style={{
              width: "100%",
              height: "auto",
              marginBottom: 10,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "auto", height: 140 }}>
                <Image
                  source={{ uri: pizza.imagepizza }}
                  style={{
                    width: 140,
                    height: 140,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </View>

              <View
                style={{
                  height: 140,
                  width: "60%",
                  paddingLeft: 10,
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.h3,
                    fontWeight: "bold",
                    paddingBottom: 5,
                  }}
                >
                  {pizza.namepizza}
                </Text>
                <Text
                  numberOfLines={4}
                  ellipsizeMode={"tail"}
                  style={{ fontSize: SIZES.body4 }}
                >
                  {pizza.descriptionpizza}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    paddingLeft: 15,
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: SIZES.h2,
                  }}
                >
                  {pizza.pricepizza}
                </Text>
                <Pressable
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    marginRight: 5,
                  }}
                  onPress={() => addToCart(pizza.id)}
                >
                  <Text style={styles.button}>В корзину +</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: SIZES.h2,
    color: COLORS.error,
  },
  button: {
    fontSize: SIZES.h3,
    color: "white",
    textAlign: "center",
    width: 100,
    borderRadius: 25,
    padding: 8,
    backgroundColor: "#FF4500",
  },
});
