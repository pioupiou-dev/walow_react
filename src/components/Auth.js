import React,{ useEffect, useState,createContext } from 'react'
import {Text, View,ScrollView,SafeAreaView,Appearance,Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Connexion from './Connexion';
import Inscription from './Inscription';

export default function Auth() {
    const Tab = createBottomTabNavigator();
    const [color, setColorScheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener(({colorScheme})=>{
        setColorScheme(colorScheme)
    });

    const scheme = color === 'dark'
  return (

    <Tab.Navigator >
        <Tab.Screen name="Connexion"   options={{ headerShown:false,tabBarStyle:{display:'none'},}} >
        {(props)=><Connexion isDarkMode={scheme} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Inscription"   options={{ headerShown:false,tabBarStyle:{display:'none'},}} >
        {(props)=><Inscription isDarkMode={scheme} {...props} />}
        </Tab.Screen>  
    </Tab.Navigator>
    
  )
}
