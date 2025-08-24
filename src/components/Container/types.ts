import { ViewProps, ViewStyle } from "react-native";
import { Space } from "../../styles/space";
import { Color } from "../../styles/color";

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
} & ViewProps