import { AppSafeAreaView } from "@/components/ui/app-safe-area-view";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

import { Categories } from "@/components/ui/categories";
import { Text } from "@/components/ui/global-text";
import { Search } from "@/components/ui/search";
import { Colors } from "@/constants/colors";

import Card from "@/components/ui/card";
import { SummaryCards } from "@/components/ui/summary-cards";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Post } from "../models/post.model";

const posts: Post[] = [
  {
    id: "1",
    title: "MCP no VSCode: como integrar e automatizar tarefas com IA",
    source: "LinkedIn",
    time: "2h atrás",
    image: require("@/assets/mocks/images/mock-3.png"),
    icon: "logo-linkedin",
    iconColor: "#0A66C2",
    type: "bookmark",
    read: true,
    link: "https://www.linkedin.com/posts/openai_mcp-vscode-ai-activity",
    notes:
      "Testar integração do MCP no projeto NEURA para permitir que a IA entenda contexto do código automaticamente.",
  },
  {
    id: "2",
    title: "Kubernetes explicado de forma simples",
    source: "YouTube",
    time: "5h atrás",
    image: require("@/assets/mocks/images/mock-1.png"),
    icon: "logo-youtube",
    iconColor: "#FF0000",
    type: "more",
    read: false,
    link: "https://www.youtube.com/watch?v=X48VuDVv0do",
    notes:
      "Revisar conceitos de pods, deployments e services para melhorar conhecimento de arquitetura cloud.",
  },
  {
    id: "3",
    title: "Guia completo de RAG: conceitos, arquitetura e exemplos",
    source: "dev.to",
    time: "1d atrás",
    image: require("@/assets/mocks/images/mock-4.png"),
    icon: "dev-to",
    iconColor: "#A1A1AA",
    type: "more",
    read: false,
    link: "https://dev.to/jamesli/a-complete-guide-to-rag-applications",
    notes:
      "Usar como base para implementar RAG no NEURA usando embeddings e busca vetorial.",
  },
  {
    id: "4",
    title: "Arquitetura Frontend Moderna em 2024",
    source: "Instagram",
    time: "1d atrás",
    image: require("@/assets/mocks/images/mock-2.png"),
    icon: "logo-instagram",
    iconColor: "#E1306C",
    type: "more",
    read: false,
    link: "https://www.instagram.com/p/C-modern-frontend-architecture",
    notes:
      "Aplicar separação por features e componentes reutilizáveis no app React Native.",
  },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const handleSelectCategory = (category: string) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? "Todos" : category,
    );
  };

  return (
    <AppSafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Olá, Helio 👋</Text>

        <Text style={styles.subtitle}>Aqui está o que você salvou</Text>
      </View>

      <Search placeholder="Buscar conteúdo..." />

      <Categories
        items={["Todos", "IA", "Frontend", "Backend", "Arquitetura", "Design"]}
        activeCategory={activeCategory}
        onSelect={handleSelectCategory}
      />

      <View style={styles.inboxHeader}>
        <View style={styles.inboxLeft}>
          <MaterialCommunityIcons
            name="email-variant"
            size={20}
            color={Colors.lightGray}
          />

          <Text style={styles.inboxText}>Inbox</Text>
        </View>

        <Text style={styles.itemsText}>32 itens</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {posts.map((post) => (
          <Pressable
            key={post.id}
            onPress={() => router.push(`/post/${post.id}`)}
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.985 : 1 }],
                opacity: pressed ? 0.88 : 1,
              },
            ]}
          >
            <Card height={120}>
              <View style={styles.cardContent}>
                <View style={styles.imageWrapper}>
                  <Image
                    source={post.image}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.info}>
                  <Text style={styles.title} numberOfLines={3}>
                    {post.title}
                  </Text>

                  <View style={styles.sourceRow}>
                    {post.source === "dev.to" ? (
                      <MaterialCommunityIcons
                        name="dev-to"
                        size={18}
                        color={post.iconColor}
                      />
                    ) : (
                      <Ionicons
                        name={post.icon as keyof typeof Ionicons.glyphMap}
                        size={18}
                        color={post.iconColor}
                      />
                    )}

                    <Text style={styles.sourceText}>
                      {post.source} · {post.time}
                    </Text>
                  </View>
                </View>

                <View style={styles.actionIcon}>
                  {post.type === "bookmark" ? (
                    <Pressable
                      hitSlop={10}
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.6 : 1,
                        transform: [{ scale: pressed ? 0.92 : 1 }],
                      })}
                    >
                      <Ionicons name="bookmark" size={22} color="#FACC15" />
                    </Pressable>
                  ) : (
                    <Pressable
                      hitSlop={10}
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.6 : 1,
                        transform: [{ scale: pressed ? 0.92 : 1 }],
                      })}
                    >
                      <MaterialCommunityIcons
                        name="dots-vertical"
                        size={24}
                        color={Colors.lightGray}
                      />
                    </Pressable>
                  )}
                </View>
              </View>
            </Card>
          </Pressable>
        ))}

        <Pressable
          style={({ pressed }) => [
            {
              marginBottom: 20,
              transform: [{ scale: pressed ? 0.985 : 1 }],
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <Card height={72}>
            <View style={styles.viewAllContent}>
              <Text style={styles.viewAllText}>Ver todos</Text>

              <Ionicons name="chevron-forward" size={20} color={Colors.text} />
            </View>
          </Card>
        </Pressable>

        <SummaryCards />
      </ScrollView>
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

  inboxHeader: {
    marginTop: 35,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inboxLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  inboxText: {
    color: Colors.lightGray,
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
  },
  itemsText: {
    color: Colors.gray,
    fontSize: 15,
    fontFamily: "Roboto_400Regular",
  },

  scrollContent: {
    gap: 12,
    paddingBottom: 120,
  },

  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  imageWrapper: {
    width: 140,
    height: 90,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  info: {
    flex: 1,
    marginLeft: 14,
    paddingRight: 34,
  },

  title: {
    color: Colors.text,
    fontSize: 17,
    fontFamily: "Roboto_700Bold",
    lineHeight: 23,
  },

  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 6,
  },

  sourceText: {
    color: Colors.lightGray,
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
  },

  actionIcon: {
    position: "absolute",
    right: 2,
    top: 4,
  },

  viewAllContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  viewAllText: {
    color: Colors.text,
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
});
