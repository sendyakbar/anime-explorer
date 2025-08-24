import { FC } from 'react'
import { View, ViewStyle } from 'react-native'
import { SpacerProps } from './types'
import { color } from '../../themes/color'
import { space as spaces } from '../../themes/space'

const getStyleByType = (
  horizontal: SpacerProps['horizontal'],
  vertical: SpacerProps['vertical'],
  space: number,
): ViewStyle => {
  if (horizontal) {
    return { width: space }
  }
  if (vertical) {
    return { height: space }
  }
  return { height: space }
}

export const Spacer: FC<SpacerProps> = (props) => {
  const {
    horizontal,
    vertical,
    space = 'm',
    style,
    background,
  } = props

  return (
    <View
      style={[
        getStyleByType(
          horizontal,
          vertical,
          typeof space === 'number' ? space : spaces[space]
        ),
        background ? { backgroundColor: color[background] } : undefined,
        style,
      ]}
    />
  )
}
