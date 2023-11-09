import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function Home() {
  return (
    <View style={styles.conatainer}>
      <Text>Page About</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    conatainer:{
      flex: 1,
      alignItems: "center",
      justifyContent:'center'
    }
  }
)