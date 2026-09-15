import { api } from "../../../services/api";


/**
 * Busca os filmes populares usando a API do TMDB.
 *
 * @param {number} page - Número da página para paginar os resultados (padrão: 1).
 * @returns {Promise<Movie[]>}
*/
export async function getPopularMovies(page = 1) {
  const response = await api.get("/movie/popular", {
    params: {
      page: page,
    },
  });
  return response.data.results.map((movie) => ({
    id: movie.id,
    nome: movie.title,
    img_capa: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    data_lancamento: movie.release_date.split("-")[0],
    sinopse: movie.overview,
    popularidade: movie.popularity,
  }));
}

/**
 * @param {number} movieId
 * @returns {Promise<Actor[]>}
 */
export const getElencoMovie = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`);

  return response.data.cast.map((actor) => ({
    id: actor.id,
    nome: actor.name,
    personagem: actor.character,
    imagem: actor.profile_path? `https://image.tmdb.org/t/p/w200${actor.profile_path}`: null,
  }));
};

/**
 * Busca os detalhes de um filme específico usando a API do TMDB.
 * @param {number} movieId 
 * @returns {Promise<MovieDetails|null>} Objeto com os detalhes do filme ou null em caso de erro.
 */

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  const movie = response.data;

  if(!movie) {
    return null;
  }

  return {
    id: movie.id,
    nome: movie.title,
    img_capa: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    img_background: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : null,
    orcamento: movie.budget,
    generos: movie.genres.map((genre) => ({ id: genre.id, nome: genre.name })),
    homepage: movie.homepage,
    pais_origem: movie.production_countries.map((country) => country.name),
    lingua_original: movie.original_language,
    titulo_original: movie.original_title,
    sinopse: movie.overview,
    nota: movie.vote_average,
    data_lancamento: movie.release_date ? movie.release_date.split("-").reverse().join("/") : null,
    receita: movie.revenue,
    tempo_execucao: movie.runtime,
    linguas_faladas: movie.spoken_languages.map((lang) => ({ iso_639_1: lang.iso_639_1, nome: lang.name })),
    status: movie.status,
    tagline: movie.tagline,
    titulo: movie.title,
    video: movie.video,
  };
};