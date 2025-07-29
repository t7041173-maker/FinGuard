import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { AlertTriangle, ArrowRight } from "lucide-react-native";
import { checkBackendConnection } from "../components/config";
import { Container } from "../components/ui/Container";
import { Typography } from "../components/ui/Typography";
import { Surface } from "../components/ui/Surface";
import { Spacing } from "../components/ui/Spacing";
import { useTheme } from "../contexts/ThemeContext";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const { theme } = useTheme();
  const pulseAnimation = useSharedValue(0);
  const fadeAnimation = useSharedValue(0);

  useEffect(() => {
    pulseAnimation.value = withRepeat(
      withTiming(1, { duration: 2000 }),
      -1,
      true
    );

    fadeAnimation.value = withTiming(1, { duration: 1500 });
  }, []);

  useEffect(() => {
    checkBackendConnection();
  }, []);

  const pulseStyle = useAnimatedStyle(() => {
    const scale = interpolate(pulseAnimation.value, [0, 1], [1, 1.1]);
    return {
      transform: [{ scale }],
    };
  });

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnimation.value,
    };
  });

  return (
    <Container variant="gradient" padding="xl">
      <Animated.View style={[styles.content, fadeStyle]}>
        <Animated.View style={[styles.logoContainer, pulseStyle]}>
          <Surface variant="elevated" padding="xl" radius="xl" style={styles.logoSurface}>
            <AlertTriangle size={80} color="#ff6b6b" />
          </Surface>
          <Spacing size="lg" />
          <Typography variant="h1" weight="bold" align="center">
            PonziXposed
          </Typography>
          <Typography variant="subtitle" color="secondary" align="center">
            The Fraud Unfolded
          </Typography>
        </Animated.View>

        <View style={styles.centerContent}>
          <Typography variant="h3" weight="semibold" color="accent" align="center">
            "Play the scam to spot the scam"
          </Typography>
          <Spacing size="md" />
          <Typography variant="body" color="secondary" align="center">
            Learn fraud. Stop fraud. Be financially fearless.
          </Typography>
        </View>

        <Surface variant="elevated" padding="lg" radius="lg">
          <View style={styles.feature}>
            <Typography variant="h3">🧠</Typography>
            <Spacing horizontal size="md" />
            <Typography variant="body" weight="medium">
              Interactive Simulation
            </Typography>
          </View>
          <Spacing size="md" />
          <View style={styles.feature}>
            <Typography variant="h3">👁️</Typography>
            <Spacing horizontal size="md" />
            <Typography variant="body" weight="medium">
              Visual Learning
            </Typography>
          </View>
          <Spacing size="md" />
          <View style={styles.feature}>
            <Typography variant="h3">🛡️</Typography>
            <Spacing horizontal size="md" />
            <Typography variant="body" weight="medium">
              Fraud Protection
            </Typography>
          </View>
        </Surface>

        <TouchableOpacity
          style={[styles.startButton, theme.shadows.lg]}
          onPress={() => router.push("/(tabs)")}
          activeOpacity={0.8}
        >
          <Surface variant="elevated" padding="lg" radius="xl" style={styles.buttonSurface}>
            <Typography variant="subtitle" weight="bold" style={{ color: "white" }}>
              Start Learning
            </Typography>
            <Spacing horizontal size="sm" />
            <ArrowRight size={24} color="white" />
          </Surface>
        </TouchableOpacity>
      </Animated.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoSurface: {
    backgroundColor: "rgba(255, 107, 107, 0.1)",
    borderColor: "#ff6b6b",
    borderWidth: 2,
  },
  centerContent: {
    alignItems: "center",
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
  },
  startButton: {
    width: width * 0.8,
    overflow: "hidden",
  },
  buttonSurface: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6b6b",
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
});
