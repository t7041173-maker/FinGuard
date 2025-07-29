import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface SurfaceProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  style?: ViewStyle;
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  style,
}) => {
  const { theme } = useTheme();

  const getVariantStyle = () => {
    switch (variant) {
      case "elevated":
        return {
          backgroundColor: theme.colors.card,
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        };
      case "outlined":
        return {
          backgroundColor: theme.colors.card,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      default:
        return {
          backgroundColor: theme.colors.card,
        };
    }
  };

  const getPaddingStyle = () => {
    switch (padding) {
      case "none":
        return { padding: 0 };
      case "sm":
        return { padding: 12 };
      case "md":
        return { padding: 16 };
      case "lg":
        return { padding: 24 };
      default:
        return { padding: 16 };
    }
  };

  const getRadiusStyle = () => {
    switch (radius) {
      case "none":
        return { borderRadius: 0 };
      case "sm":
        return { borderRadius: 8 };
      case "md":
        return { borderRadius: 12 };
      case "lg":
        return { borderRadius: 16 };
      case "xl":
        return { borderRadius: 24 };
      default:
        return { borderRadius: 12 };
    }
  };

  return (
    <View
      style={[
        getVariantStyle(),
        getPaddingStyle(),
        getRadiusStyle(),
        style,
      ]}
    >
      {children}
    </View>
  );
};