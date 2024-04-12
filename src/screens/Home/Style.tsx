import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logoContainer:{
      flexDirection:'column',
      borderColor: '#ffffff',
      borderWidth: 2,
      alignSelf:'center',
      justifyContent:'center',
      marginBottom: 60,
      paddingTop:20,
      paddingBottom:10,
      backgroundColor: '#4D4D4D',
    },
    inputContainer:{
      borderRadius:10,
      flexDirection:'column',
      alignItems: 'center',
      alignSelf:'center',
      justifyContent:'center',
    }
  });
  
  export default styles