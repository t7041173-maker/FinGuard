import React from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "subtitle";
  color?: "primary" | "secondary" | "accent" | "muted";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  style?: any;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  color = "primary",
  weight = "normal",
  align = "left",
  style,
}) => {
  const { theme } = useTheme();

  const getVariantStyle = () => {
    switch (variant) {
      case "h1":
        return styles.h1;
      case "h2":
        return styles.h2;
      case "h3":
        return styles.h3;
      case "h4":
        return styles.h4;
      case "subtitle":
        return styles.subtitle;
      case "caption":
        return styles.caption;
      default:
        return styles.body;
    }
  };

  const getColorStyle = () => {
    switch (color) {
      case "secondary":
        return { color: theme.colors.textSecondary };
      case "accent":
        return { color: theme.colors.primary };
      case "muted":
        return { color: theme.colors.textSecondary };
      default:
        return { color: theme.colors.text };
    }
  };

  const getWeightStyle = () => {
    switch (weight) {
      case "medium":
        return { fontWeight: "500" as const };
      case "semibold":
        return { fontWeight: "600" as const };
      case "bold":
        return { fontWeight: "700" as const };
      default:
        return { fontWeight: "400" as const };
    }
  };

  const getAlignStyle = () => {
    return { textAlign: align as any };
  };

  return (
    <Text
      style={[
        getVariantStyle(),
        getColorStyle(),
        getWeightStyle(),
        getAlignStyle(),
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700",
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "600",
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "500",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
});