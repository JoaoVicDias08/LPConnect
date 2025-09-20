import { Slot } from "expo-router";
import { useFonts, Oswald_700Bold } from "@expo-google-fonts/oswald";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { View } from "react-native";
import './global.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    OswaldBold: Oswald_700Bold,   // fonte para títulos
    InterRegular: Inter_400Regular, // fonte para textos
  });

  // Enquanto as fontes carregam, renderiza tela vazia
  if (!fontsLoaded) {
    return <View className="flex-1 bg-bg" />;
  }

  // Slot renderiza todas as telas filhas do app
  return <Slot />;
}
