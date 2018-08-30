import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import InputTextComponent from "../components/InputTextComponent";
import PrimaryButtonComponent from "../components/PrimaryButtonComponent";

export default class SignUpScreen extends Component {

    static navigationOptions = {
        title: 'Cadastra-se'
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Cadastra-se agora, e saiba mais sobre o seu candidato!</Text>
                <InputTextComponent placeholder="Nome"/>
                <InputTextComponent placeholder="Sobrenome"/>
                <InputTextComponent placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"/>
                <InputTextComponent placeholder="Usuário" autoCapitalize="none"/>
                <InputTextComponent placeholder="Senha" secureTextEntry={true}/>
                <PrimaryButtonComponent text="Cadastrar"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 10
    }
});