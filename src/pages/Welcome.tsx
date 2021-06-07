import React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'}
                suas plantas{'\n'}
                de forma fácil
            </Text>
            <Image source={wateringImage} style={styles.image}/>

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.65}
            >
                <Text style={styles.buttonText}>
                    Avançar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>


    )
   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.heading,
        marginTop:36
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:21,
        marginBottom:20,
        height:45,
        paddingHorizontal:20
    },
    image:{
        width: 330.13,
        height: 320.3
    },
    buttonText:{
        color:colors.white,
        fontSize:16
    }
});