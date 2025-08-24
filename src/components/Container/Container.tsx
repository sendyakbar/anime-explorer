import { forwardRef, useCallback } from "react";
import { ContainerProps } from "./types";
import { View } from "react-native";
import { Space, space } from "../../themes/space";
import { styles } from "./styles";
import { color } from "../../themes/color";

export const Container = forwardRef<View, ContainerProps>((props, ref) => {
  const {
    children,
    ph = 'm',
    pv = 'm',
    pt,
    pb,
    pr,
    pl,
    direction,
    alignment,
    justify,
    gap,
    background,
    noPadding,
    style,
    fill,
    wrap,
    ...rest
  } = props

  const resolvePadding = useCallback((p?: Space) => p ? space[p] : undefined, [])

  return (
    <View
      ref={ref}
      style={[
        {
          paddingHorizontal: space[ph],
          paddingVertical: space[pv],
          paddingTop: resolvePadding(pt),
          paddingRight: resolvePadding(pr),
          paddingLeft: resolvePadding(pl),
          paddingBottom: resolvePadding(pb),
          flexDirection: direction,
          alignItems: alignment,
          justifyContent: justify,
          gap: gap ? space[gap] : undefined,
          backgroundColor: background ? color[background] : undefined,
          flexWrap: wrap,
        },
        noPadding ? {
          padding: space[0],
          paddingTop: space[0],
          paddingRight: space[0],
          paddingLeft: space[0],
          paddingBottom: space[0],
          paddingHorizontal: space[0],
          paddingVertical: space[0],
        } : undefined,
        fill ? styles.flex : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  )
})