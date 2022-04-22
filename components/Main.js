import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Form } from "./Form";
import { gStyle } from "../styles/style";

export const Main = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!",
      full: "Google is full",
      key: "1",
      img: "https://www.armadatekstil.net/wp-content/uploads/2014/03/cute-puppy-pictures.jpg",
    },
    {
      name: "Apple",
      anons: "Apple!!",
      full: "Apple is full",
      key: "2",
      img: "https://avatars.mds.yandex.net/i?id=fe3ed73f4b2567c7a1db7e17a46662eb_l-3580534-images-thumbs&ref=rim&n=13&w=640&h=640",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!",
      full: "FaceBook is full",
      key: "3",
      img: "https://i.pinimg.com/originals/3d/c9/86/3dc986bf715b8e551ed50d321e5e1401.jpg",
    },
  ]);

  const [isModal, setIsModal] = useState(false);

  const loadScene = () => {
    navigation.navigate("Contact");
  };

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      article.img = article.img
        ? article.img
        : "https://www.pixel-creation.com/wp-content/uploads/baby-elephant-and-birds-pictures-photos-and-images-for-facebook.jpg";
      return [article, ...list];
    });

    setIsModal(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={isModal}>
        <View style={gStyle.main}>
          <Ionicons
            name="close"
            size={34}
            color="black"
            style={styles.iconClose}
            onPress={() => setIsModal(false)}
          />
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={() => setIsModal(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <Button title="Перейти на страницу" onPress={loadScene}></Button>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Contact", item)}
          >
            <Image
              style={styles.img}
              source={{
                uri: item.img,
              }}
            ></Image>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  item: { width: "100%", marginBottom: 30 },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  img: {
    width: "100%",
    height: 200,
  },
  iconClose: {
    textAlign: "center",
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
});
