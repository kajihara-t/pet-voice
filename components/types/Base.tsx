import { ViewProps, ScrollViewProps, TextProps, ViewStyle } from "react-native";

export interface BaseContainerProps extends ViewProps {
  children: React.ReactNode;
  fluid?: boolean;
  center?: boolean;
}

export interface BaseViewProps extends ViewProps {
  children: React.ReactNode;
  row?: boolean;
  wrap?: boolean;
  center?: boolean;
  gap?: number;
}

export interface BaseSafeAreaViewProps extends ViewProps {
  children: React.ReactNode;
  edges?: ("top" | "right" | "bottom" | "left")[];
}

export interface BaseScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
}

export type TextPreset =
  | "title1"
  | "title2"
  | "title3"
  | "body"
  | "caption"
  | "label";
export type FontFamily = "NotoSansJP" | "Roboto";

export interface BaseTextProps extends TextProps {
  preset?: TextPreset;
  bold?: boolean;
  centered?: boolean;
  color?: string;
  fontFamily?: FontFamily;
}

export type BaseShadowBoxProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};
