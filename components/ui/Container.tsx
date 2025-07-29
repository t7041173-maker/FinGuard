import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";

interface ContainerProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "surface";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  safe?: boolean;
  style?: ViewStyle;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = "default",
  padding = "md",
  safe = true,
  style,
}) => {
  const { theme } = useTheme();

  const getPaddingStyle = () => {
    switch (padding) {
      case "none":
        return { padding: 0 };
      case "sm":
        return { padding: 12 };
      case "md":
        return { padding: 20 };
      case "lg":
        return { padding: 24 };
      case "xl":
        return { padding: 32 };
      default:
        return { padding: 20 };
    }
  };

  const containerStyle = [
    styles.container,
    getPaddingStyle(),
    style,
  ];

  const content = <View style={containerStyle}>{children}</View>;

  if (variant === "gradient") {
    const gradientContainer = (
      <LinearGradient
        colors={theme.colors.background}
        style={styles.gradientContainer}
      >
        {content}
      </LinearGradient>
    );
    return safe ? <SafeAreaView style={styles.flex}>{gradientContainer}</SafeAreaView> : gradientContainer;
  }

  if (variant === "surface") {
    const surfaceContainer = (
      <View style={[styles.surfaceContainer, { backgroundColor: theme.colors.surface }]}>
        {content}
      </View>
    );
    return safe ? <SafeAreaView style={styles.flex}>{surfaceContainer}</SafeAreaView> : surfaceContainer;
  }

  const defaultContainer = (
    <View style={[styles.defaultContainer, { backgroundColor: theme.colors.background[0] }]}>
      {content}
    </View>
  );
  return safe ? <SafeAreaView style={styles.flex}>{defaultContainer}</SafeAreaView> : defaultContainer;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  surfaceContainer: {
    flex: 1,
  },
  defaultContainer: {
    flex: 1,
  },
});