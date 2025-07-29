import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react-native";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.toggleButton,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          ...theme.shadows.sm,
        },
      ]}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      {theme.isDark ? (
        <Moon size={24} color={theme.colors.icon} />
      ) : (
        <Sun size={24} color={theme.colors.warning} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default ThemeToggle;
