import React,{ useEffect, useState }  from 'react'
import {Text, View,ScrollView,SafeAreaView,BackHandler} from 'react-native';
import facebookImage from '../assets/resources/imgs/Facebookcopy.png'
import google from '../assets/resources/imgs/google.png'
import Button from './utils/Button';
import Separateur from './utils/Separateur';
import InputBox from './utils/InputBox';
import AuthButton from './utils/AuthButton';
import inscriptionStyle from '../assets/resources/styles/InscriptionStyle'
export default function Inscription(props) {
  const {isDarkMode,navigation} = props
  const [datas,err] = useState([])
  useEffect(() => {
    BackHandler.addEventListener(
      "hardwareBackPress",()=>BackHandler.exitApp()
      
    );

  }, []);
  return (
    <SafeAreaView style={isDarkMode ? inscriptionStyle.inscriptionContainer.dark : inscriptionStyle.inscriptionContainer.light}>
        <Text style={isDarkMode ? inscriptionStyle.sectionTitle.dark : inscriptionStyle.sectionTitle.light }>Inscription</Text>
        <View style={inscriptionStyle.sectionInput}>
            <InputBox label='Numero de téléphone' isDarkMode ={isDarkMode} keyboardType="numeric"/>
            <InputBox label='Adresse email' isDarkMode ={isDarkMode} keyboardType="email-address"/>
            <Button title="S'inscrire" />
            <Separateur text='Ou continuez avec' isDarkMode ={isDarkMode}/>
            <View style={inscriptionStyle.socialLinksContainer}>
              <AuthButton source={google} isDarkMode ={isDarkMode}/>
              <AuthButton source={facebookImage} isDarkMode ={isDarkMode}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
              <Text style={{color: isDarkMode ? 'white' : 'black',opacity:.7 }}>Vous avez déja un compte ? </Text>
              <Button title="Se connecter" style={{}} textStyle={{color: isDarkMode ? 'white': '#3E40EA' }} onPress={() => navigation.navigate('Connexion')}/>
            </View>
        </View>
      </SafeAreaView>
  )
}
