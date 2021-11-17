import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

export default function PostPage({navigation}) {

    const data = new FormData()
    data.append("[amount]", '200')
    data.append("[description]", 'aaa')
    data.append("[trip]", 'aaa')
    data.append("[user]", 'aaa')

    function postAPI(){
        fetch('http://localhost:8080/postexpense',{
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: data
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
      }

    return (
        <View style={styles.container}>

            <Image
            style={styles.logo}
            source={require('./assets/bflogo2-nobg.png')}
            />

            <Text style={styles.title}>Insert the details of your new expense</Text>

            <View style={styles.textandinput}>
            <Text style={styles.descriptiontext}>Trip name: </Text>
            <TextInput 
                style={styles.input}
                placeholder="japan2021"
                />
            </View>

            <View style={styles.textandinput}>
            <Text style={styles.descriptiontext}>Amount: </Text>
            <TextInput 
                style={styles.input}
                placeholder="300"
                />
            </View>

            <View style={styles.textandinput}>
            <Text style={styles.descriptiontext}>Description: </Text>
            <TextInput 
                style={styles.input}
                placeholder="hotel"
                />
            </View>

            <TouchableOpacity
                onPress={postAPI}
                style={styles.touchopa}>
                <Text style={styles.btntext}>POST EXPENSE</Text> 
            </TouchableOpacity>

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
        fontSize: 16,
        margin: '10px',
      },
    text: {
        margin: '10px'
      },
    input: {
        height: 25,
        borderColor: 'gray',
        borderWidth: 1,
      },
    descriptiontext: {
        margin: '10px',
        fontFamily: 'tahoma',
        fontSize: 13,
      },
    logo: {
        width: 200,
        height: 75,
        marginVertical: '5px',
      },
    textandinput: {
        flexDirection: 'row',
      },
    touchopa: {
        backgroundColor: '#f5304f',
        borderRadius: 5,
      },
      btntext: {
        margin: '10px',
        fontFamily: 'tahoma',
        color: 'white',
        fontWeight: "bold",
      },
  });