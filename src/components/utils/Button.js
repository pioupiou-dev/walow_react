import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';


export default function Button(props) {
  const { onPress, title = 'Save', style = styles.button,textStyle = styles.text } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      margin:12,
      backgroundColor: '#3E40EA',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
