import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { gStyle } from "../styles/style";

export const Contact = ({ route }) => (
  <View style={gStyle.main}>
    <Image
      style={styles.img}
      source={{
        uri: route?.params?.img || "",
      }}
    ></Image>
    <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
    <Text style={styles.full}>{route.params.full}</Text>
  </View>
);

const styles = StyleSheet.create({
  img: { width: "100%", height: 200 },
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#f55151",
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
});
