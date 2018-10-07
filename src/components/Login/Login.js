import React, {Component} from 'react';
import {StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
class Login extends React.Component {

  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style ={styles.container}>
        <View style = {styles.logoContainer}>
          <Image 
          style ={styles.Logo}
          source ={require('/Users/juvensenjules/Desktop/reactNative/helloworld/src/components/Images/firstLogo.jpg')} 
          />
        </View>
        <View style = {styles.formContainer} >
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }

  
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
  },
  Logo:{
      width: 350,
      height: 350
  }
});

export default Login;
