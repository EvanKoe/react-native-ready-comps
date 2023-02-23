/**
 * In this file you will find the main RNComps object
 */

import React, { useEffect, useState } from 'react';
import { TextStyle } from 'react-native';
import {
  ClickableProps,
  FABProps,
  InputTextProps,
  RCompsProps,
  RCompsType,
  SlidingPanelProps,
  TileProps,
  TitleProps,
  ModalProps
} from './constants/CompTypes';
import createClickable from './components/Clickable'
import createFAB from './components/FAB';
import createInputText from './components/InputText';
import { Easing, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import createSlidingPanel from './components/SlidingPanel';
import createTitle from './components/Title';
import createTile from './components/Tile';
import createModal from './components/Modal';

const createRComps = ({
  primaryColor = '#545df9',
  secondaryColor = '#342d2d',
  textColor = '#000',
  primaryDarkColor = '#7f7fff',
  secondaryDarkColor = '#f5bfc5',
  darkTextColor = '#eee',
  backgroundColor = '#ddd',
  darkBackgroundColor = '#212121',
  radius = 8,
  textStyle = {},
  darkTheme = false,
  animationType = 'timing',
  animationDuration = 100,
  animationEase = 'easeInOut',
  titleFont = 'Roboto',
  font = 'Roboto'
}: RCompsProps): RCompsType => {
  const [_isDarkTheme, _setIfDarkTheme] = useState<boolean>(darkTheme);
  const [_primary, _setPrimary] = useState<string>(primaryColor);
  const [_secondary, _setSecondary] = useState<string>(secondaryColor);
  const [_textColor, _setTextColor] = useState<string>(textColor);
  const [_radius, _setRadius] = useState<number>(radius);
  const [_textStyle, _setTextStyle] = useState<TextStyle>(textStyle);
  const [_lightBgColor, _setLightBgColor] = useState<string>(backgroundColor);
  const [_darkBgColor, _setDarkBgColor] = useState<string>(darkBackgroundColor);
  const _bgColor = useSharedValue(_lightBgColor);
  const [_font, _setFont] = useState<string>(font);
  const [_titleFont, _setTitleFont] = useState<string>(titleFont);

  // Updates the theme according to _isDarkTheme
  const refreshTheme: (() => void) = () => {
    _setPrimary(_isDarkTheme ? primaryDarkColor : primaryColor);
    _setSecondary(_isDarkTheme ? secondaryDarkColor : secondaryColor);
    _setTextColor(_isDarkTheme ? darkTextColor : textColor);

    if (animationType === 'timing') {
      _bgColor.value = withTiming(
        _isDarkTheme ? _darkBgColor : _lightBgColor,
        {
          duration: animationDuration,
          easing: animationEase === 'easeIn' ? Easing.in(Easing.quad) :
            animationEase === 'easeOut' ? Easing.out(Easing.quad) :
              Easing.inOut(Easing.quad)
        }
      );
    } else if (animationType === 'spring') {
      _bgColor.value = withSpring(
        _isDarkTheme ? _darkBgColor : _lightBgColor
      );
    }
  };

  // Listeners
  useEffect(() => refreshTheme(), []);
  useEffect(() => refreshTheme(), [_isDarkTheme]);

  // creates the main object
  const RComp: RCompsType = {
    // methods
    primary: () => _primary,
    setPrimary: (e: string) => _setPrimary(e),

    secondary: () => _secondary,
    setSecondary: (e: string) => _setSecondary(e),

    textColor: () => _textColor,
    setTextColor: (e: string) => _setTextColor(e),

    radius: () => _radius,
    setRadius: (e: number) => _setRadius(e),

    textStyle: () => _textStyle,
    setTextStyle: (e: TextStyle) => _setTextStyle(e),

    isDarkTheme: () => _isDarkTheme,
    setIfDarkTheme: (e: boolean) => _setIfDarkTheme(e),
    currentBackgroundColor: _bgColor,

    backgroundColor: () => _lightBgColor,
    setBackgroundColor: (e: string) => _setLightBgColor(e),

    darkBackgroundColor: () => _darkBgColor,
    setDarkBackgroundColor: (e: string) => _setDarkBgColor(e),

    // Clickable Component
    Clickable: ({
      styleType = 'full',
      onPress = () => {},
      onPressIn = () => {},
      onPressOut = () => {},
      textColor = undefined,
      textStyle = {},
      value = 'Click here',
      style = {},
      secondary = false,
      backgroundColor = secondary ? _secondary : _primary,
      borderRadius = _radius,
      font = _font,
      disabled = false,
      boldText = false
    }: ClickableProps) => createClickable({
      onPress,
      onPressIn,
      onPressOut,
      textColor,
      textStyle,
      value,
      style,
      styleType,
      backgroundColor,
      borderRadius,
      font,
      disabled,
      secondary,
      boldText
    }),

    // Fast Action Button Component
    FAB: ({
      styleType = 'primary',
      backgroundColor = styleType === 'primary' ? _primary : _secondary,
      textColor = _textColor,
      children = undefined,
      onPress = () => {},
      onPressIn = () => {},
      onPressOut = () => {},
      style = {},
      text = undefined,
      textStyle = {},
      borderRadius = _radius,
      round = false,
      font = _font
    }: FABProps) => createFAB({
      backgroundColor,
      textColor,
      children,
      onPress,
      onPressIn,
      onPressOut,
      style,
      text,
      textStyle,
      borderRadius,
      colors: [_primary, _secondary],
      round,
      font
    }),

    // Input text
    InputText: ({
      styleType = 'primary',
      type = 'full',
      backgroundColor = '#00000000',
      children = undefined,
      onFinished = () => {},
      onTextChanged = () => {},
      placeholder = "Type here",
      placeholderColor = _isDarkTheme ? '#bbb' : '#777',
      style = {},
      textStyle = {},
      value = undefined,
      borderRadius = _radius,
      colors = [_primary, _secondary]
    }: InputTextProps) => createInputText({
      styleType,
      type,
      backgroundColor,
      children,
      onFinished,
      onTextChanged,
      placeholder,
      placeholderColor,
      style,
      textStyle,
      value,
      borderRadius,
      colors
    }),

    // Sliding panel
    SlidingPanel: ({
      children = <></>,
      animatedBackgroundColor = _bgColor,
      backgroundColor = undefined,
      openedSize = 0,
      closedSize = 0,
      style = {},
      borderRadius = _radius,
      disableBorderRadiusWhenFullscreen = true,
      slidingBar = true
    }: SlidingPanelProps) => createSlidingPanel({
      children,
      animatedBackgroundColor,
      backgroundColor,
      openedSize,
      closedSize,
      style,
      borderRadius,
      disableBorderRadiusWhenFullscreen,
      slidingBar
    }),

    // Title
    Title: ({
      size = 'L',
      bold = false,
      style = {},
      color = _textColor,
      children = "Title",
      font = _font
    }: TitleProps) => createTitle({
      size,
      bold,
      style,
      color,
      children,
      font
    }),

    // Tile
    Tile: ({
      children = <></>,
      backgroundColor = _bgColor.value,
      borderRadius = _radius,
      style = {}
    }: TileProps) => createTile({
      children,
      backgroundColor,
      borderRadius,
      style
    }),

    Modal: ({
      children = <></>,
      style = {},
      backgroundColor = _bgColor.value,
      borderRadius = _radius,
      animationExitingDuration = 200,
      animationEnteringDuration = 300,
      doNotAnimate = false,
      doNotAnimateExiting = false,
      doNotAnimateEntering = false
    }: ModalProps) => createModal({
      children,
      style,
      backgroundColor,
      borderRadius,
      animationExitingDuration,
      animationEnteringDuration,
      doNotAnimateEntering,
      doNotAnimateExiting,
      doNotAnimate
    })

    // Add new components here
  };

  return RComp;
}

export default createRComps;
