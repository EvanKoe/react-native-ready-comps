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
  RCompsType
} from './constants/CompTypes';
import createClickable from './components/Clickable'
import createFAB from './components/FAB';
import createInputText from './components/InputText';
import { Easing, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const createRComps = ({
  primaryColor = '#545df9',
  secondaryColor = '#342d2d',
  textColor = '#dddddd',
  primaryDarkColor = '#7f7fff',
  secondaryDarkColor = '#f5bfc5',
  darkTextColor = '#dddddd',
  backgroundColor = '#ddd',
  darkBackgroundColor = '#212121',
  radius = 8,
  textStyle = {},
  darkTheme = false,
  animationType = 'timing',
  animationDuration = 100,
  animationEase = 'easeInOut'
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

  // Updates the theme according to _isDarkTheme
  const refreshTheme = () => {
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
      styleType = 'primary',
      onPress = () => {},
      onPressIn = () => {},
      onPressOut = () => {},
      textColor = _textColor,
      textStyle = {},
      value = 'Click here',
      style = {},
      backgroundColor = styleType === 'primary' ? _primary : _secondary,
      borderRadius = _radius
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
      colors: [_primary, _secondary]
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
      borderRadius = _radius
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
      colors: [_primary, _secondary]
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
      borderRadius = _radius
    }: InputTextProps) => createInputText({
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
      colors: [_primary, _secondary]
    })

    // Add new components here
  }

  return RComp;
}

export default createRComps;
