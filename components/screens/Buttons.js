import React from 'react';
import {Alert, View, Platform} from 'react-native';
import { PrimaryButton } from '../native/PrimaryButton';
import { PrimaryButton as DSPrimaryButton } from '../shared/PrimaryButton';
import { Heading } from '../shared/Heading';

export function Buttons() {
  const nativeButtonElm = Platform.OS === 'ios' ?  <PrimaryButton title="Primary Button" onClick={() => Alert.alert(`clicked`)}/> :
  <Text>Placeholder for Android Button</Text>

  return (
    <View style={{ flex: 1, flexDirection: 'column', padding: 20, gap: 20 }}>
      <Heading level={2}>DS PrimaryButton from {Platform.OS} </Heading>
      <View style={{height: 48}}>
        {nativeButtonElm}
      </View>
      <Heading level={2}>React native Button styled as DS PrimaryButton</Heading>
      <View style={{height: 48, width: 200}}>
        <DSPrimaryButton title="Primary Button" onPress={() => Alert.alert('clicked')} />
      </View>
    </View>
  );
};
