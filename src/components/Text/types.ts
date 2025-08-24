import { ReactNode } from "react"
import { TextStyle, TextProps as RNTextProps } from "react-native"
import { Typography } from "../../styles/typography"
import { TextColor } from "../../styles/textColor"

export type TextProps = {
  children: ReactNode
  variant?: Typography
  ink?: TextColor
  textAlign?: TextStyle['textAlign']
} & RNTextProps