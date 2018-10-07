import React, {Component} from 'react';
import {StyleSheet, View,Text, TextInput, TouchableOpacity } from 'react-native';



class LoginForm extends React.Component {
  

  render() {
    return(
      <View style ={styles.container}>
        <TextInput 
        placeholder= "Username or Email"
        returnKeyType='next'
        style ={styles.input} 
        />
        <TextInput 
        style = {styles.input}
        placeholder= "Password"
        returnKeyType="go"
        secureTextEntry
         />
        <TouchableOpacity style ={styles.buttonContainer}>
          <Text style ={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>

      </View>


    );
  }


}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: 'black'
  }

});
export default LoginForm;
