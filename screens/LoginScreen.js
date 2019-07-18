import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';


export default function LoginScreen(props) {
  const [email, setEmail]= useState('Babiibel');
  const [password, setPassword]= useState('Babiibel');


  function handleSubmitSignIn(){
    fetch('https://snapchat.improve-code.net/inscription', {
      method: 'POST',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        email : email,
        password : password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function handleSubmitLogin(){
    fetch('https://snapchat.improve-code.net/connection', {
      method: 'POST',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        email : email,
        password : password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      props.changeToken(responseJson.data.token);
    })
    .catch((error) => {
      console.error(error);
    })
  }

    return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/snapcode.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          {/* <DevelopmentModeNotice /> */}

          <Text style={styles.getStartedText}>Welcome to Snapchat</Text>
          <View style={styles.title}>
            <TextInput style={styles.input} placeholder={'Your email'} name="email" onChangeText={(email) => setEmail(email)}/>
            <TextInput style={styles.input} placeholder={'Your password'} name="password" secureTextEntry={true} onChangeText={(password) => setPassword(password)}/>
            <View  style={styles.but1}>
              <Button title="Login" onPress={() => handleSubmitLogin()}></Button>
            </View>
            <View  style={styles.but2}>
              <Button title="Sign In" onPress={() => handleSubmitSignIn()}></Button>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}


LoginScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    backgroundColor: '#F5FCFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#F5FCFF',
    width: 300,
    borderRadius: 3,
    padding: 5,
  },
  but1:{
    marginBottom: 5,
    marginTop: 5
  }
});
