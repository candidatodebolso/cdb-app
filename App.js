import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const MainStack = createStackNavigator(
    {
        Login: LoginScreen,
        SignIn: SignUpScreen
    }, {
        initialRouteName: 'Login'
    }
);

const RootStack = createStackNavigator(
    {
        Main: MainStack,
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

export default class App extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
}