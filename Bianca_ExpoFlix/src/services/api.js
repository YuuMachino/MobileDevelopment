import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_URL,
});

export async function getPopularMovies() {
  try {
    const response = await api.get("/movie/popular", {
      params: {
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: "pt-BR",
      },
    });

    const movies = response.data.results.map((movie) => ({
      id: movie.id.toString(),
      movie_id: movie.id,
      language: movie.original_language,
      title: movie.title,
      description: movie.overview,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      release_date: movie.release_date,
      rank: movie.vote_average,
    }));

    return movies;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
}