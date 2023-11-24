import React, { useState } from 'react';
import { View,Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Link } from 'expo-router';
import styles from '../../styles/cadastro';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CadastroCliente() {
    const [eyeIcon, setEyeIcon] = useState(false)
    //Esse é um parametro passado pela rota
    const {typeUser} = useLocalSearchParams()
    

    return(
        <View style={styles.conatainer}>

            <View style={styles.form}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>Cadastro</Text>
                </View>

                <ScrollView style={styles.formBody}>

                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome'/>

                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='Informe um email para usar como login'/>

                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.PassArea}>

                        <TextInput 
                        placeholder='Digite sua senha' 
                        style={styles.inputPass}
                        secureTextEntry={!eyeIcon}
                        >
                        </TextInput>

                        <TouchableOpacity 
                        style={styles.icon}
                        
                        >
                        <Ionicons 
                        name={eyeIcon ? `eye`: `eye-off`} 
                        size={20} color={'#9399B0'}
                        onPress={() => setEyeIcon(!eyeIcon)}
                        />
                        </TouchableOpacity>

                    </View>

                    {
                        typeUser === 'cliente'
                        ?
                        <>
                            <Text style={styles.label}>CPF</Text>
                            <TextInput style={styles.input} placeholder='Digite apenas os números do cpf'/>
                        </>
                        :
                        <>
                            <Text style={styles.label}>CNPJ</Text>
                            <TextInput style={styles.input} placeholder='Digite apenas os números do cnpj'/>
                        </>
                    }

                    <Text style={styles.label}>Rua</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome da rua'/>

                    <Text style={styles.label}>Número da Residencia</Text>
                    <TextInput keyboardType="number-pad" style={styles.input} placeholder='Informe o número da residencia'/>

                    <Text style={styles.label}>Bairro</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome do bairro'/>

                    <Text style={styles.label}>Cidade</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome da cidade'/>

                    <Text style={styles.label}>Estado</Text>
                    <TextInput style={styles.input} placeholder='Informe o Estado'/>

                    <Link href={`/login/${typeUser}`} asChild>
                        <TouchableOpacity style={styles.submit}>
                            <Text style={styles.button}>Cadastrar</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href={`/login/${typeUser}`} asChild>
                        <TouchableOpacity style={styles.back}>
                            <Text style={styles.backButton}>Voltar</Text>
                        </TouchableOpacity>
                    </Link>
                    
                </ScrollView>
            </View>
        </View>
    )
}