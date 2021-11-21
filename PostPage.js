import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PostPage({ route, navigation }) {
  //Declaring constant variables and state hooks
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [trip, setTrip] = useState("");
  const username = route.params; //Getting the username from previous screen
  const [expenseposted, setExpenseposted] = useState("");

  //Function to call the API that will post the expense
  function postAPI() {
    console.log(amount, description, trip, username);
    fetch(
      `http://localhost:8080/postexpense?amount=${amount}&description=${description}&trip=${trip}&user=${username}`,
      {
        mode: "no-cors",
        method: "POST",
      }
    ).then((body) => {
      setExpenseposted("Expense posted.");
    });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/bflogo2-nobg.png")}
      />

      {/* Asking the user for trip name, amount and description */}
      <Text style={styles.title}>Insert the details of your new expense</Text>

      <View style={styles.textandinput}>
        <Text style={styles.descriptiontext}>Trip name: </Text>
        <TextInput
          style={styles.input}
          placeholder="japan2021"
          onChangeText={setTrip}
        />
      </View>

      <View style={styles.textandinput}>
        <Text style={styles.descriptiontext}>Amount: </Text>
        <TextInput
          style={styles.input}
          placeholder="300"
          onChangeText={setAmount}
        />
      </View>

      <View style={styles.textandinput}>
        <Text style={styles.descriptiontext}>Description: </Text>
        <TextInput
          style={styles.input}
          placeholder="hotel"
          onChangeText={setDescription}
        />
      </View>

      {/* Calling the API */}
      <TouchableOpacity onPress={postAPI} style={styles.touchopa}>
        <Text style={styles.btntext}>POST EXPENSE</Text>
      </TouchableOpacity>

      {/* Display message when a expense is posted */}
      <Text style={styles.text}>{expenseposted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00eafa",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "tahoma",
    fontSize: 16,
    margin: "10px",
  },
  text: {
    margin: "20px",
    fontFamily: "tahoma",
    fontSize: 13,
    fontWeight: "bold",
  },
  input: {
    height: 25,
    borderColor: "gray",
    borderWidth: 1,
  },
  descriptiontext: {
    margin: "10px",
    fontFamily: "tahoma",
    fontSize: 13,
  },
  logo: {
    width: 200,
    height: 75,
    marginVertical: "5px",
  },
  textandinput: {
    flexDirection: "row",
  },
  touchopa: {
    backgroundColor: "#f5304f",
    borderRadius: 5,
  },
  btntext: {
    margin: "10px",
    fontFamily: "tahoma",
    color: "white",
    fontWeight: "bold",
  },
});
