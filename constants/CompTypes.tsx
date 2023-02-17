import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import Animated, { SharedValue } from 'react-native-reanimated';

type RCompsType = {
  // methods

  // get and set primary color
  primary: () => string;
  setPrimary: (e: string | ((e: any) => string)) => void;

  // get and set secondary color
  secondary: () => string;
  setSecondary: (e: string | ((e: any) => string)) =>void;

  // get and set text color
  textColor: () => string;
  setTextColor: (e: string | ((e: any) => string)) => void;

  // get and set borderRadius for buttons and InputText
  radius: () => number;
  setRadius: (e: number | ((e: any) => number)) => void;

  // get and set additionnal style for text
  textStyle: () => TextStyle;
  setTextStyle: (e: TextStyle | ((e: any) => TextStyle)) => void;

  // get and set boolean to know if dark theme is enabled
  isDarkTheme: () => boolean;
  setIfDarkTheme: (e: boolean | ((e :any) => boolean)) => void;

  // get and set light theme background color
  backgroundColor: () => string;
  setBackgroundColor: (e: string | ((e: any) => string)) => void;

  // get and set dark theme background color
  darkBackgroundColor: () => string;
  setDarkBackgroundColor: (e: string | ((e: any) => string)) => void;

  // returns the bg color accordingly to the theme
  currentBackgroundColor: SharedValue<string>;   // No setter for this one because it is set accordingly to dark mode

  // components
  Clickable: (e: ClickableProps) => JSX.Element;
  FAB: (e: FABProps) => JSX.Element;
  InputText: (e: InputTextProps) => JSX.Element;
  SlidingPanel: (e: SlidingPanelProps) => JSX.Element;
  Title: (e: TitleProps) => JSX.Element;
  Tile: (e: TileProps) => JSX.Element;
};

interface RCompsProps {
  // primary color of your product/company
  primaryColor?: string;

  // secondary color of your product/company
  secondaryColor?: string;

  // what color you want to see on texts
  textColor?: string;

  // primary color for dark theme
  primaryDarkColor?: string;

  // secondary color for dark theme
  secondaryDarkColor?: string;

  // what color you want to see on texts for dark theme
  darkTextColor?: string;

  // background color of your app
  backgroundColor?: string;

  // background color of your app for dark theme
  darkBackgroundColor?: string;

  // borderRadius for widgets (clickable, InputText)
  radius?: number;

  // any special style for text (both light and dark theme)
  textStyle?: TextStyle;

  // is your app by default on dark theme ?
  darkTheme?: boolean;

  // animation type for changing bg color
  animationType?: 'timing' | 'spring' | 'none';

  // animation duration (if timing)
  animationDuration?: number

  // animation type for timing
  animationEase?: 'easeIn' | 'easeOut' | 'easeInOut'

  // title and text fonts
  titleFont?: string;
  font?: string;
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
  borderRadius?: number,
  styleType?: 'full' | 'lined',
  font?: string,
  disabled?: boolean,
  secondary?: boolean,
  boldText?: boolean
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
  textColor?: string | undefined,
  styleType?: 'primary' | 'secondary',
  borderRadius?: number,
  colors?: string[],          // array of colors containing [primary, secondary, thirdIfExists]
  round?: boolean,             // if you want it round or following the global borderRadius
  font?: string
}

interface InputTextProps {
  value?: string | undefined,
  children?: Array<JSX.Element> | undefined,
  backgroundColor?: string | undefined,
  style?: ViewStyle,
  placeholder?: string | undefined,
  placeholderColor?: string,
  textStyle?: TextStyle,
  type: 'full' | 'line',
  onTextChanged?: (e: string) => void,
  onFinished?: (e: string) => void,
  styleType?: 'primary' | 'secondary',
  colors?: string[],          // array of colors containing [primary, secondary, thirdIfExists]
  borderRadius?: number
}

interface SlidingPanelProps {
  children?: JSX.Element | Array<JSX.Element>,
  animatedBackgroundColor?: Animated.SharedValue<string>,
  backgroundColor?: string | undefined;
  openedSize?: number,
  closedSize: number,
  style?: StyleProp<ViewStyle>,
  borderRadius?: number,
  disableBorderRadiusWhenFullscreen?: boolean,
  slidingBar?: boolean,
  slidingBarStyle?: StyleProp<ViewStyle>
}

interface TitleProps {
  children?: string,
  style?: StyleProp<TextStyle>,
  size?: 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS',
  bold?: boolean,               // if you want to set up another value, use style
  color?: string,               // aims to be replaced by default with RComps object
  font?: string
}

interface TileProps {
  children?: JSX.Element | JSX.Element[],
  borderRadius?: number
  backgroundColor?: string,
  style?: StyleProp<ViewStyle>
}

export type {
  RCompsType,
  ClickableProps,
  RCompsProps,
  FABProps,
  InputTextProps,
  SlidingPanelProps,
  TitleProps,
  TileProps
}
