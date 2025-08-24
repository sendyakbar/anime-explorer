import { StyleSheet } from "react-native";
import { color } from "../../../../themes/color";

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: color.lightGray,
    resizeMode: 'cover',
  },
  headerImageContainer: {
    height: 300,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: color.black,
    zIndex: 2,
  },
});
