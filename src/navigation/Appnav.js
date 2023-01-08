import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import {Text,View,ActivityIndicator} from 'react-native';
import Connexion from '../components/Connexion';
import Auth from '../components/Auth';
import MainPage from '../components/MainPage';
export default function Appnav() {
    
    const {isLoading,userToken} = useContext(AuthContext)

    if(isLoading){
        return(
          <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
            <ActivityIndicator size="large" color="#0000ff"/>
          </View>
        )
        
    }

  return (
    <NavigationContainer>
      {userToken !== null ? <MainPage/> : <Auth/>}
       
    </NavigationContainer>
  )
}
