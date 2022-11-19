import { TextStyle, ViewStyle } from 'react-native'

interface ClickableProps {
  value?: string,
  onPress?: () => void,
  onPressIn?: () => void,
  onPressOut?: () => void,
  style?: ViewStyle,
  textStyle?: TextStyle,
  textColor?: string | undefined
}

export type {
  ClickableProps
}