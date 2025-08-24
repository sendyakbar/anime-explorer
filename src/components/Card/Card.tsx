import { forwardRef, useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { CardProps } from "./type";
import { space, Space } from "../../themes/space";
import { radius } from "../../themes/radius";
import { shadow as shadows } from "../../styles/shadow";

export const Card = forwardRef<View, CardProps>((props, ref) => {
  const {
    children,
    ph = 'm',
    pv = 'm',
    pt,
    pb,
    pr,
    pl,
    gap,
    background = 'white',
    borderRadius = 'm',
    shadow = 'card',
    ...rest
  } = props;

  const resolvePadding = useCallback((p?: Space) => p ? space[p] : undefined, [])

  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.8}
      style={[
        {
          paddingHorizontal: space[ph],
          paddingVertical: space[pv],
          paddingTop: resolvePadding(pt),
          paddingRight: resolvePadding(pr),
          paddingLeft: resolvePadding(pl),
          paddingBottom: resolvePadding(pb),
          gap: gap ? space[gap] : undefined,
          backgroundColor: background,
          borderRadius: radius[borderRadius]
        },
        shadow ? shadows[shadow] : undefined
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
})