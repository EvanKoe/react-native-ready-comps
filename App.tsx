import React from 'react';
import { View, StyleSheet } from 'react-native'
import Clickable from './components/Clickable';

export default () => {
  return (
    <View style={styles.container}>
      <Clickable value="Log in please" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});
