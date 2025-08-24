import { StyleSheet } from "react-native"
import { color } from "../themes/color"

export const shadow = StyleSheet.create({
  card: {
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  modal: {
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
})

export type Shadow = keyof typeof shadow
