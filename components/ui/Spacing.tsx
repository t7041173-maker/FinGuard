import React from "react";
import { View } from "react-native";

interface SpacingProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  horizontal?: boolean;
}

export const Spacing: React.FC<SpacingProps> = ({ 
  size = "md", 
  horizontal = false 
}) => {
  const getSpacing = () => {
    switch (size) {
      case "xs":
        return 4;
      case "sm":
        return 8;
      case "md":
        return 16;
      case "lg":
        return 24;
      case "xl":
        return 32;
      case "2xl":
        return 48;
      default:
        return 16;
    }
  };

  const spacing = getSpacing();

  return (
    <View
      style={{
        width: horizontal ? spacing : undefined,
        height: horizontal ? undefined : spacing,
      }}
    />
  );
};