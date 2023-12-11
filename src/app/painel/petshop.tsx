import React, { useState } from "react";
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity} from "react-native";
import styles from '../../styles/PainelUsuario';
//O styles usado aqui esta como placeholder e deve ser subtituido por PainelPetshop(se não existir crie) att: Thales

const Main = () => {
  const [nomes, setNomes] = useState([
    "Cadastrar serviço",
    "Cadastrar colaboradores",
  ]);

  return (
      <View style={styles.container}>
        {nomes.map((nome, index) => (
          <Link href={"/about"} asChild>
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