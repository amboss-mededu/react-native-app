import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Article } from './components/Article';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Article/>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 22
  },
});

// Module name
AppRegistry.registerComponent('App', () => App);
