import React from 'react';
import BackImg from '../../assets/resources/imgs/inputBack.png';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Appearance,
} from 'react-native';
import backImage from '../../assets/resources/imgs/inputBack.png';

export default function InputBox(props) {
  const {
    isDarkMode,
    label,
    placeholder,
    style = isDarkMode ? styles.input.dark : styles.input.light,
    keyboardType,
    onChangeText,
    value,
    maxLength,
    autoCapitalize,
    multiline=false,
  } = props;
  return (
    <View style={{marginTop: 20,}}>
      <Text style= {isDarkMode ? styles.label.dark : styles.label.light} > {label} </Text>
      <View style={{height: 50, alignItem: 'center', margin: 12}}>
        <ImageBackground source={isDarkMode && backImage} resizeMode="cover" style={styles.imageGround}/>
        <TextInput style={style} keyboardType={keyboardType} onChangeText={onChangeText} value={value} maxLength={maxLength} autoCapitalize={autoCapitalize} multiline={multiline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    light:{
      height: 50,
      padding: 10,
      borderRadius: 5,
      backgroundColor:'#EBEFFF',
      color:'black',
    },
    dark:{
      height: 50,
      padding: 10,
      borderRadius: 5,
      backgroundColor:'transparent',
      color:'white',
    }
  },
  label:{
    light:{
      color:'black',
      margin: 12,
      fontSize: 16,
      marginBottom: -5,
    },
    dark:{
      color: 'white',
      margin: 12,
      fontSize: 16,
      marginBottom: -5,
    },
  },
  imageGround:{
    height: '100%',
    width: '100%',
    flex: 1,
    position: 'absolute',
    borderRadius: 10,
  }
})

