import React, {Component} from 'react';
import {TouchableNativeFeedback, Text, StyleSheet, Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window');

export default class PrimaryButtonComponent extends Component {
    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.button}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: width - 40,
        backgroundColor: '#00489e',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10
    },
    text: {
        color: 'white'
    }
});