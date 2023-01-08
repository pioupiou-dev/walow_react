import React, {useEffect, useState, createContext} from 'react';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  
  const [message, setMessage] = useState('');
  
  const logout = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  };

  const storeData = async (path,value) => {
    try {
      await AsyncStorage.setItem(path, value);
    } catch (e) {}
  };

  const getToken = async () => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem('@userToken');
      setUserToken(value);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

//   getDatas = async ()=>{
//     try {
//         setLoading(true);
//         const value = await AsyncStorage.getItem('@userDatas');
//         setUserDatas(value)
//         setLoading(false);
//       } catch (e) {
//         console.log(e);
//       }
//   }
  const login = async (user, password) => {
    setLoading(true);
    await fetch(API_URL + '/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(datas => {
        if (datas.status == true) {
          setUserToken(datas.token);
          storeData('@userToken',datas.token);
          setLoading(false);
        } else {
          setMessage(datas.msg);
          setLoading(false);
        }
      });
  };
 
//   async function getUserDatas() {
//     await fetch(API_URL + '/user/getuser/infos', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         authorization: userToken,
//       },

//     })
//       .then(response => response.json())
//       .then(datas => {
//         if (datas.status == true) {
//           storeData('@userDatas',JSON.stringify(datas))
//           setUserDatas(datas)
//         } else {
//           setUserDatas([]);
//         }
//       });
//   }

  useEffect(() => {
    getToken()
    // getUserDatas()
  }, []);
  return (
    <AuthContext.Provider
      value={{logout, isLoading, login, userToken, message}}>
      {children}
    </AuthContext.Provider>
  );
};
