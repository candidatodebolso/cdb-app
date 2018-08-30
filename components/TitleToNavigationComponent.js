import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

const width = 500;
const height = 146;
const heightTitle = 40;
const widthTitle = width * heightTitle / height;

export default class TitleToNavigationComponent extends Component {
    render() {
        return (
            <Image style={styles.image} source={require('./../resources/images/logo_horizontal.png')}/>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: heightTitle,
        width: widthTitle
    }
});