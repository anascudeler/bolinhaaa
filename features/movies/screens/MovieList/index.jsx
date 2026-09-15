import React from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import Loading from "../../../../components/Loading";
import { ROUTES } from "../../../../constants/routes";

export default function MovieList() {
  const { movies, loading } = useMovies();
  const navigation = useNavigation();

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(ROUTES.MOVIE_DETAILS, {movie_id: item.id})
            }
            width={"45vw"}
          />
        )}
      />
    </View>
  );
}

/*
A tela MovieList é responsável por exibir a lista de filmes. Ela utiliza o hook useMovies para obter os dados dos filmes e o estado de carregamento. 
Se os dados ainda estiverem sendo carregados, ela exibe uma mensagem de "Carregando...". 
Caso contrário, ela renderiza uma FlatList com os filmes, utilizando o componente MovieCard para exibir cada filme individualmente. 
Quando um usuário toca em um card de filme, a função onPress é chamada, navegando para a tela de detalhes do filme (ROUTES.MOVIE_DETAILS) e passando as informações do filme selecionado como parâmetro.
*/