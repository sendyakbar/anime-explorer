import { StyleSheet } from "react-native";
import { color } from "../../../../themes/color";
import { space } from "../../../../themes/space";
import { shadow } from "../../../../styles/shadow";

export const styles = StyleSheet.create({
  navigationHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: space.s,
    zIndex: 10,
    ...shadow.card,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  icon: {
      height: 28,
      width: 28,
  },
  navigationTitle: {
    flex: 1,
    marginHorizontal: space.m,
  },
  navPlaceholder: {
    width: 40, // Same width as back button to center title
  },
});
