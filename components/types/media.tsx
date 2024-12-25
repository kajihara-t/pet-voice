import { ImagePickerOptions } from "expo-image-picker";
export type CameraButtonProps = {
  onCapture: (uri: string) => void;
  style?: any;
};

export type ImagePickerButtonProps = {
  onSelect: (uri: string) => void;
  options?: ImagePickerOptions;
  style?: any; // TODO: ちゃんと型定義を直して
};
