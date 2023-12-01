import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from '../../styles/PainelUsuario';

const Main = () => {
  const [nomes, setNomes] = useState([
    "Petshops",
    "Tosa",
    "Banho",
    "Passeio",
    "Consuta",
  ]);

  return (
      <View style={styles.container}>
        {nomes.map((nome, index) => (
          <TouchableOpacity
            key={index}
            style={styles.quadrado}
          >
            <Text style={styles.nome}>{nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
  );
};

export default Main;
