import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import createRComps from './Base';

export default () => {
  const RComps = createRComps({
    primaryColor: '#59ddf9',
    secondaryColor: '#545df9',
    textColor: '#212121',
    radius: 20
  });

  const backgroundAnim = useAnimatedStyle(() => {
    return {
      backgroundColor: RComps.currentBackgroundColor.value,
      padding: 16,
      height: '100%'
    }
  });

  return (
    <SafeAreaView style={[
    ]}>
      <Animated.View style={backgroundAnim}>
        <RComps.Clickable
          value={RComps.isDarkTheme() ? 'Switch to light theme' : 'Switch to dark theme'}
          onPress={() => RComps.setIfDarkTheme(e => !e)}
      />
        <RComps.FAB text='FAB' />
        <RComps.InputText
          styleType='primary'
          placeholder='Your text here'
          onFinished={(e: string) => console.log(e)}
          type='full'
        />
      </Animated.View>
    </SafeAreaView>
  );
}
