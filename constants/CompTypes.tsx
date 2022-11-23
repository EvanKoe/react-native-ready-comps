import { TextStyle, ViewStyle } from 'react-native'

type RCompsType = {
  // methods
  setPrimary: (e: string) => void;
  getPrimary: () => string;

  setTextColor: (e: string) => void;
  getTextColor: () => string;

  setRadius: (e: number) => void;
  getRadius: () => number;

  // components
  Clickable: (e: ClickableProps) => JSX.Element;
  FAB: (e: FABProps) => JSX.Element;
};

interface RCompsProps {
  primaryColor?: string;
  textColor?: string;
  radius?: number;
}

interface ClickableProps {
  value?: string,
  onPress?: () => void,
  onPressIn?: () => void,
  onPressOut?: () => void,
  style?: ViewStyle,
  textStyle?: TextStyle,
  textColor?: string | undefined,
  backgroundColor?: string | undefined,
  borderRadius?: number
}

interface FABProps {
  text?: string | undefined,
  children?: Array<JSX.Element> | undefined,
  backgroundColor?: string | undefined,
  style?: ViewStyle,
  textStyle?: TextStyle
  onPress?: () => void,
  onPressIn?: () => void,
  onPressOut?: () => void,
  textColor: string | undefined
}

export type {
  RCompsType,
  ClickableProps,
  RCompsProps,
  FABProps
}