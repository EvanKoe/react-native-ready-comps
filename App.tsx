import React, { useRef } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, ScrollViewComponent, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
      <SafeAreaView>
        <Animated.View style={backgroundAnim}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RComps.Title bold style={{ marginRight: 'auto' }}>
              Ready Comps Demo
            </RComps.Title>
            <TouchableOpacity onPress={() => RComps.setIfDarkTheme(e => !e)}>
              <Image
                source={{ uri: `https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/${RComps.isDarkTheme() ? "DDDDDD" : "000000"}/external-Night-Mode-interface-glyph-silhouettes-icons-papa-vector.png` }}
                style={{ width: 36, height: 36 }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ height: '100%', marginBottom: 52 }}>
            <RComps.Tile
              style={{ marginVertical: 12 }} 
              backgroundColor={RComps.isDarkTheme() ? "#f5bfc516" : "#fff"}
            >
              <RComps.Title bold>Clickable</RComps.Title>

              {/* Full */}
              <RComps.Title size='S' style={{ marginVertical: 12 }}>Full buttons</RComps.Title>
              <View style={{ flexDirection: 'row' }}>
                <RComps.Clickable
                  value="PRIMARY"
                  style={{ flex: 1, marginHorizontal: 2 }}
                  onPress={() => ToastAndroid.show("Primary full button", ToastAndroid.SHORT)}
                  textColor={RComps.isDarkTheme() ? '#fff' : '#000'}
                />
                <RComps.Clickable
                  secondary
                  value="SECONDARY"
                  textColor={RComps.isDarkTheme() ? '#000' : '#fff'}
                  onPress={() => ToastAndroid.show("Secondary full button", ToastAndroid.SHORT)}
                  style={{ flex: 1, marginHorizontal: 2 }}
                />
              </View>

              {/* Lined */}
              <RComps.Title size='S' style={{ marginVertical: 12 }}>Lined buttons</RComps.Title>
              <View style={{ flexDirection: 'row' }}>
                <RComps.Clickable
                  value="PRIMARY"
                  onPress={() => ToastAndroid.show("Primary lined button", ToastAndroid.SHORT)}
                  style={{ flex: 1, marginHorizontal: 2 }}
                  styleType="lined"
                />
                <RComps.Clickable
                  secondary
                  style={{ flex: 1, marginHorizontal: 2 }}
                  value="SECONDARY"
                  onPress={() => ToastAndroid.show("Secondary lined button", ToastAndroid.SHORT)}
                  styleType="lined"
                />
              </View>

              {/* Disabled */}
              <RComps.Title size='S' style={{ marginVertical: 12 }}>Disabled buttons</RComps.Title>
              <View style={{ flexDirection: 'row' }}>
                <RComps.Clickable
                  disabled
                  value="DISABLED"
                  textColor="#777"
                  style={{ flex: 1, marginHorizontal: 2 }}
                />
                <RComps.Clickable
                  disabled
                  value="DISABLED"
                  style={{ flex: 1, marginHorizontal: 2 }}
                  styleType="lined"
                />
              </View>
            </RComps.Tile>
            <RComps.Tile
              style={{ marginVertical: 12 }} 
              backgroundColor={RComps.isDarkTheme() ? "#f5bfc516" : "#fff"}
            >
              <RComps.Title bold>InputText</RComps.Title>
              <View style={{ marginTop: 12 }}>
                <RComps.InputText
                  textStyle={{ color: RComps.isDarkTheme() ? "#ddd" : "#000" }}
                  styleType="secondary"
                  placeholder="Your text here"
                  onFinished={(e: string) => console.log(e)}
                  type="full"
                />
                <RComps.InputText
                  textStyle={{ color: RComps.isDarkTheme() ? "#ddd" : "#000" }}
                  style={{ marginHorizontal: 12 }}
                  styleType="secondary"
                  placeholder="Your text here"
                  onFinished={(e: string) => console.log(e)}
                  type="line"
                />
              </View>
            </RComps.Tile>
            <RComps.Tile
              style={{ marginVertical: 12 }} 
              backgroundColor={RComps.isDarkTheme() ? "#f5bfc516" : "#fff"}
            >
              <RComps.Title bold size='XXL'>2XL bold title</RComps.Title>
              <RComps.Title bold size='XL'>XL bold title</RComps.Title>
              <RComps.Title bold size='L'>L bold title</RComps.Title>
              <RComps.Title bold size='M'>M bold title</RComps.Title>
              <RComps.Title bold size='S'>S bold title</RComps.Title>
              <RComps.Title bold size='XS'>XS bold title</RComps.Title>

              <RComps.Title size='XXL' style={{ marginTop: 12 }}>2XL title</RComps.Title>
              <RComps.Title size='XL'>XL title</RComps.Title>
              <RComps.Title size='L'>L title</RComps.Title>
              <RComps.Title size='M'>M title</RComps.Title>
              <RComps.Title size='S'>S title</RComps.Title>
              <RComps.Title size='XS'>XS title</RComps.Title>
            </RComps.Tile>
          </ScrollView>
        </Animated.View>
        <RComps.SlidingPanel
          closedSize={100}
          openedSize={0}
          slidingBarStyle={{ backgroundColor: "#F7F7F7" }}
          style={{ paddingHorizontal: 12 }}
          borderRadius={5}
        >
          <RComps.Title bold>Sliding panel</RComps.Title>
        </RComps.SlidingPanel>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
