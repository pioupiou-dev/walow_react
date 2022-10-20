import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import backImage from '../../assets/resources/imgs/inputBack.png';
export default function AuthButton(props) {
  const {
    isDarkMode,
    style = isDarkMode ? styles.container.dark : styles.container.light,
    source,
    onPress,
    
  } = props;

  return (
    <View style={style}>
      <Image
        source={source}
        style={{height: 25, width: 25, zIndex: 999}}
        onPress={onPress}
      />
      <ImageBackground source={isDarkMode && backImage} resizeMode="cover" style={styles.imageGround}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    light:{
      height: 50,
      width: '40%',
      backgroundColor: '#EBEFFF',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    dark:{
      height: 50,
      width: '40%',
      backgroundColor:'transparent',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    }
  },

  imageGround:{
    height: '100%',
    width: '100%',
    flex: 1,
    position: 'absolute',
    borderRadius: 10,
  }
})