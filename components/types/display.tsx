import { ViewStyle } from "react-native";
export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export type ShadowBoxProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

export type MenuItem = {
  label: string;
  value?: string;
  onPress?: () => void;
  showArrow?: boolean;
};

export type ListItemData = {
  id: string;
  imageUrl?: string;
  title: string;
  subtitle?: string;
  timestamp?: string;
  onPress?: () => void;
};

export type ListSectionProps = {
  title?: string;
  items: ListItemData[];
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement;
};
