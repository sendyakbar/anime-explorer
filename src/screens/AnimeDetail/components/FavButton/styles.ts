import { StyleSheet } from "react-native";
import { color } from "../../../../themes/color";
import { space } from "../../../../themes/space";
import { radius } from "../../../../themes/radius";

export const styles = StyleSheet.create({
  favoriteButton: {
    backgroundColor: color.lightGray,
    padding: space.m,
    borderRadius: radius.m,
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: color.lightPink,
  },
});
