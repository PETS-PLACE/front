import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
//A lib react-native-media-query permite usar medias query e outras funções do css vanila
import StyleSheet from 'react-native-media-query';

export default function Login() {
  return (
    <View style={styles.conatainer}>

      <View style={styles.div} dataSet={{media: ids.div}}>

        <View style={styles.viewLogo}>
          <Image source={require('../../assets/logo.png')}/>
          <Text style={styles.title}>Pets Place</Text>
        </View>


        <View style={styles.viewContent}>
          <Text style={styles.p}>Escolha o tipo de conta para acessar</Text>

          {/* O <Link></Link> é um componente do expo router usado para redirecionar para uma determinada rota*/}
          {/* passndo o parametro typeUser como cliente para rota login */}
          <Link href={"/login/cliente"} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>CONTA DE CLIENTE</Text>
            </TouchableOpacity>
          </Link>

          {/* passndo o parametro typeUser como empresa para rota login */}
          <Link href={"/login/empresa"} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>CONTA DE EMPRESA</Text>
            </TouchableOpacity>
          </Link>

        </View>
      </View>

    </View>
  )
}


//Adicionando os estilos
const {ids, styles} = StyleSheet.create(
  {
    conatainer:{
      flex: 1,
      alignItems: "center",
      justifyContent:'center',
      backgroundColor: '#EBEFEF'
    },

    div:{
      backgroundColor: "#FFFFFF",
      width: "80%",
      height: '70%',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 10,
      boxShadow: "2px 4px 2px #BBBBBB",
      maxWidth: 500,
      '@media (max-width: 500)': {
        width: '100%',
        height:'100%',
      }
    },

    viewLogo:{
      flex: 0.6,
      alignItems: "center",
      justifyContent:'center',
      flexDirection: "column",
      backgroundColor: '#536CD5',
      borderTopLeftRadius: 10,
      borderTopRightRadius:10,
      '@media (max-width: 500)': {
        borderTopLeftRadius: 0,
      borderTopRightRadius:0,
      }
    },

    viewContent:{
      flex: 0.4
    },

    title:{
      fontSize: 50,
      fontWeight: "700",
      color: '#EBEFEF'
    },

    p:{
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 40,
      textAlign:'center',
      color: '#1D1F26',
      marginTop: 20
    },

    button:{
      marginRight: "auto",
      marginBottom: 20,
      marginLeft: "auto",
      width: 200,
      height: 50,
      borderRadius: 10,
      border: "none",
      backgroundColor: '#607FFF',
      cursor: 'pointer',
      display: "flex",
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center',
    },

    btnText:{
      color: 'white',
      fontWeight: '700',
    }
  }
);

