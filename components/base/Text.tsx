import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { TextPreset, FontFamily } from "../types/Base";

export interface TextProps extends RNTextProps {
  preset?: TextPreset;
  bold?: boolean;
  centered?: boolean;
  color?: string;
  fontFamily?: FontFamily;
}

const presetStyles = StyleSheet.create({
  title1: {
    fontSize: 28,
    lineHeight: 34,
  },
  title2: {
    fontSize: 22,
    lineHeight: 28,
  },
  title3: {
    fontSize: 18,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
  },
});

/**
 * A customizable Text component that wraps RNText with additional styling options.
 *
 * @prop {TextPreset} preset - Preset style (title1, title2, title3, body, caption, label)
 * @prop {boolean} bold - Whether text should be bold
 * @prop {boolean} centered - Whether text should be centered
 * @prop {string} color - Text color
 * @prop {FontFamily} fontFamily - Font family
 * @prop {TextStyle} style - Additional styles
 *
 * @example
 * <Text preset="title1" bold centered>
 *   Header Text
 * </Text>
 *
 * @example
 * <Text preset="body" color="gray">
 *   Body text with custom color
 * </Text>
 */
export const Text = ({
  preset = "body",
  bold,
  centered,
  color,
  fontFamily = "NotoSansJP",
  style,
  ...rest
}: TextProps) => {
  return (
    <RNText
      style={[
        presetStyles[preset],
        {
          fontFamily,
          fontWeight: bold ? "bold" : "normal",
          textAlign: centered ? "center" : undefined,
          color: color,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default Text;
