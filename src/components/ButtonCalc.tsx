/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  wide?: boolean;
  onPress: (number: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#2D2D2D',
  wide = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.button,
          width: wide ? 180 : 80,
          backgroundColor: color,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    fontWeight: '300',
  },
});
