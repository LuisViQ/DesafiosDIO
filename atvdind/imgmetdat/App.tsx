import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/routes";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});
export default function App() {
  return <Routes />;
}
