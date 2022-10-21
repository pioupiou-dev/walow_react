import React,{ useEffect, useRef, useState } from 'react';
import { Appearance,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Connexion from './src/components/Connexion';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inscription from './src/components/Inscription';
const Tab = createBottomTabNavigator();

const App = () => {
    
    const [color, setColorScheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener(({colorScheme})=>{
        setColorScheme(colorScheme)
    });
    const [isLoading,setLoading] = useState(true)
    
    const [userId,setUserId] = useState(null)
    useEffect(()=>{
      getToken()
      setLoading(false)
    })
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('@userToken')
        if(value !== null) {
         setUserId(value)
        }else{
          return null
        }
      } catch(e) {
        console.log(e)
      }
    }
    
    
    
   const scheme = color === 'dark'
   const isConnected =   userId !== null

   if(isLoading){
    return (
      <Text style={{backgroundColor:'blue',alignItem:'center',justifyContent:'center',height:'100%'}}>
        loading
      </Text>
    )
   }else{
    if(isConnected){

    }else{
     return (
       <NavigationContainer>
         <Tab.Navigator >
           <Tab.Screen name="Connexion"   options={{ headerShown:false,tabBarStyle:{display:'none'},}} >
             {(props)=><Connexion isDarkMode={scheme} {...props} />}
           </Tab.Screen>
           <Tab.Screen name="Inscription"   options={{ headerShown:false,tabBarStyle:{display:'none'},}} >
             {(props)=><Inscription isDarkMode={scheme} {...props} />}
           </Tab.Screen>  
         </Tab.Navigator>
       </NavigationContainer>
     );
    }
   }
   
  
};

export default App;
