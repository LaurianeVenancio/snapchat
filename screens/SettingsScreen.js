import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

export default function SettingsScreen(props) {


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

              <Text style={styles.getStartedText}>Welcome to Snapchat</Text>
              <View style={styles.title}>
                <View  style={styles.but1}>
                  <Button title="Camera" onPress={() => props.navigation.navigate('Camera')}></Button>
                </View>
                <View  style={styles.but2}>
                  <Button title="Galery" onPress={() => props.navigation.navigate('Gallery')} />
                </View>
              </View>
            </View>

          </ScrollView>
        </View>
      );
}


SettingsScreen.navigationOptions = {
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
