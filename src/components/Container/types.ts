import { ViewProps, ViewStyle } from "react-native";
import { Space } from "../../themes/space";
import { Color } from "../../themes/color";

export type ContainerProps = {
  ph?: Space
  pv?: Space
  pt?: Space
  pb?: Space
  pl?: Space
  pr?: Space
  direction?: ViewStyle['flexDirection']
  alignment?: ViewStyle['alignItems']
  justify?: ViewStyle['justifyContent']
  gap?: Space
  background?: Color
  noPadding?: boolean
  fill?: boolean
  wrap?: ViewStyle['flexWrap']
} & ViewProps