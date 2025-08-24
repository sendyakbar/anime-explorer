import { StyleSheet } from "react-native";
import { color } from "../../themes/color";

export const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
    backgroundColor: color.lightGray,
  },
  favoriteButton: {
    backgroundColor: color.lightGray,
    padding: 8,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  favoriteButtonActive: {
    backgroundColor: color.lightPink,
  },
})