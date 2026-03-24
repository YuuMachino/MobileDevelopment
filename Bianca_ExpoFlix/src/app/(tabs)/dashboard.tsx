import { MovieCard } from "../../components/movieCard";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/api";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const data = await getPopularMovies();
    console.log("FILMES DA API:", data); // 👈 debug
    setMovies(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filmes 🎬</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19244B",
    padding: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 30,
  },
});