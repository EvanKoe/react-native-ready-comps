import React, { useState } from "react";
import Animated, { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated";
import { Dimensions, StyleSheet } from "react-native";
import { ModalProps } from "../constants/CompTypes";

const createModal = ({
  style,
  children,
  borderRadius,
  backgroundColor,
  animationExitingDuration,
  animationEnteringDuration,
  doNotAnimate,
  doNotAnimateExiting,
  doNotAnimateEntering
}: ModalProps) => {
  const [enteringDuration, setEnteringDuration] = useState<number>(doNotAnimate || doNotAnimateEntering ? 0 : animationEnteringDuration ?? 300);
  const [exitingDuration, setExitingDuration] = useState<number>(doNotAnimate || doNotAnimateEntering ? 0 : animationExitingDuration ?? 300);

  const styles = StyleSheet.create({
    darkView: {
      backgroundColor: '#000000bb',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      zIndex: 13,
      position: 'absolute',
      top: 0,
      left: 0
    },
    modalView: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      marginTop: 'auto',
      marginBottom: 'auto',
      marginHorizontal: 24,
      paddingHorizontal: 16,
      paddingVertical: 12
    }
  });

  return (
    <Animated.View
      style={[ styles.darkView ]}
      entering={FadeIn.duration(100)}
      exiting={FadeOut.duration((300))}
    >
      <Animated.View
        style={[ styles.modalView, style ]}
        entering={SlideInDown.duration(enteringDuration)}
        exiting={SlideInDown.duration(exitingDuration)}
      >
        { children && children }
      </Animated.View>
    </Animated.View>
  );
}


export default createModal;
