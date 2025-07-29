import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface IconButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onPress,
  variant = "default",
  size = "md",
  disabled = false,
  style,
}) => {
  const { theme } = useTheme();

  const getVariantStyle = () => {
    switch (variant) {
      case "ghost":
        return {
          backgroundColor: "transparent",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      default:
        return {
          backgroundColor: theme.colors.surface,
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case "sm":
        return {
          width: 32,
          height: 32,
          borderRadius: 8,
        };
      case "lg":
        return {
          width: 56,
          height: 56,
          borderRadius: 16,
        };
      default:
        return {
          width: 44,
          height: 44,
          borderRadius: 12,
        };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.disabled,
        style,
      ]}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    opacity: 0.5,
  },
});