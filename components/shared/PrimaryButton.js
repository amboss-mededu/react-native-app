import React from 'react';
import { Text, StyleSheet, Pressable, Touchable, TouchableOpacity } from 'react-native';

export function PrimaryButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {({pressed}) => {
        const textStyle = pressed ? [styles.text, styles.pressedText] : styles.text
        
        return <Text style={textStyle}>{title}</Text>
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#047A88',
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    color: 'white',
  },
  pressedText: {
    opacity: 0.7
  }
});
