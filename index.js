import React from 'react';
import {Alert, AppRegistry, Text, View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from './components/native/PrimaryButton';
import { PrimaryButton as DSPrimaryButton } from './components/shared/PrimaryButton';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', padding: 20, gap: 20 }}>
        <Text style={{fontSize: 24}}>DS PrimaryButton from IOS</Text>
        <View style={{height: 48}}>
          <PrimaryButton title="Primary Button" onClick={() => Alert.alert(`clicked`)}/>
        </View>
        <Text style={{fontSize: 24}}>React native Button styled as DS PrimaryButton</Text>
        <View style={{height: 48, width: 200}}>
          <DSPrimaryButton title="Primary Button" onPress={() => Alert.alert('clicked')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// Module name
AppRegistry.registerComponent('App', () => App);
