import React from "react";
import { Slot } from 'expo-router';
import { Image, View, Text } from "react-native";
import { styles } from '../styles/layoutRaiz';

export default function HomeLayout()
{
    return (
      <View>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 50, height: 50 }} source={{uri:"src/assets/logo.png"}} />
          </View>
          <View>
            <Text> PETS PLACE </Text>
            <Text>
              Econtre o que o seu estimado
              animalzinho precisa aqui
            </Text>
          </View>
        </View>

        <View>
          <Slot />
        </View>

        <View style={styles.footer}>
          <Text> Pets place team - 2022 - Todos os direitos Reservados. </Text>
        </View>
      </View>
    )
}

