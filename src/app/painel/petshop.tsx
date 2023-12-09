import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/PainelPetshop";

export default function Petshop( props:{} ){

  return (
      <View>
        <Text style={styles.demonstracao}> Painel de ações do petshop </Text>
        <Text> Css desta tela pronta pode ser delegado à outro integrante </Text>
      </View>
  );
};

