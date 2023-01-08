import React, { useEffect, useState,useContext } from 'react'
import {Text, View,ScrollView,SafeAreaView,Appearance,Alert } from 'react-native';
import connectionStyle from '../assets/resources/styles/ConnectionStyle'
import facebookImage from '../assets/resources/imgs/Facebookcopy.png'
import google from '../assets/resources/imgs/google.png'
import Button from './utils/Button';
import Separateur from './utils/Separateur';
import InputBox from './utils/InputBox';
import AuthButton from './utils/AuthButton';
import { AuthContext } from '../context/AuthContext';

export default function Connexion(props) {
  const {login,message} = useContext(AuthContext)
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')
  const {isDarkMode,navigation} = props

    return (
      <SafeAreaView style={isDarkMode ? connectionStyle.connexionContainer.dark : connectionStyle.connexionContainer.light}>
        <Text style={isDarkMode ? connectionStyle.sectionTitle.dark : connectionStyle.sectionTitle.light }>Connexion</Text>
        <View style={connectionStyle.sectionInput}>
            
            <InputBox label='Adresse e-mail ou numero' isDarkMode ={isDarkMode} autoCapitalize='none' onChangeText={(text)=>{setUser(text)}}/>
            <InputBox label='Mot de passe' isDarkMode ={isDarkMode} onChangeText={(text)=>{setPassword(text)}} autoCapitalize='none'/>
            <Button title='Connexion' onPress={()=>{login(user,password)}}/>
            <Text style={{marginLeft:12}}>{message}</Text>
            <Text style={{textAlign:'right', marginRight:15,marginTop:20,color: isDarkMode ? '#ffffff': '#000000'}}>Mot de passe oublié ?</Text>
            <Separateur text='Ou continuez avec' isDarkMode ={isDarkMode}/>
            <View style={connectionStyle.socialLinksContainer}>
              <AuthButton source={google} isDarkMode ={isDarkMode}/>
              <AuthButton source={facebookImage} isDarkMode ={isDarkMode}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
              <Text style={{color: isDarkMode ? 'white' : 'black',opacity:.7 }}>Vous n’avez pas de compte ? </Text>
              <Button title="S'inscrire" style={{}} textStyle={{color: isDarkMode ? 'white': '#3E40EA' }} onPress={()=>navigation.navigate('Inscription')}/>
            </View>
        </View>
      </SafeAreaView>
    )
}


//Coulibaly wawota aziz