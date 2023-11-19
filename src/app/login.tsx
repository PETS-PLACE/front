import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import StyleSheet from 'react-native-media-query';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import Animated, {FadeInLeft} from 'react-native-reanimated';

export default function Home() {
  const [eyeIcon, setEyeIcon] = useState(false)
  const [keyboardShow, setKeyboardShow] = useState(false)

  useEffect(() => {
    //Aplicando evento que escuta se o teclado virtual no mobile esta ativo ou não
    //se o teclado virtual estiver ativo keyboardShow recebe true
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShow(true)
      })

      //se o teclado virtual estiver ativo keyboardShow recebe false
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardShow(false)
        }
      );

      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      }
  }, [])

  return (

    <View style={styles.conatainer}>
      <View style={styles.formTitle}>
        {
          keyboardShow
          ?
          //se keyboard for true rederiza esse componente
          <Animated.Text entering={FadeInLeft.delay(100)} style={styles.keyboardpress}>Login</Animated.Text>
          :
          //se keyboard for false rederiza esse componente
          <Text style={styles.title}>Login</Text> 

        }
      </View>
      <View style={styles.form}>

        <View style={styles.formBody}>

          <Text style={styles.label}>Email</Text>
          <TextInput 
          placeholder='Informe seu email' 
          style={styles.input}
          ></TextInput>

          <Text style={styles.label}>Senha</Text>

          <View style={styles.PassArea}>

            <TextInput 
            placeholder='Digite sua senha' 
            style={styles.inputPass}
            secureTextEntry={!eyeIcon}
            >
            </TextInput>

            <TouchableOpacity 
            style={styles.icon}
            
            >
              <Ionicons 
              name={eyeIcon ? `eye`: `eye-off`} 
              size={20} color={'#9399B0'}
              onPress={() => setEyeIcon(!eyeIcon)}
              />
            </TouchableOpacity>

          </View>


          <Link href={"/(tabs)/about"} asChild>
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>
          </Link>

          <Link href={'/(tabs)/about'} style={styles.cadastro}>
            <Text>Não tem cadastro?</Text>
          </Link>

        </View>

      </View>
    </View>

  )
}

const {ids,styles} = StyleSheet.create(
  {
    conatainer:{
      flex: 1,
      alignItems: "center",
      justifyContent:'center',
      backgroundColor: '#EBEFEF',
    },

    form:{
      display: 'flex',
      width: '80%',
      backgroundColor: '#FFFFFF',
      boxShadow: "2px 4px 2px #D8D8D8",
      borderRadius: 10,
      maxWidth: 500,
      '@media (max-width: 500)': {
        width: '100%',
        height: '85%',
      }
    },

    formTitle:{
      display: 'flex',
      justifyContent:'center',
      height: '15%',
      paddingLeft: 15,
      backgroundColor: '#536CD5',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: '80%',
      maxWidth: 500,
      '@media (max-width: 500)': {
        width: '100%',
        height:'15%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }
    },

    keyboardpress:{
      fontSize: 20,
      fontWeight: "700",
      color: '#EBEFEF',
    },

    title:{
      fontSize: 50,
      fontWeight: "700",
      color: '#EBEFEF',
    },

    formBody:{
      padding: 15,
      
    },

    label:{
      fontSize:18,
      color: '#2B324C',
      marginTop: 30,
      marginBottom: 5
    },

    input:{
      height: 50,
      backgroundColor: '#EBEFEF',
      padding: 10,
      color: '#9399B0',
      borderRadius: 5,
    },

    inputPass:{
      height: 50,
      backgroundColor: '#EBEFEF',
      padding: 10,
      color: '#9399B0',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      width:'85%',
    },

    icon:{
      width: '15%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#EBEFEF',
      borderTopRightRadius:10,
      borderBottomRightRadius:10
    },

    PassArea:{
      display:'flex',
      flexDirection:'row',
    },

    submit:{
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: 20,
      marginTop: 30,
      width: 200,
      height: 50,
      borderRadius: 10,
      border: "none",
      backgroundColor: '#536CD5',
      cursor: 'pointer',
      display: "flex",
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center',
    },

    button:{
      color: 'white',
      fontWeight: '700',
    },

    cadastro:{
      color: '#536CD5',
      fontWeight: '700',
      cursor: 'pointer',
      textAlign: 'center'
    },

    
  }
)