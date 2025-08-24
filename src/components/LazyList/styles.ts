import { StyleSheet } from "react-native";
import { color } from "../../themes/color";
import { space } from "../../themes/space";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.lightGray,
    paddingHorizontal: space.m,
    paddingVertical: space.m
  },
});