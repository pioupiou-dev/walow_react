import React,{ useEffect, useRef, useState } from 'react';
import { Appearance,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './src/context/AuthContext';
import Appnav from './src/navigation/Appnav';
import SystemNavigationBar from 'react-native-system-navigation-bar';
const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener(({colorScheme})=>{
        setTheme(colorScheme)
    });
    SystemNavigationBar.setBarMode(theme);
const App = () => {

  return(
    <AuthProvider>
      <Appnav/>
    </AuthProvider>
  )
  
};

export default App;