/**
 * In this file you will find the primary RNComps object
 */

import React, { createFactory, useState } from 'react';
import { ClickableProps, FABProps, RCompsProps, RCompsType } from './constants/CompTypes';
import createClickable from './components/Clickable'
import createFAB from './components/FAB';

const createRComps = ({
  primaryColor = '#545df9',
  textColor = '#dddddd',
  radius = 8  // border radius
}: RCompsProps): RCompsType => {
  const [_primary, _setPrimary] = useState<string>(primaryColor);
  const [_textColor, _setTextColor] = useState<string>(textColor);
  const [_radius, _setRadius] = useState<number>(radius);

  const RComp: RCompsType = {
    // methods
    getPrimary: () => _primary,
    setPrimary: (e: string) => _setPrimary(e),

    getTextColor: () => _textColor,
    setTextColor: (e: string) => _setTextColor(e),

    getRadius: () => _radius,
    setRadius: (e: number) => _setRadius(e),

    // Creates a new Clickable Component
    Clickable: ({
      onPress = () => {},
      onPressIn = () => {},
      onPressOut = () => {},
      textColor = _textColor,
      textStyle = {},
      value = 'Click here',
      style = {},
      backgroundColor = _primary,
      borderRadius = _radius
    }: ClickableProps) => createClickable({
      onPress,
      onPressIn,
      onPressOut,
      textColor,
      textStyle,
      value,
      style,
      backgroundColor,
      borderRadius
    }),

    // Fast Action Button Component
    FAB: ({
      backgroundColor = _primary,
      textColor = _textColor,
      children = undefined,
      onPress = () => {},
      onPressIn = () => {},
      onPressOut = () => {},
      style = {},
      text = undefined,
      textStyle = {}
    }: FABProps) => createFAB({
      backgroundColor,
      textColor,
      children,
      onPress,
      onPressIn,
      onPressOut,
      style,
      text,
      textStyle
    })

    // Add new component here
  }

  return RComp;
}

export default createRComps;