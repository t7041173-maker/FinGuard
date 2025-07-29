import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Chrome as Home, TriangleAlert as AlertTriangle } from "lucide-react-native";
import { Container } from "../components/ui/Container";
import { Typography } from "../components/ui/Typography";
import { Surface } from "../components/ui/Surface";
import { Spacing } from "../components/ui/Spacing";
import { useTheme } from "../contexts/ThemeContext";

export default function NotFoundScreen() {
  const { theme } = useTheme();

  return (
    <Container variant="gradient" padding="xl">
        <View style={styles.content}>
          <AlertTriangle size={80} color="#ff6b6b" />
          <Spacing size="lg" />
          <Typography variant="h1" weight="bold" align="center">
            404
          </Typography>
          <Typography variant="h3" weight="semibold" color="accent" align="center">
            Page Not Found
          </Typography>
          <Spacing size="md" />
          <Typography variant="body" color="secondary" align="center">
            Oops! The page you're looking for doesn't exist.
          </Typography>

          <Spacing size="xl" />

          <TouchableOpacity
            style={[styles.homeButton, theme.shadows.md]}
            onPress={() => router.push("/(tabs)")}
            activeOpacity={0.8}
          >
            <Surface variant="elevated" padding="md" radius="lg" style={styles.buttonSurface}>
              <Home size={20} color="white" />
              <Spacing horizontal size="sm" />
              <Typography variant="body" weight="semibold" style={{ color: "white" }}>
                Go Home
              </Typography>
            </Surface>
          </TouchableOpacity>
        </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeButton: {
    overflow: "hidden",
  },
  buttonSurface: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4ecdc4",
  },
});
