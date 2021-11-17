import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

export default function ExpensesPage({navigation}) {

    const [trip, setTrip] = useState("");
    let [listexpenses, setListexpenses] = useState("");
    const showlist = [];

    function expensesAPI(){
        fetch('http://localhost:8080/trip?tripName=' + trip)
        .then((result) => result.json())
        .then((json) => {
          console.log(json)
          for (var i = 0; i < json.length; i++){
            setListexpenses(listexpenses + json[i].amount)
          }
        })
      }

    return (
        <View style={styles.container}>

            <View style={styles.box1}>

            <Image
            style={styles.logo}
            source={require('./assets/bflogo-nobg.png')}
            />

            <Text style={styles.title}>See the current expenses of a trip</Text>

            <View style={styles.textandinput}>

            <Text style={styles.descriptiontext}>Trip name</Text>

            <TextInput 
                style={styles.input}
                placeholder="japan2021"
                onChangeText={setTrip}
                />
            </View>

            <TouchableOpacity
                onPress={expensesAPI}
                style={styles.touchopa}>
                <Text style={styles.btntext}>SEE EXPENSES</Text> 
            </TouchableOpacity>

            </View>
            
            <View style={styles.box2}>

            <Text style={styles.resulttext}>{listexpenses}</Text>

            </View>

        </View>
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'tahoma',
        fontSize: 16,
        margin: '10px',
        color: 'white',
      },
    text: {
        margin: '10px'
      },
    input: {
        height: 25,
        borderColor: 'gray',
        borderWidth: 1,
      },
      textandinput: {
        flexDirection: 'row',
      },
    descriptiontext: {
        margin: '10px',
        fontFamily: 'tahoma',
        color: 'white',
        fontSize: 13,
      },
      resulttext: {
        fontFamily: 'tahoma',
        fontSize: 14,
        margin: '10px',
        textAlign:"center",
      },
      touchopa: {
        backgroundColor: '#38b6ff',
        borderRadius: 5,
      },
      btntext: {
        margin: '10px',
        fontFamily: 'tahoma',
        color: 'white',
        fontWeight: "bold",
      },
      logo: {
        width: 200,
        height: 75,
        marginVertical: '5px',
      },
      box1: {
        backgroundColor: '#f5304f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '100%',
        flex: '2',
      },
      box2: {
        backgroundColor: '#00eafa', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px',
        width: '100%',
        flex: '4',
      },
  });