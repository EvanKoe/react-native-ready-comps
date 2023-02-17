import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ClickableProps } from '../constants/CompTypes';

const createClickable = ({
  value,
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  style,
  textStyle,
  textColor,
  backgroundColor,
  borderRadius,
  styleType,
  font,
  disabled,
  secondary,
  boldText
}: ClickableProps) => {
  const elevation = useSharedValue(disabled ? 0 : 10);
  const scale = useSharedValue(1);

  const pressIn = useCallback(() => {
    if (disabled) {
      return;
    }
    scale.value = withTiming(0.98, { duration: 100 });
    elevation.value = withTiming(5, { duration: 100 });
    onPressIn();
  }, []);

  const pressOut = useCallback(() => {
    if (disabled) {
      return;
    }
    scale.value = withTiming(1, { duration: 100 });
    elevation.value = withTiming(10, { duration: 100 });
    onPressOut();
  }, []);

  const containerFullStyle = useAnimatedStyle(() => {
    return {
      elevation: disabled ? 0 : elevation.value,
      borderRadius: borderRadius,
      backgroundColor: disabled ? backgroundColor + '77' : backgroundColor,
      transform: [{ scale: scale.value }]
    }
  });

  const containerLinedStyle = useAnimatedStyle(() => {
    return {
      elevation: 0,
      borderRadius: borderRadius,
      backgroundColor: "#00000000",
      borderColor: disabled ? backgroundColor + '77' : backgroundColor,
      borderWidth: 2,
      transform: [{ scale: scale.value }]
    }
  });

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignSelf: 'flex-start'
    },
    text: {
      color: styleType === 'full' ? (disabled ? '#ddd' : '#777') : backgroundColor + (disabled ? '77' : 'ff'),
      fontSize: 12,
      textAlign: 'center',
      fontFamily: font,
      marginRight: 'auto',
      marginLeft: 'auto',
      fontWeight: boldText ? 'bold' : '500'
    }
  });

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      disabled={disabled}
    >
      <Animated.View style={[
        styles.container,
        styleType === 'full' ? containerFullStyle : containerLinedStyle,
        style
      ]}>
        { value !== '' && (
          <Text style={[
              styles.text,
              textStyle,
              textColor !== undefined && { color: textColor }
          ]}>{ value }</Text>
        ) }
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default createClickable;
