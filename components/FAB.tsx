import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
  textStyle
}: FABProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        backgroundColor ? { backgroundColor: backgroundColor } : {  },
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
            textStyle
          ]}
        >{ text }</Text>
      ) }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 200,
    backgroundColor: '#545df9',
    borderRadius: 100,
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