import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import { BaseViewProps } from '../types/Base';

export const View: React.FC<BaseViewProps> = ({
  children,
  row = false,
  wrap = false,
  center = false,
  gap = 0,
  style,
  ...props
}) => {
  return (
    <RNView
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
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default View;
