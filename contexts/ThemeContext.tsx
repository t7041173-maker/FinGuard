import React, { createContext, useContext, useState, useEffect } from "react";
import { Appearance, ColorSchemeName } from "react-native";

export interface Theme {
  isDark: boolean;
  colors: {
    background: Array<string>; // For light and dark mode
    surface: string;
    card: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    success: string;
    successLight: string;
    warning: string;
    warningLight: string;
    error: string;
    errorLight: string;
    icon: string;
    border: string;
    borderLight: string;
    shadow: string;
    profit: string;
    loss: string;
    breakEven: string;
    gradientStart: string;
    gradientEnd: string;
    overlay: string;
    disabled: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  shadows: {
    sm: any;
    md: any;
    lg: any;
  };
}

const lightTheme: Theme = {
  isDark: false,
  colors: {
    background: ["#f8fafc", "#f1f5f9"],
    surface: "rgba(83, 74, 74, 0.05)",
    card: "#ffffff",
    text: "#1f2937",
    textSecondary: "#6b7280",
    primary: "#2563eb",
    primaryLight: "#dbeafe",
    primaryDark: "#1d4ed8",
    secondary: "#64748b",
    accent: "#8b5cf6",
    success: "#10b981",
    successLight: "#dcfce7",
    warning: "#f59e0b",
    warningLight: "#fef3c7",
    icon: "#6b7280",
    error: "#dc2626",
    errorLight: "#fee2e2",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    shadow: "#000000",
    profit: "#dcfce7",
    loss: "#fee2e2",
    breakEven: "#fef3c7",
    gradientStart: "#2563eb",
    gradientEnd: "#10b981",
    overlay: "rgba(0, 0, 0, 0.5)",
    disabled: "#9ca3af",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  shadows: {
    sm: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    background: ["#1a1a2e", "#16213e"],
    surface: "rgba(255, 255, 255, 0.05)",
    card: "rgba(255, 255, 255, 0.05)",
    text: "#f1f5f9",
    textSecondary: "#94a3b8",
    primary: "#3b82f6",
    primaryLight: "#1e3a8a",
    primaryDark: "#1d4ed8",
    secondary: "#64748b",
    accent: "#8b5cf6",
    success: "#22c55e",
    successLight: "#166534",
    warning: "#eab308",
    warningLight: "#a16207",
    icon: "#ffffff",
    error: "#ef4444",
    errorLight: "#991b1b",
    border: "#475569",
    borderLight: "#334155",
    shadow: "#000000",
    profit: "#166534",
    loss: "#991b1b",
    breakEven: "#a16207",
    gradientStart: "#1e40af",
    gradientEnd: "#059669",
    overlay: "rgba(0, 0, 0, 0.7)",
    disabled: "#6b7280",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  shadows: {
    sm: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
    },
    lg: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 12,
    },
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    setIsDark(colorScheme === "dark");

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === "dark");
    });

    return () => subscription?.remove();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
