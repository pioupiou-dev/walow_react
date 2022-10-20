import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inscriptionContainer: {
    dark:{
      backgroundColor:'#181A20',
      textAlign:'center',
      height:"100%",
    
    },
    light:{
      backgroundColor:'#ffffff',
      textAlign:'center',
      height:"100%",
    }
  },
  
  sectionInput: {
    marginTop:60,
    overflow:'visible',
    scrollbars:"none"
  },
  
  sectionTitle: {
    light:{
      fontSize: 30,
      fontWeight: '600',
      color:'#3E40EA',
      marginTop:60,
      textAlign:'center',
    },
    dark:{
      fontSize: 30,
      fontWeight: '600',
      color:'white',
      marginTop:60,
      textAlign:'center',
    }
    
  },
    
  socialLinksContainer:{
    alignItem:'center',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop:20,

  },
});

export default styles