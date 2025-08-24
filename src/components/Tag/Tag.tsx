import { forwardRef } from "react";
import { TagProps } from "./types";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";
import { View } from "react-native";

export const Tag = forwardRef<View, TagProps>((props, ref) => {
  const {title, ...rest} = props

  return (
    <Card
      ref={ref}
      background="lightBlue"
      ph="s"
      pv="xs"
      borderRadius="full"
      {...rest}
    >
      <Text variant="caption">
        {title}
      </Text>
    </Card>
  )
})