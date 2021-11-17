import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';

export default function MenuPage({navigation}) {

    return (
        <View style={styles.container}>

            <View style={styles.box1}>
            <Text style={styles.title}>Select one option:</Text>
            </View>

            <View style={styles.box2}>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Post')}}>            
                <Image
                style={styles.icon}
                source={require('./assets/iconpost-nobg.png')}
                />
            </TouchableOpacity>

            <Text style={styles.text}>POST NEW EXPENSE</Text>

            <TouchableOpacity
                onPress={() => {navigation.navigate('Expenses')}}>            
                <Image
                style={styles.icon}
                source={require('./assets/iconexpenses-nobg.png')}
                />
            </TouchableOpacity>

            <Text style={styles.text}>SEE EXPENSES</Text>

            <TouchableOpacity
                onPress={() => {navigation.navigate('Finish')}}>            
                <Image
                style={styles.icon}
                source={require('./assets/iconfinish-nobg.png')}
                />
            </TouchableOpacity>

            <Text style={styles.text}>FINISH A TRIP</Text>
            </View>

        </View>
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00eafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'tahoma',
        fontSize: 22,
      },
    text: {
        marginBottom: '20px',
        fontFamily: 'tahoma',
        fontSize: 16,
      },
    icon: {
        width: 130,
        height: 130,
      },
      box1: {
        flex: 1,
        backgroundColor: '#f5304f',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      box2: {
        flex: 5,
        backgroundColor: '#00eafa',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

  });