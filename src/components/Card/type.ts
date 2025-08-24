import { TouchableOpacityProps } from "react-native";
import { Space } from "../../themes/space";
import { Color } from "../../themes/color";
import { Radius } from "../../themes/radius";
import { Shadow } from "../../styles/shadow";

export type CardProps = Partial<{
  ph: Space
  pv: Space
  pt: Space
  pb: Space
  pl: Space
  pr: Space
  gap: Space
  background: Color
  noPadding: boolean
  borderRadius: Radius
  shadow: Shadow
}> & TouchableOpacityProps
