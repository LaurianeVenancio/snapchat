import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AsyncStorage} from 'react-native';


export default function HomeScreen(props) {
  useEffect(() => {
    allUser();
  }, []);

  async function allUser(){
    const token = await AsyncStorage.getItem("token");

    fetch('https://snapchat.improve-code.net/all', {
      method: 'GET',
      headers: {
        'token': token,
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.data);
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
  
            <Text style={styles.getStartedText}>Vous êtes connecté!</Text>
          </View>
  
        </ScrollView>
      </View>
    );
  }


HomeScreen.navigationOptions = {
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
