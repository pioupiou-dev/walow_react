import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Appearance,
} from 'react-native';

export default function Separateur(props) {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(({colorScheme}) => {
    setColorScheme(colorScheme);
  });
  const {text,isDarkMode} = props;
  separateurContainText =
    text !== '' && text !== null && text !== undefined ? true : false;
  return (
    <View style={style.container}>
      <View
        style={{
          borderWidth: 1.2,
          height: 1,
          margin: 12,
          borderColor: isDarkMode ? 'white' : 'black',
          width: '28%',
          opacity:.5
        }}></View>
      <Text style={{alignItem: 'center', color: isDarkMode ? 'white' : 'black',opacity:.5}}>{text}</Text>
      <View
        style={{
          borderWidth: 1.2,
          height: 1,
          margin: 12,
          borderColor: isDarkMode ? 'white' : 'black',
          width: '28%',
          opacity:.5
        }}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  line:{
    
  }
});
