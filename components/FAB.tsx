import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FABProps } from '../constants/CompTypes';

const createFAB = ({
  backgroundColor,
  textColor,
  children,
  onPress,
  onPressIn,
  onPressOut,
  style,
  text,
  borderRadius,
  textStyle,
  round,
  font
}: FABProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? '#545df9' },
        { borderRadius: round ? 200 : borderRadius },
        style
      ]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
        { children && children }
        { text !== undefined && (
          <Text
            style={[
              styles.text,
              textColor ? { color: textColor } : {  },
              { fontFamily: font },
              textStyle
            ]}
          >{ text }</Text>
        ) }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 20,
    maxWidth: 200,
    elevation: 8,
    position: 'absolute',
    bottom: 24,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: '#ddd',
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 18
  },
  icon: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddd',
    paddingVertical: 16,
    paddingHorizontal: 24
  }
})

export default createFAB;
