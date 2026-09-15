import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import img_not_found from "./img_not_found.jpg";
export default function ActorCard({ actor }) {
  const imageSource = actor.imagem ? { uri: actor.imagem } : img_not_found;
  return (
    <View style={styles.cardBody}>      
      <Image source={imageSource} style={styles.image}/>
      <Text numberOfLines={1}>{actor.nome}</Text>
      <Text numberOfLines={1} style={styles.personagem}>{actor.personagem}</Text>
    </View>
  );
}