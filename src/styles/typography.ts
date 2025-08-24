import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  'h1': {
    fontSize: 32,
    fontWeight: '600',
  },
  'h2': {
    fontSize: 24,
    fontWeight: '600',
  },
  'h3': {
    fontSize: 20,
    fontWeight: '600',
  },
  'h4': {
    fontSize: 18,
    fontWeight: '600',
  },
  'subtitle': {
    fontSize: 16,
    fontWeight: '500',
  },
  'body': {
    fontSize: 14,
    fontWeight: '400',
  },
  'caption': {
    fontSize: 12,
    fontWeight: '400',
  },
  'label': {
    fontSize: 10,
    fontWeight: '400',
  },
})

export type Typography = keyof typeof typography