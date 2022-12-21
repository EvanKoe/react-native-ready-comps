import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { InputTextProps } from '../constants/CompTypes';

const createInputText = (props: InputTextProps) => {
  const styles = StyleSheet.create({
    containerFull: {
      paddingHorizontal: 16,
      paddingVertical: 4,
      backgroundColor: props.backgroundColor,
      borderRadius: props.borderRadius,
      borderColor: props.colors[1],
      color: '#ddd',
      borderWidth: 3,
    },
    containerLined: {
      borderBottomColor: '#545df9',
      backgroundColor: props.backgroundColor,
      borderBottomWidth: 2,
      borderColor: props.colors[0],
    },
    defaultTextStyle: {
      color: props.colors[1],
      fontSize: 18,
    }
  });

  return (
    <View style={[
      props.type === 'full' ? styles.containerFull : styles.containerLined,
      props.style
    ]}>
      <TextInput
        onChangeText={props.onTextChanged}
        onEndEditing={(e: any) => props.onFinished(e.nativeEvent.text)}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        style={[
          styles.defaultTextStyle,
          props.textStyle
        ]}
      >
        { props.children && props.children }
      </TextInput>
    </View>
  );

}


export default createInputText;
