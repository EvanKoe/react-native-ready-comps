import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { GestureEvent, PanGestureHandler, PanGestureHandlerEventPayload, State } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SlidingPanelProps } from '../constants/CompTypes';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const createSlidingPanel = ({
  children,
  animatedBackgroundColor,
  backgroundColor,
  openedSize,
  closedSize,
  style,
  borderRadius,
  disableBorderRadiusWhenFullscreen,
  slidingBar,
  slidingBarStyle
}: SlidingPanelProps) => {
  const [isOpened, setIfOpened] = useState<boolean>(false);
  const closed = closedSize ? closedSize : 50;
  const opened = openedSize ? openedSize : HEIGHT;
  const topMargin = useSharedValue<number>(HEIGHT - (isOpened ? opened : closed));
  const animatedBorderRadius = useSharedValue<number>(borderRadius ?? 50);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: withTiming(topMargin.value),
      backgroundColor: backgroundColor ?? animatedBackgroundColor?.value,
      elevation: 20,
      width: WIDTH,
      height: HEIGHT * 2,
      borderRadius: withTiming(animatedBorderRadius.value)
    };
  }, []);

  const pan = (e: GestureEvent<PanGestureHandlerEventPayload>) => {
      // if velocity < 0 then slide up
      if (isOpened && e.nativeEvent.velocityY < 0) {
        return;
      }
      if (!isOpened && e.nativeEvent.velocityY > 0) {
        return;
      }
      if (e.nativeEvent.velocityY === 0) {
        return;
      }
      setIfOpened(b => !b);
  };

  useEffect(() => {
    topMargin.value = HEIGHT - (isOpened ? opened : closed);
    animatedBorderRadius.value = (
      isOpened && disableBorderRadiusWhenFullscreen && openedSize === 0
    ) ? 0 : (borderRadius ?? 0);
  }, [isOpened]);

  const styles = StyleSheet.create({
    slidingBar: {
      backgroundColor: '#999',
      width: '25%',
      height: 4,
      borderRadius: 50,
      marginVertical: 8,
      alignSelf: 'center'
    }
  });

  return (
    <PanGestureHandler
      onGestureEvent={pan}
    >
      <Animated.View style={[ animatedStyle, style ]}>
        <>
          { slidingBar && (
            <View style={[ styles.slidingBar, slidingBarStyle ]} />
          ) }
          { children }
        </>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default createSlidingPanel;
