import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";

import { SummaryCard } from "@/app/models/summary-cards.model";
import Card from "@/components/ui/card";
import { Text } from "@/components/ui/global-text";
import { Colors } from "@/constants/colors";

export function SummaryCards() {
  const items: SummaryCard[] = [
    {
      id: "1",
      value: "32",
      label: "Salvos",
    },
    {
      id: "2",
      value: "12",
      label: "Lidos",
    },
    {
      id: "3",
      value: "8",
      label: "Resumos IA",
    },
  ];

  const renderColor = (label: string) => {
    switch (label) {
      case "Salvos":
        return Colors.secondary;
      case "Lidos":
        return Colors.primary;
      case "Resumos IA":
        return Colors.text;
      default:
        return Colors.text;
    }
  };

  return (
    <Card height={170}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons
            name="chart-bar"
            size={20}
            color={Colors.lightGray}
          />

          <Text style={styles.title}>Seu resumo</Text>
        </View>

        <Text style={styles.week}>Semana atual</Text>
      </View>

      <View style={styles.cardsRow}>
        {items.map((item) => (
          <View key={item.id} style={styles.statCard}>
            <Text style={[styles.value, { color: renderColor(item.label) }]}>
              {item.value}
            </Text>

            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  title: {
    color: Colors.lightGray,
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
  },

  week: {
    color: Colors.gray,
    fontSize: 15,
    fontFamily: "Roboto_500Medium",
  },

  cardsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
  },

  statCard: {
    flex: 1,
    height: 92,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  value: {
    fontSize: 31,
    fontFamily: "Roboto_700Bold",
    marginBottom: 8,
  },

  label: {
    color: Colors.gray,
    fontSize: 15,
    fontFamily: "Roboto_500Medium",
  },
});
