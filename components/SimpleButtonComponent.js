import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, StyleSheet} from 'react-native'

export default class SimpleButtonComponent extends Component{

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = StyleSheet.create({
   container: {
       alignItems: 'center',
       padding: 10
   }
});