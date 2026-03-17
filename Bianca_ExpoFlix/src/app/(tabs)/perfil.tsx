import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Perfil() {
const router = useRouter();
return (
<View style={styles.container}>
<Text style={styles.perfil}>Perfil</Text>
<View style={styles.perfilContainer}>
<Image
style={styles.avatar}
resizeMode="cover"
source={require("../../../assets/images/punpun.jpg")}
/>
<Text style={styles.text}>Nome: Punpun</Text>
<Text style={styles.text}>Email: boanoite.punpun@gmail.com</Text>
<TouchableOpacity
style={styles.button}
onPress={() => router.replace("/")}
>
<Text style={styles.btnTitle}>Sair</Text>
</TouchableOpacity>
</View>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19244B",
    alignItems: "center",
    paddingTop: 50,
  },
  perfil: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 20,
  },
  perfilContainer: {
    backgroundColor: "#5C668B",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#86A16C",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
