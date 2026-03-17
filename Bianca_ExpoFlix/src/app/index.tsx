import { InputComponent } from "../components/inputComponent";
import { useRouter, type Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default function Login() {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [errorMessage, setErrorMessage] = useState<string>("");
const router = useRouter();

const handlerLogin = () => {
setErrorMessage("");

if (!email || !password) {
  setErrorMessage("Preencha todos os campos.");
  return;
}

if (!email.includes("@")) {
  setErrorMessage("Digite um email válido.");
  return;
}

if (password.length < 6) {
  setErrorMessage("A senha deve ter no mínimo 6 caracteres.");
  return;
}

if (email !== "boanoite.punpun@gmail.com" || password !== "BoanoitePunpun") {
  setErrorMessage("Email ou senha incorretos.");
  return;
}

router.replace("/(tabs)/dashboard" as Href);
};

return (
<View style={styles.container}>
<Text style={styles.title}>ExpoFlix</Text>
<InputComponent
label="Email"
placeholder="Digite o Email"
type="email-address"
value={email}
setValue={setEmail}
/>
<InputComponent
label="Senha"
placeholder="Digite a Senha"
type="default"
value={password}
setValue={setPassword}
/>
{errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}
<TouchableOpacity style={styles.button} onPress={handlerLogin}>
<Text style={styles.buttonTitle}>Entrar</Text>
</TouchableOpacity>
<StatusBar style="auto" hidden />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#19244B",
},
title: {
color: "white",
fontSize: 32,
fontWeight: "600",
marginBottom: 24,
},
input: {
backgroundColor: "white",
width: 300,
height: 40,
padding: 4,
borderWidth: 1,
borderColor: "#6B76A0",
borderRadius: 8,
},
errorMessage: {
alignSelf: "center",
color: "#F5482F",
},
button: {
backgroundColor: "#86A16C",
width: 300,
height: 40,
marginTop: 30,
borderRadius: 8,
justifyContent: "center",
alignItems: "center",
},
buttonTitle: {
color: "#fff",
fontWeight: "400",
fontSize: 16,
},
});