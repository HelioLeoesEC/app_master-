import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: '#000000',
    },
    inputdados: {
      fontSize: 30,
      marginLeft: 10,
      color: '#fff',
      alignItems: 'center',
      alignContent: 'center',
      borderWidth: 1,
      height: 50,
      width: 200,
      paddingTop: 5,
      borderBottomColor: '#8d0d0d'
  
    },
    botao: {

      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8d0d0d',
      marginTop: 10,
      height: 50,
      width: 200,
      borderRadius: 10,
    },
    botao2:{
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8d0d0d',
      marginTop: 10,
      height: 50,
      width: 200,
      borderRadius: 10,
    },
  
    Titulo:{
      fontWeight: 'bold',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 30,
      marginBottom: 10,
    },
    subtitle:{
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 35,
      padding: 10,
    },
    textocomum:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18

    },
    texto:{
      fontSize:15,
      fontWeight: 'bold',
      color: '#fff',
      padding:10,

    }, 
    divbotao:{
      alignItems: 'center'
    },
    outerView:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'rgba(0,0,0,0.2)'
    },
    modalView:{
      backgroundColor: 'white',
      borderRadius:20,
      padding:30,
      width:400,
      height: 400,
      alignItems: 'center',
      shadowColor:"#0000"

    },
    fechar:{
      color: '#8d0d0d',
      paddingTop:100,
      fontSize: 30,

    },
    textoresposta:{
      fontSize: 30,

    }
  });

  export default styles;