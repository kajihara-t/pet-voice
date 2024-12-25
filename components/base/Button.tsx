import React from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { View } from "./View";
import { Text } from "./Text";
import { ButtonProps } from "../types/base";

/**
 * A basic button component that wraps a child in a TouchableOpacity.
 *
 * @prop {React.ReactNode} children - The content of the button.
 * @prop {"primary" | "secondary" | "outline" | "ghost"} variant - The variant of the button.
 * @prop {"sm" | "md" | "lg"} size - The size of the button.
 * @prop {React.ReactNode} leftIcon - The icon to be rendered on the left side of the button.
 * @prop {React.ReactNode} rightIcon - The icon to be rendered on the right side of the button.
 * @prop {boolean} isLoading - Whether the button is in a loading state.
 * @prop {boolean} disabled - Whether the button is disabled.
 * @prop {ViewStyle} style - Additional styles for the button.
 * @prop {TextStyle} textStyle - Additional styles for the button's text.
 * @prop {string} loadingText - The text to be rendered when `isLoading` is true.
 *
 * @example
 * <Button variant="primary">Click me</Button>
 *
 * @example
 * <Button variant="secondary" size="lg" leftIcon={<Icon name="chevron-left" />}>
 *   Go back
 * </Button>
 *
 * @example
 * <Button variant="outline" isLoading loadingText="Loading...">
 *   Submit
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  style,
  textStyle,
  loadingText,
  ...props
}) => {
  // スタイルの組み立て
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[`${size}Padding`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${size}Text`],
    styles[`${variant}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  const content = isLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={variant === "primary" ? "white" : "#3b82f6"} />
      {loadingText && (
        <Text style={[textStyles, styles.loadingText]}>{loadingText}</Text>
      )}
    </View>
  ) : (
    <View style={styles.contentContainer}>
      {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
      {typeof children === "string" ? (
        <Text style={textStyles}>{children}</Text>
      ) : (
        children
      )}
      {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
    </View>
  );

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled || isLoading}
      style={buttonStyles}
      accessibilityRole="button"
      accessibilityState={{
        disabled: disabled || isLoading,
        busy: isLoading,
      }}
    >
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  // バリアント
  primary: {
    backgroundColor: "#3b82f6",
  },
  secondary: {
    backgroundColor: "#e5e7eb",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#3b82f6",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  // サイズ別パディング
  smPadding: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: 40,
  },
  mdPadding: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    minHeight: 48,
  },
  lgPadding: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    minHeight: 56,
  },

  // サイズ別テキスト
  smText: {
    fontSize: 14,
  },
  mdText: {
    fontSize: 16,
  },
  lgText: {
    fontSize: 18,
  },
  // テキストカラー
  text: {
    fontWeight: "600",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "#1f2937",
  },
  outlineText: {
    color: "#3b82f6",
  },
  ghostText: {
    color: "#3b82f6",
  },
  // 無効状態
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: "#9ca3af",
  },
  // アイコン
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  // ローディング
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginLeft: 8,
  },
});
