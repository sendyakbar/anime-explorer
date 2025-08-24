import { StyleSheet } from "react-native";
import { shadow } from "../../styles/shadow";
import { radius } from "../../themes/radius";

export const styles = StyleSheet.create({
  content: {
    zIndex: 5,
  },
  contentSection: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    paddingTop: 20,
    zIndex: 3,
    height: '100%',
    ...shadow.card,
  },
});
