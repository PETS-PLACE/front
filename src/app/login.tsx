import React from 'react';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import StyleSheet from 'react-native-media-query';


export default function Home() {
  return (
    <View style={styles.conatainer}>
      <Text>Page Login</Text>
    </View>
  )
}

const {ids,styles} = StyleSheet.create(
  {
    conatainer:{
      flex: 1,
      alignItems: "center",
      justifyContent:'center'
    }
  }
)