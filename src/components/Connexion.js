import React, { useEffect, useState } from 'react'
import {Text, View,ScrollView,SafeAreaView,Appearance,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env'
import connectionStyle from '../assets/resources/styles/ConnectionStyle'
import facebookImage from '../assets/resources/imgs/Facebookcopy.png'
import google from '../assets/resources/imgs/google.png'
import Button from './utils/Button';
import Separateur from './utils/Separateur';
import InputBox from './utils/InputBox';
import AuthButton from './utils/AuthButton';

export default function Connexion(props) {
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@userToken', value)
    } catch (e) {
      // saving error
    }
  }
  clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    navigation.navigate('Inscription')
  }
  async function getConnexion(){
     await fetch(API_URL+'/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user,
        password: password
      })
    })
    .then((response) => response.json())
    .then((datas) => {
      if(datas.status == true ){
        storeData(datas.token)
        navigation.navigate('Homepage')
      }else{
        console.log(datas.msg)
      }
    })
  }
    const {isDarkMode,navigation} = props
    return (
      <SafeAreaView style={isDarkMode ? connectionStyle.connexionContainer.dark : connectionStyle.connexionContainer.light}>
        <Text style={isDarkMode ? connectionStyle.sectionTitle.dark : connectionStyle.sectionTitle.light }>Connexion</Text>
        <View style={connectionStyle.sectionInput}>
            
            <InputBox label='Adresse e-mail ou numero' isDarkMode ={isDarkMode} autoCapitalize='none' onChangeText={(text)=>{setUser(text)}}/>
            <InputBox label='Mot de passe' isDarkMode ={isDarkMode} onChangeText={(text)=>{setPassword(text)}}/>
            <Button title='Connexion' onPress={getConnexion}/>
            <Text style={{textAlign:'center', marginTop:20,color: isDarkMode ? '#ffffff': '#000000'}}>Mot de passe oublié ?</Text>
            <Separateur text='Ou continuez avec' isDarkMode ={isDarkMode}/>
            <View style={connectionStyle.socialLinksContainer}>
              <AuthButton source={google} isDarkMode ={isDarkMode}/>
              <AuthButton source={facebookImage} isDarkMode ={isDarkMode}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
              <Text style={{color: isDarkMode ? 'white' : 'black',opacity:.7 }}>Vous n’avez pas de compte ? </Text>
              <Button title="S'inscrire" style={{}} textStyle={{color: isDarkMode ? 'white': '#3E40EA' }} onPress={() => navigation.navigate('Inscription')}/>
            </View>
        </View>
      </SafeAreaView>
    )
}


//Coulibaly wawota aziz