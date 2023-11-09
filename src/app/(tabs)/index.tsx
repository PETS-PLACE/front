import React from 'react';
import { Link } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function Login() {
  return (
    <View style={styles.conatainer}>
      <Text>Hellow my friend</Text>

      {/* O <Link></Link> é um componente do expo router usado para redirecionar para uma determinada rota*/}
      <Link href={"/(tabs)/about"} asChild>
        <Button title='About'></Button>
      </Link>

    </View>
  )
}


//Adicionando os estilos
const styles = StyleSheet.create(
  {
    conatainer:{
      flex: 1,
      alignItems: "center",
      justifyContent:'center'
    }
  }
)