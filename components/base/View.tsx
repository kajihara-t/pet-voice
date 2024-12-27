import React from "react";
import { View as RNView, ViewProps, StyleSheet } from "react-native";
import { BaseViewProps } from "../types/base";

export const View = React.forwardRef<RNView, BaseViewProps>(
  (
    {
      children,
      row = false,
      wrap = false,
      center = false,
      gap = 0,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <RNView
        ref={ref}
        style={[
          styles.view,
          row && styles.row,
          wrap && styles.wrap,
          center && styles.centered,
          gap > 0 && { gap },
          style,
        ]}
        {...props}
      >
        {children}
      </RNView>
    );
  }
);

View.displayName = "View";

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  wrap: {
    flexWrap: "wrap",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
});
