import { StyleProp, ViewStyle } from 'react-native'
import { Space } from '../../themes/space'
import { Color } from '../../themes/color'

export interface SpacerProps {
  horizontal?: boolean | undefined
  vertical?: boolean | undefined
  space?: Space | number
  background?: Color
  style?: StyleProp<ViewStyle>
}
