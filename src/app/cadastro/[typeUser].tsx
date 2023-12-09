import React, { useState } from 'react';
import { View,Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Link } from 'expo-router';
import styles from '../../styles/cadastro';
import { useLocalSearchParams, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useApi } from '../../hooks/api';

export default function CadastroCliente() {
    const [eyeIcon, setEyeIcon] = useState(false)
    //Esse é um parametro passado pela rota
    const {typeUser} = useLocalSearchParams()

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState(0)
    const [bairro, setbairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const create = async () => {
        if(typeUser == 'cliente'){
            const dados = {
                nome,
                cpf,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                email,
                password
            }  
            
            const response = await useApi('post', 'clients', dados)
            if(response?.status == 200){
                alert('Cadastro realizado com sucesso')
                router.push(`/login/${typeUser}`)
            }

        }

        else{
            const dados = {
                nome,
                cnpj,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                email,
                password
            }      
            
            const response = await useApi('post', 'petshop', dados)
            if(response?.status == 200){
                alert('Cadastro realizado com sucesso')
                router.push(`/login/${typeUser}`)
            }
        }
    }
    

    return(
        <View style={styles.conatainer}>

            <View style={styles.form}>

                <View style={styles.formTitle}>
                    <Text style={styles.title}>Cadastro</Text>
                </View>

                <ScrollView style={styles.formBody}>

                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome' onChange={(e) => {setNome(e.nativeEvent.text)}}/>

                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='Informe um email para usar como login' onChange={(e) => {setEmail(e.nativeEvent.text)}}/>

                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.PassArea}>

                        <TextInput 
                        placeholder='Digite sua senha' 
                        style={styles.inputPass}
                        secureTextEntry={!eyeIcon}
                        onChange={(e) => {setPassword(e.nativeEvent.text)}}
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
                            <TextInput style={styles.input} placeholder='Digite apenas os números do cpf' onChange={(e) => {setCpf(e.nativeEvent.text)}}/>
                        </>
                        :
                        <>
                            <Text style={styles.label}>CNPJ</Text>
                            <TextInput style={styles.input} placeholder='Digite apenas os números do cnpj' onChange={(e) => {setCnpj(e.nativeEvent.text)}}/>
                        </>
                    }

                    <Text style={styles.label}>Rua</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome da rua' onChange={(e) => {setRua(e.nativeEvent.text)}}/>

                    <Text style={styles.label}>Número da Residencia</Text>
                    <TextInput 
                    keyboardType="number-pad" 
                    style={styles.input} 
                    placeholder='Informe o número da residencia' 
                    onChange={(e) => {setNumero(Number(e.nativeEvent.text))}}
                    />

                    <Text style={styles.label}>Bairro</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome do bairro' onChange={(e) => {setbairro(e.nativeEvent.text)}}/>

                    <Text style={styles.label}>Cidade</Text>
                    <TextInput style={styles.input} placeholder='Informe o nome da cidade' onChange={(e) => {setCidade(e.nativeEvent.text)}}/>

                    <Text style={styles.label}>Estado</Text>
                    <TextInput style={styles.input} placeholder='Informe o Estado' onChange={(e) => {setEstado(e.nativeEvent.text)}}/>

                    <TouchableOpacity style={styles.submit} onPress={create}>
                        <Text style={styles.button}>Cadastrar</Text>
                    </TouchableOpacity>

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