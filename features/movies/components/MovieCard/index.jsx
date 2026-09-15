import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

/**
 * Renderiza um card de filme com imagem de capa, título e ano de lançamento.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {Movie} props.movie - Dados do filme a ser exibido.
 * @param {() => void} props.onPress - Função chamada ao tocar no card.
 * @param {number|string} props.width - Largura do card.
 * @returns {JSX.Element} Card clicável com informações do filme.
 */
export default function MovieCard({ movie, onPress, width }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: width }]}>        
        <Image
        
          source={{ uri: movie.img_capa }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {movie.nome}
        </Text>
        <Text style={styles.year}>
          {movie.ano}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

/*
O componente MovieCard é responsável por exibir as informações de um filme específico, como a imagem de capa, o nome e o ano de lançamento. 
Ele recebe as informações do filme através da prop movie e uma função onPress para lidar com o toque na tela. 
Quando o usuário toca no card, a função onPress é chamada, permitindo que a tela MovieList possa navegar para a tela de detalhes do filme ou realizar qualquer outra ação necessária.
*/