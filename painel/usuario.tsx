import React, { useState } from "react";
import { Link } from 'expo-router';
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
          <Link href={`/about`} asChild>
          <TouchableOpacity
            key={index}
            style={styles.quadrado}
          >
            <Text style={styles.nome}>{nome}</Text>
          </TouchableOpacity>
          </Link>
        ))}
      </View>
  );
};

export default Main;
