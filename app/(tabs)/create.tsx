import { AppSafeAreaView } from "@/components/ui/app-safe-area-view";
import { Colors } from "@/constants/colors";
import { StyleSheet, Text } from "react-native";

export default function CreateScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Text style={styles.text}>Create</Text>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  text: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: "600",
  },
});
