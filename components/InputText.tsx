import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { InputTextProps } from '../constants/CompTypes';

const createInputText = ({
  type,
  style,
  value,
  colors,
  children,
  textStyle,
  styleType,
  onFinished,
  placeholder,
  borderRadius,
  onTextChanged,
  backgroundColor,
  placeholderColor
}: InputTextProps) => {
  const styles = StyleSheet.create({
    containerFull: {
      paddingHorizontal: 16,
      paddingVertical: 2,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      borderColor: colors[styleType === 'primary' ? 0 : 1],
      color: '#ddd',
      borderWidth: 2,
    },
    containerLined: {
      borderBottomColor: colors[styleType === 'primary' ? 0 : 1],
      backgroundColor: backgroundColor,
      borderBottomWidth: 2,
    },
    defaultTextStyle: {
      color: '#ddd',
      fontSize: 14,
    }
  });

  return (
    <View style={[
      type === 'full' ? styles.containerFull : styles.containerLined,
      style
    ]}>
      <TextInput
        onChangeText={onTextChanged}
        onEndEditing={(e: any) => onFinished(e.nativeEvent.text)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[
          styles.defaultTextStyle,
          textStyle
        ]}
      >
        { children && children }
      </TextInput>
    </View>
  );
}

export default createInputText;
