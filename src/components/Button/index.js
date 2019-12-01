import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Button = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={props.function}>
                <Text style={styles.textButton}>{props.text}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        borderWidth:2,
        borderColor: '#FFF',
        width: 146,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 40
    },

    textButton:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default Button;