/**
 * Hook para buscar e gerenciar a lista de filmes populares.
 *
 * @returns {{
 *   movies: Array<Movie>,
 *   loading: boolean,
 *   refresh: () => Promise<void>
 * }} Objeto com:
 * - `movies`: lista de filmes carregados da API;
 * - `loading`: indica se a busca inicial ainda está em andamento;
 * - `refresh`: função assíncrona para atualizar manualmente a lista de filmes.
 */
 

import { useEffect, useState } from "react";
import { getPopularMovies, getElencoMovie, getMovieDetails } from "../services/movieService";



export const useMovies = (page=1) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const data = await getPopularMovies(page);
      setMovies(data);
    } catch (error) {
      console.log("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return {
    movies,
    loading,
    refresh: fetchMovies, 
  };
};

/**
 * Hook para buscar e gerenciar o elenco de um filme específico.
 *
 * @param {number|string} movieId - ID do filme usado na consulta do elenco.
 * @returns {{
 *  elenco: Array<Actor>,
 *  loading: boolean
 * }} Objeto com:
 * - `elenco`: lista de integrantes do elenco do filme informado.
 */

export const useElencoMovie = (movieId) => {
  const [elenco, setElenco] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getElencoMovie(movieId);
        setElenco(data);
      } catch (error) {
        console.log("Erro ao buscar elenco do filme:", error);
      }
        finally {
        setLoading(false);
      }
    })();
  }, [movieId]);
  
  return { elenco, loading };
};

/**
  * Hook para buscar e gerenciar os detalhes de um filme específico.
  * @param {number|string} movieId - ID do filme usado na consulta dos detalhes.
  * @return {{
  *   movieDetails: MovieDetails|null,
  *   loading: boolean
  * }}
 */
export const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log("Erro ao buscar detalhes do filme:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);
  return { movieDetails, loading };
};
