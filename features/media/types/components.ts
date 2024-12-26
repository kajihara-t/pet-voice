// 画像選択に関する共通のオプション型
export interface ImagePickerOptions {
  aspect?: [number, number];
  quality?: number;
  allowsEditing?: boolean;
  maxSize?: number;
}

// 画像入力コンポーネントのProps
export interface ImageInputProps extends Partial<ImagePickerOptions> {
  onSelect: (uri: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

// 画像プレビューコンポーネントのProps
export interface PreviewScreenParams {
  uri: string;
}

export type ImagePreviewProps = {
  uri: string;
  onBack: () => void;
  onSubmit: () => void;
  disabled?: boolean;
};

// 画像選択の結果型
export interface ImagePickerResult {
  uri: string;
  width: number;
  height: number;
}
