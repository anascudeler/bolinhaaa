import React from "react";
import { useRoute } from "@react-navigation/native";
import { useMovieDetails, useElencoMovie } from "../../hooks/useMovies";
import ActorCard from "../../components/ActorCard";
import { Text, Image, ScrollView, FlatList, View } from "react-native";
import Loading from "../../../../components/Loading";
import styles from "./styles";

function formatCurrency(value) {
  if (!value) return "Não informado";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "USD" });
}

function formatRuntime(minutes) {
  if (!minutes) return null;
  const h = Math.floor(minutes / 60);
  const min = minutes % 60;
  return h > 0 ? `${h}h ${min}min` : `${min}min`;
}

function renderElenco(elenco) {
  if (!elenco || elenco.length === 0) {
    return <Text style={styles.noElenco}>Nenhum membro do elenco encontrado.</Text>;
  }
  return (
    <FlatList
      data={elenco}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ActorCard actor={item} />}
    />
  );
}

export default function MovieDetails() {
  const route = useRoute();
  const { movie_id } = route.params;
  const { elenco } = useElencoMovie(movie_id);
  const { movieDetails, loading } = useMovieDetails(movie_id);

  if (loading) {
    return <Loading />;
  }

  const runtime = formatRuntime(movieDetails.tempo_execucao);
  const releaseDate = movieDetails.data_lancamento;
  const backGroundImg = movieDetails.img_background || movieDetails.img_capa;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {backGroundImg && (
        <Image source={{ uri: backGroundImg }} style={styles.bgImage} />
      )}
      
      { /* Conteúdo principal sobreposto à imagem de fundo */}
      <View style={{padding: 16}}>

        {/* Poster + Título */}
        <View style={styles.headerRow}>
          {movieDetails.img_capa && (
            <Image source={{ uri: movieDetails.img_capa }} style={styles.poster} />
          )}
          <View style={styles.titleBlock}>            

            <Text style={styles.title}>{movieDetails.titulo}</Text>
            {movieDetails.titulo_original !== movieDetails.titulo && (
              <Text style={styles.titleOriginal}>{movieDetails.titulo_original}</Text>
            )}
            {!!movieDetails.tagline && (
              <Text style={styles.tagline}>"{movieDetails.tagline}"</Text>
            )}
          </View>
        </View>

        {/* Badges */}
        <View style={styles.badgeRow}>
          {!!movieDetails.status && (
            <View style={[styles.badge, styles.badgeStatus]}>
              <Text style={[styles.badgeText, styles.badgeStatusText]}>{movieDetails.status}</Text>
            </View>
          )}
          {movieDetails.adult && (
            <View style={[styles.badge, styles.badgeAdult]}>
              <Text style={[styles.badgeText, styles.badgeAdultText]}>+18</Text>
            </View>
          )}
        </View>

        {/* Gêneros */}
        <View style={styles.titleBlock}>
          {movieDetails.generos?.length > 0 && (
            <View style={styles.chipRow}>
              {movieDetails.generos.map((g) => (
                <View key={g.id} style={styles.chip}>
                  <Text style={styles.chipText}>{g.nome}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Info rápida */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 8 }}>
          {!!releaseDate && (
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Lançamento</Text>
              <Text style={styles.infoValue}>{releaseDate}</Text>
            </View>
          )}
          {!!runtime && (
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Duração</Text>
              <Text style={styles.infoValue}>{runtime}</Text>
            </View>
          )}
          {!!movieDetails.lingua_original && (
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Idioma</Text>
              <Text style={styles.infoValue}>{movieDetails.lingua_original.toUpperCase()}</Text>
            </View>
          )}
          {movieDetails.nota > 0 && (
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>nota</Text>
              <Text style={styles.infoValue}>{movieDetails.nota.toFixed(1)}</Text>
            </View>
          )}
          {movieDetails.orcamento > 0 && (
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Orçamento</Text>
              <Text style={styles.infoValue}>{formatCurrency(movieDetails.orcamento)}</Text>
            </View>
          )}
          {movieDetails.receita > 0 && (
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Receita</Text>
              <Text style={styles.infoValue}>{formatCurrency(movieDetails.receita)}</Text>
            </View>
          )}
        </ScrollView>

        {/* Sinopse */}
        {!!movieDetails.sinopse && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sinopse</Text>
            <Text style={styles.description}>{movieDetails.sinopse}</Text>
          </View>
        )}


        {/* Elenco */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Elenco</Text>
          {renderElenco(elenco)}
        </View>
        

        {/* País de origem */}
        {movieDetails.pais_origem?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>País de Origem</Text>
            <View style={styles.chipRow}>
              {movieDetails.pais_origem.map((p) => (
                <View key={p} style={styles.chip}>
                  <Text style={styles.chipText}>{p}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Línguas faladas */}
        {movieDetails.linguas_faladas?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Línguas</Text>
            <View style={styles.chipRow}>
              {movieDetails.linguas_faladas.map((l) => (
                <View key={l.iso_639_1} style={styles.chip}>
                  <Text style={styles.chipText}>{l.nome}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
       
      </View>
    </ScrollView>
  );
}