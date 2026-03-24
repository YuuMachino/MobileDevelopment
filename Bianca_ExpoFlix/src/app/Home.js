import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { getPopularMovies } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const data = await getPopularMovies();
    console.log(data); // 👈 veja no console
    setMovies(data);
  }

  return (
    <ScrollView>
      <Text>Filmes Populares 🎬</Text>

      {movies.map((movie) => (
        <View key={movie.id}>
          <Text>{movie.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}