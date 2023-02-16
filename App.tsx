import React, { useRef } from 'react';
import { SafeAreaView, Text, ToastAndroid, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import createRComps from './Base';

export default () => {
  const RComps = createRComps({
    primaryColor: '#59ddf9',
    secondaryColor: '#545df9',
    textColor: '#212121',
    darkTextColor: '#ddd',
    darkBackgroundColor: '#303030',
    backgroundColor: '#F3F0EB',
    radius: 8
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
          <RComps.Title bold>Clickable</RComps.Title>
          <RComps.Tile
            style={{ flexDirection: 'row', marginVertical: 12 }} 
            backgroundColor={RComps.isDarkTheme() ? "#f5bfc516" : "#fff"}
          >
            <RComps.Clickable
              value={RComps.isDarkTheme() ? 'Dark theme' : 'Light theme'}
              textColor={RComps.isDarkTheme() ? '#fff' : '#000'}
              onPress={() => RComps.setIfDarkTheme(e => !e)}
              style={{ marginRight: 'auto' }}
            />
            <RComps.Clickable
              styleType="secondary"
              value="Secondary"
              textColor={RComps.isDarkTheme() ? '#000' : '#fff'}
              onPress={() => ToastAndroid.show("Clicked", ToastAndroid.SHORT)}
            />
            <RComps.Clickable
              disabled={true}
              value="Disabled"
              textColor="#777"
              style={{ marginLeft: 'auto' }}
            />
          </RComps.Tile>
          <RComps.InputText
            styleType='primary'
            placeholder='Your text here'
            onFinished={(e: string) => console.log(e)}
            type="full"
          />
        </Animated.View>
        <RComps.SlidingPanel
          closedSize={100}
          openedSize={0}
          // backgroundColor={RComps.isDarkTheme() ? "#313131" : '#ccc'}
          slidingBarStyle={{ backgroundColor: '#F7F7F7' }}
          style={{ paddingHorizontal: 12 }}
          borderRadius={5}
        >
          <RComps.Title bold>Sliding panel</RComps.Title>
        </RComps.SlidingPanel>
        {/* <RComps.FAB text='FAB' round /> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
