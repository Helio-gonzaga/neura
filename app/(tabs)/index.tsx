import { AppSafeAreaView } from "@/components/ui/app-safe-area-view";
import { Search } from "@/components/ui/search";
import { Colors } from "@/constants/colors";

import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Olá, Helio 👋</Text>

        <Text style={styles.subtitle}>Aqui está o que você salvou</Text>
      </View>

      <View>
        <Search placeholder="Buscar conteúdo..." />
      </View>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },

  header: {
    marginTop: 12,
    marginBottom: 28,
  },

  hello: {
    color: Colors.text,
    fontSize: 30,
    lineHeight: 48,
    fontFamily: "Roboto_700Bold",
    letterSpacing: -1,
  },

  subtitle: {
    color: Colors.gray,
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Roboto_400Regular",
  },
});
