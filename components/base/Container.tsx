import React from "react";
import { View, StyleSheet } from "react-native";
import { BaseContainerProps } from "../types/Base";

/**
 * A basic container component that wraps its children in a `View` component.
 *
 * Can be used to create a basic full-width container with some basic styling.
 *
 * @prop {boolean} [fluid=false] - If true, the container will take up the full width of its parent.
 * @prop {boolean} [center=false] - If true, the container will be centered horizontally.
 * @prop {React.CSSProperties | number} style - Additional styles for the container.
 *
 * @example
 * <Container fluid>Full-width content</Container>
 *
 * @example
 * <Container center>Centered content</Container>
 */
export const Container: React.FC<BaseContainerProps> = ({
  children,
  fluid = false,
  center = false,
  style,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        !fluid && styles.contained,
        center && styles.centered,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginHorizontal: "auto",
    width: "100%",
  },
  contained: {
    maxWidth: 1200,
    alignSelf: "center",
  },
  centered: {
    alignItems: "center",
  },
});

export default Container;
