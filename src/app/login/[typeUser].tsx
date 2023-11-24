import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import styles from '../../styles/login'

export default function Home() {
  const [eyeIcon, setEyeIcon] = useState(false)

  //Esse é um parametro passado pela rota
  const {typeUser} = useLocalSearchParams()

  return (

    <View style={styles.conatainer}>

      <View style={styles.formTitle}>
        <Text style={styles.title}>Login</Text> 
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

          <Link href={"/"} asChild>
            <TouchableOpacity style={styles.back}>
              <Text style={styles.backButton}>Voltar</Text>
            </TouchableOpacity>
          </Link>

          {/* passndo o parametro typeUser para rota cadastro */}
          <Link href={`/cadastro/${typeUser}`} style={styles.cadastro}>
            <Text>Não tem cadastro?</Text>
          </Link>

        </View>

      </View>
    </View>

  )
}