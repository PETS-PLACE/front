import React from 'react';
import { Text, Pressable, View, ScrollView, Image  } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {

  return (
    <View>
      <View>
          <Link href={{pathname:'/tipo/',params:{typeUser:''}}}>
            <Pressable>
              login
            </Pressable>
          </Link>
          <Link href={{pathname: '/tipo/cadastroEscolha'}}>
            <Pressable>
              Cadastro
            </Pressable>
          </Link>
      </View>

      <ScrollView>
        <View>
          <Text> Animal feliz é animal bem tratado </Text>
          <View>
            <Image style={{width:50,height:50}} source={{uri:"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"}} alt="gato" />
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

