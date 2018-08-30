import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import InputTextComponent from "../components/InputTextComponent";
import PrimaryButtonComponent from "../components/PrimaryButtonComponent";
import SimpleButtonComponent from "../components/SimpleButtonComponent";

const {width} = Dimensions.get('window');
const logoWidth = width / 2;
const logoHeight = (logoWidth * 841) / 1000;

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./../resources/images/logo_vertical.png')}/>
                    <InputTextComponent placeholder="Usuário"/>
                    <InputTextComponent placeholder="Senha" secureTextEntry={true}/>
                    <PrimaryButtonComponent text="Entrar"/>
                    <SimpleButtonComponent text="ou clique aqui para se cadastrar"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: logoWidth,
        height: logoHeight
    }
});