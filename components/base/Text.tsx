import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

// プリセット型の定義
export type TextPreset = 'title1' | 'title2' | 'title3' | 'body' | 'caption' | 'label';

// フォントファミリーの定義を追加
export type FontFamily = 'NotoSansJP' | 'Roboto';

// コンポーネントのProps型を明示的にexport
export interface TextProps extends RNTextProps {
  /** テキストのプリセットスタイル */
  preset?: TextPreset;
  /** 太字にするかどうか */
  bold?: boolean;
  /** テキストを中央揃えにするかどうか */
  centered?: boolean;
  /** テキストの色 */
  color?: string;
  /** フォントファミリー */
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
 * カスタマイズ可能なテキストコンポーネント
 * @param props テキストのプロパティ
 * @param props.preset - プリセットスタイル（title1, title2, title3, body, caption, label）
 * @param props.bold - 太字にするかどうか
 * @param props.centered - テキストを中央揃えにするかどうか
 * @param props.color - テキストの色
 * @param props.fontFamily - フォントファミリー
 * @param props.style - 追加のスタイル
 */
export const Text = ({
  preset = 'body',
  bold,
  centered,
  color,
  fontFamily = 'NotoSansJP',
  style,
  ...rest
}: TextProps) => {
  return (
    <RNText
      style={[
        presetStyles[preset],
        {
          fontFamily,
          fontWeight: bold ? 'bold' : 'normal',
          textAlign: centered ? 'center' : undefined,
          color: color,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default Text;