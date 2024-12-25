export interface ImagePickerResult {
  uri: string;
  width: number;
  height: number;
}

export interface ImagePickerOptions {
  aspect?: [number, number];
  quality?: number;
  allowsEditing?: boolean;
}
