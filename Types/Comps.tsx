import { TextStyle, ViewStyle } from 'react-native'

interface ClickableComps {
  value?: string,
  onPress?: () => void,
  onPressIn?: () => void,
  onPressOut?: () => void,
  style?: ViewStyle,
  textStyle?: TextStyle,
  textColor?: string | undefined
}

export type {
  ClickableComps
};