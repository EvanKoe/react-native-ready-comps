import React, { useRef } from 'react';
import { SafeAreaView, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import createRComps from './Base';

export default () => {
  const RComps = createRComps({
    primaryColor: '#59ddf9',
    secondaryColor: '#545df9',
    textColor: '#212121',
    radius: 15
  });

  const backgroundAnim = useAnimatedStyle(() => {
    return {
      backgroundColor: RComps.currentBackgroundColor.value,
      padding: 16,
      height: '100%'
    }
  });

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={[
      ]}>
        <Animated.View style={backgroundAnim}>
          <RComps.Clickable
            value={RComps.isDarkTheme() ? 'Switch to light theme' : 'Switch to dark theme'}
            onPress={() => RComps.setIfDarkTheme(e => !e)}
        />
          <RComps.FAB text='FAB' round />
          <RComps.InputText
            styleType='primary'
            placeholder='Your text here'
            onFinished={(e: string) => console.log(e)}
            type='full'
          />
        </Animated.View>
        <RComps.SlidingPanel
          closedSize={0}
          openedSize={0}
          style={{ borderWidth: 2, borderColor: '#ddd' }}
          borderRadius={30}
        >
          <Text>Bonjour</Text>
        </RComps.SlidingPanel>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
