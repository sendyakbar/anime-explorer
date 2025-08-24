import { StyleSheet } from "react-native";
import { color } from "../../../../themes/color";
import { radius } from "../../../../themes/radius";
import { shadow } from "../../../../styles/shadow";
import { space } from "../../../../themes/space";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: color.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    ...shadow.card,
  },
  icon: {
     height: 28,
     width: 28,
  },
  floatingBackButton: {
    position: 'absolute',
    left: space.m,
    zIndex: 10,
  },
});
