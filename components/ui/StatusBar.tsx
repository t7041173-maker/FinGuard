import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useTheme } from "../../contexts/ThemeContext";

export const StatusBar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ExpoStatusBar
      style={theme.isDark ? "light" : "dark"}
      backgroundColor={theme.colors.background[0]}
    />
  );
};