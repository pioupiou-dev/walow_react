import React,{useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Appearance,
  Image,
} from 'react-native';
import {API_URL} from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import { AuthContext } from '../context/AuthContext';


export default function MainPage(props) {
  const {isLoading,userToken} = useContext(AuthContext)
  const [userDatas, setUserDatas] = useState([]);
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@userDatas');
      setUserDatas(JSON.parse(value))
    } catch (e) {
      console.log(e);
    }
  };
  const storeData = async (path,value) => {
    try {
      await AsyncStorage.setItem(path, value);
    } catch (e) {}
  };
  async function user() {
    await fetch(API_URL + '/user/getuser/infos', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: userToken,
      },
    })
      .then(response => response.json())
      .then(datas => {
        if (datas.status == true) {
          storeData('@userDatas',JSON.stringify(datas))

        }
      });
  }
  useEffect(() => {
    user()
    getData()
    
  },[]);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
