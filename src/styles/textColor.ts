import { StyleSheet } from "react-native";
import { color } from "./color";

export const textColor = StyleSheet.create({
  primary: { color: color.primary },
  secondary: { color: color.secondary },
  disabled: { color: color.disabled },
  success: { color: color.success },
  warning: { color: color.warning },
  error: { color: color.error },
})

export type TextColor = keyof typeof textColor