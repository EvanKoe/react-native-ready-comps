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
  colors,
  font,
  disabled
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

  const containerAnimStyle = useAnimatedStyle(() => {
    return {
      elevation: disabled ? 0 : elevation.value,
      borderRadius: borderRadius,
      backgroundColor: disabled ? backgroundColor + '77' : backgroundColor,
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
      color: disabled ? '#ddd' : '#777',
      fontWeight: '500',
      fontSize: 12,
      textAlign: 'center',
      fontFamily: font
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
        containerAnimStyle,
        style
      ]}>
        { value !== '' && (
          <Text style={[
              styles.text,
              textStyle,
              textColor !== undefined ? { color: textColor } : {}
          ]}>{ value }</Text>
        ) }
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default createClickable;
