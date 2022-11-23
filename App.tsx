import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import createRComps from './Base';

export default () => {
  const RComps = createRComps({ primaryColor: '#59ddf9', textColor: '#212121' });

  return (
    <SafeAreaView style={styles.container}>
      <RComps.Clickable value="bonjour" onPress={() => console.log('pute')} />
      <RComps.Clickable value='pute' backgroundColor='#e4f' />
      <RComps.FAB text='PUTE' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    padding: 16,
    flex: 1
  }
});
