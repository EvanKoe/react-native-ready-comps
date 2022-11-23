import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ClickableProps } from '../constants/CompTypes';

const createClickable = ({
  value = '',
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  style = {},
  textStyle = {},
  textColor = undefined,
  backgroundColor = undefined,
  borderRadius = undefined
}: ClickableProps) => {
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
      { value !== '' && (
        <Text style={[
            styles.text,
            textStyle,
            textColor !== undefined ? { color: textColor } : {}
        ]}>{ value }</Text>
      ) }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#545df9',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    elevation: 20,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  text: {
    color: '#ddd',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default createClickable;