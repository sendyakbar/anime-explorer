import { forwardRef } from "react";
import { Text as RNText } from 'react-native';
import { TextProps } from "./types";
import { typography } from "../../styles/typography";
import { textColor } from "../../styles/textColor";

export const Text = forwardRef<RNText, TextProps>((props, ref) => {
  const {
    children,
    variant = 'body',
    ink = 'primary',
    textAlign,
    style,
    ...rest
  } = props;

  return (
    <RNText
      ref={ref}
      style={[
        typography[variant],
        textColor[ink],
        { textAlign },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
});
