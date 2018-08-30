import React, {Component} from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default class InputTextComponent extends Component {

    render() {
        return (
            <TextInput style={styles.input} placeholder={this.props.placeholder} secureTextEntry={this.props.secureTextEntry}/>
        );
    }

}

const styles = StyleSheet.create({
   input: {
       borderWidth: 1,
       borderColor: '#00489e',
       height: 50,
       width: width - 40,
       marginHorizontal: 20,
       paddingHorizontal: 15,
       marginVertical: 10,
       borderRadius: 5,
       backgroundColor: 'white'
   }
});