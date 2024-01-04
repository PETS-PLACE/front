import React, { useState, useEffect } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/painel";

const PainelPetshop = () => {
  const [eyeIcon, setEyeIcon] = useState(false)

  const {typeUser} = useLocalSearchParams()

  const [nomes] = useState([
    "Petshops",
    "Tosa",
    "Banho",
    "Passeio",
    "Consuta",
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {typeUser === "cliente" && (
          <>
            {nomes.slice(0, 5).map((nome, index) => (
              <Link href={`/about`} asChild>
                <TouchableOpacity
                  key={index}
                  style={styles.quadrado}
                >
                  <Text style={styles.nome}>{nome}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </>
        )}

        {typeUser === "empresa" && (
          <>
            <Link href={`/`} asChild>
              <TouchableOpacity style={styles.quadrado}>
                <Text style={styles.nome}>Cadastrar serviços</Text>
              </TouchableOpacity>
            </Link>

            <Link href={`/`} asChild>
              <TouchableOpacity style={styles.quadrado}>
                <Text style={styles.nome}>Cadastrar colaboradores</Text>
              </TouchableOpacity>
            </Link>
          </>
        )}
      </View>
    </View>
  );
};

export default PainelPetshop;
