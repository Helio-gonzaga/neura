import { AppSafeAreaView } from "@/components/ui/app-safe-area-view";
import { Text } from "@/components/ui/global-text";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Post } from "../models/post.model";

const posts: Post[] = [
  {
    id: "1",
    title: "MCP no VSCode: como integrar e automatizar tarefas com IA",
    source: "LinkedIn",
    time: "Salvo em 23 de setembro",
    image: require("@/assets/mocks/images/mock-3.png"),
    icon: "logo-linkedin",
    iconColor: "#0A66C2",
    type: "bookmark",
    link: "https://www.linkedin.com/posts/openai_mcp-vscode-ai-activity",
    notes:
      "Testar integração do MCP no projeto NEURA para permitir que a IA entenda contexto do código automaticamente.",
  },
  {
    id: "2",
    title: "Kubernetes explicado de forma simples",
    source: "YouTube",
    time: "Salvo em 23 de setembro",
    image: require("@/assets/mocks/images/mock-1.png"),
    icon: "logo-youtube",
    iconColor: "#FF0000",
    type: "more",
    link: "https://www.youtube.com/watch?v=X48VuDVv0do",
    notes:
      "Revisar conceitos de pods, deployments e services para melhorar conhecimento de arquitetura cloud.",
  },
  {
    id: "3",
    title: "Guia completo de RAG: conceitos, arquitetura e exemplos",
    source: "dev.to",
    time: "Salvo em 23 de setembro",
    image: require("@/assets/mocks/images/mock-4.png"),
    icon: "dev-to",
    iconColor: "#A1A1AA",
    type: "more",
    link: "https://dev.to/jamesli/a-complete-guide-to-rag-applications",
    notes:
      "Usar como base para implementar RAG no NEURA usando embeddings e busca vetorial.",
  },
  {
    id: "4",
    title: "Arquitetura Frontend Moderna em 2024",
    source: "Instagram",
    time: "Salvo em 23 de setembro",
    image: require("@/assets/mocks/images/mock-2.png"),
    icon: "logo-instagram",
    iconColor: "#E1306C",
    type: "more",
    link: "https://www.instagram.com/p/C-modern-frontend-architecture",
    notes:
      "Aplicar separação por features e componentes reutilizáveis no app React Native.",
  },
];

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const post = posts.find((item) => item.id === id) ?? posts[0];

  const [isFavorite, setIsFavorite] = useState(post.type === "bookmark");
  const [isRead, setIsRead] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notes, setNotes] = useState(post.notes);

  const handleOpenLink = async () => {
    if (!post.link) return;

    const canOpen = await Linking.canOpenURL(post.link);

    if (canOpen) {
      await Linking.openURL(post.link);
    }
  };

  return (
    <AppSafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.topActions}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.iconButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Ionicons name="chevron-back" size={24} color={Colors.text} />
          </Pressable>

          <View style={styles.rightActions}>
            <Pressable
              onPress={() => setIsFavorite((prev) => !prev)}
              style={({ pressed }) => [
                styles.iconButton,
                isFavorite && styles.iconButtonActive,
                pressed && styles.buttonPressed,
              ]}
            >
              <Ionicons
                name={isFavorite ? "bookmark" : "bookmark-outline"}
                size={22}
                color={isFavorite ? "#FACC15" : Colors.text}
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.iconButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Ionicons name="trash-outline" size={24} color={Colors.text} />
            </Pressable>
          </View>
        </View>

        <Image
          source={post.image}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.metaRow}>
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

            <Text style={styles.sourceText}>{post.source}</Text>
          </View>

          <Text style={styles.dateText}>{post.time}</Text>
        </View>

        <View style={styles.statusRow}>
          {isRead && (
            <View style={styles.statusBadge}>
              <Ionicons name="checkmark-circle" size={14} color="#22C55E" />
              <Text style={styles.statusText}>Lido</Text>
            </View>
          )}

          {isFavorite && (
            <View style={styles.statusBadge}>
              <Ionicons name="star" size={14} color="#FACC15" />
              <Text style={styles.statusText}>Favorito</Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>{post.title}</Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <MaterialCommunityIcons
              name="brain"
              size={18}
              color={Colors.primary}
            />

            <Text style={styles.summaryTitle}>Resumo com IA</Text>
          </View>

          <Text style={styles.summaryText}>
            O conteúdo explica como o MCP pode ser integrado ao VSCode para
            permitir que agentes de IA entendam o contexto do seu projeto e
            executem ações automaticamente.
          </Text>

          {[
            "MCP padroniza a comunicação entre ferramentas e modelos de IA.",
            "Permite que o VSCode forneça contexto real do projeto para a IA.",
            "Facilita automações como geração de código e refatorações.",
            "Melhora produtividade e reduz tarefas repetitivas.",
          ].map((item) => (
            <View key={item} style={styles.bulletRow}>
              <Ionicons
                name="checkmark-circle"
                size={17}
                color={Colors.primary}
              />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="note-edit-outline"
              size={17}
              color={Colors.primary}
            />

            <Text style={styles.sectionTitle}>Minhas notas</Text>

            <Pressable
              onPress={() => setIsEditingNotes((prev) => !prev)}
              hitSlop={10}
              style={({ pressed }) => ({
                marginLeft: "auto",
                opacity: pressed ? 0.6 : 1,
                transform: [{ scale: pressed ? 0.92 : 1 }],
              })}
            >
              <Ionicons
                name={isEditingNotes ? "checkmark" : "pencil"}
                size={17}
                color={isEditingNotes ? Colors.primary : Colors.gray}
              />
            </Pressable>
          </View>

          <View
            style={[styles.notesBox, isEditingNotes && styles.notesBoxEditing]}
          >
            {isEditingNotes ? (
              <TextInput
                value={notes}
                onChangeText={setNotes}
                multiline
                autoFocus
                placeholder="Adicione suas notas..."
                placeholderTextColor={Colors.gray}
                style={styles.notesInput}
                textAlignVertical="top"
              />
            ) : (
              <Text style={styles.notesText}>{notes}</Text>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Pressable
          onPress={handleOpenLink}
          style={({ pressed }) => [
            styles.bottomButton,
            styles.primaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Ionicons name="open-outline" size={18} color={Colors.dark} />
          <Text style={styles.primaryButtonText}>Abrir</Text>
        </Pressable>

        <Pressable
          onPress={() => setIsRead((prev) => !prev)}
          style={({ pressed }) => [
            styles.bottomButton,
            isRead && styles.bottomButtonActive,
            pressed && styles.buttonPressed,
          ]}
        >
          <Ionicons
            name={isRead ? "checkmark-circle" : "checkmark"}
            size={18}
            color={isRead ? "#22C55E" : Colors.text}
          />
          <Text style={[styles.bottomButtonText, isRead && styles.readText]}>
            {isRead ? "Lido" : "Marcar como lido"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setIsFavorite((prev) => !prev)}
          style={({ pressed }) => [
            styles.bottomButton,
            isFavorite && styles.bottomButtonActive,
            pressed && styles.buttonPressed,
          ]}
        >
          <Ionicons
            name={isFavorite ? "star" : "star-outline"}
            size={18}
            color={isFavorite ? "#FACC15" : Colors.text}
          />
          <Text
            style={[styles.bottomButtonText, isFavorite && styles.favoriteText]}
          >
            {isFavorite ? "Favorito" : "Favoritar"}
          </Text>
        </Pressable>
      </View>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 110,
  },

  topActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  rightActions: {
    flexDirection: "row",
    gap: 10,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.06)",
    alignItems: "center",
    justifyContent: "center",
  },

  iconButtonActive: {
    backgroundColor: "rgba(250, 204, 21, 0.12)",
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.94 }],
  },

  heroImage: {
    width: "100%",
    height: 190,
    borderRadius: 14,
    backgroundColor: "#111827",
  },

  metaRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  sourceText: {
    color: Colors.text,
    fontSize: 14,
    fontFamily: "Roboto_700Bold",
  },

  dateText: {
    color: Colors.gray,
    fontSize: 13,
    fontFamily: "Roboto_400Regular",
  },

  statusRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.055)",
  },

  statusText: {
    color: Colors.lightGray,
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
  },

  title: {
    color: Colors.text,
    fontSize: 24,
    lineHeight: 32,
    marginTop: 18,
    fontFamily: "Roboto_700Bold",
    letterSpacing: -0.4,
  },

  summaryCard: {
    marginTop: 22,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.045)",
  },

  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },

  summaryTitle: {
    color: Colors.text,
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },

  summaryText: {
    color: Colors.gray,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "Roboto_400Regular",
    marginBottom: 14,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    marginTop: 10,
  },

  bulletText: {
    flex: 1,
    color: Colors.lightGray,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto_400Regular",
  },

  section: {
    marginTop: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },

  sectionTitle: {
    color: Colors.text,
    fontSize: 15,
    fontFamily: "Roboto_700Bold",
  },

  notesBox: {
    minHeight: 76,
    borderRadius: 12,
    padding: 14,
    backgroundColor: "rgba(255,255,255,0.045)",
  },

  notesBoxEditing: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: "rgba(255,255,255,0.065)",
  },

  notesText: {
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "Roboto_400Regular",
  },

  notesInput: {
    minHeight: 90,
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "Roboto_400Regular",
    padding: 0,
  },

  bottomBar: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 18,
    height: 70,
    borderRadius: 16,
    backgroundColor: "rgba(15, 18, 27, 0.96)",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
  },

  bottomButton: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    backgroundColor: "rgba(255,255,255,0.035)",
  },

  bottomButtonActive: {
    backgroundColor: "rgba(255,255,255,0.075)",
  },

  primaryButton: {
    backgroundColor: Colors.primary,
  },

  primaryButtonText: {
    color: Colors.dark,
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
  },

  bottomButtonText: {
    color: Colors.text,
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },

  readText: {
    color: "#22C55E",
  },

  favoriteText: {
    color: "#FACC15",
  },
});
