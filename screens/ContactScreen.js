import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Picker,
    Button
} from 'react-native';
import {AsyncStorage} from 'react-native';




export default function LoginScreen(props) {
    const uri = props.navigation.state.params.image;
    const [users, setUsers]= useState([]);
    const [userSend, setUserSend]= useState('none');
    const [time, setTime]= useState("5");
    const [tokenUser, setTokenUser]= useState("");
    const formData = new FormData();

    formData.append('duration', time);
    formData.append('to', userSend);
    formData.append('image', {uri: uri, name: 'image.jpg', type: 'image/jpeg'});


    useEffect(() => {
        allUser();
      }, []);
    
      async function allUser(){
        const token = await AsyncStorage.getItem("token");
        setTokenUser(token);
    
        fetch('https://snapchat.improve-code.net/all', {
          method: 'GET',
          headers: {
            'token': token,
          }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          setUsers(responseJson.data);
        })
        .catch((error) => {
          console.error(error);
        })
      }


  function handleSubmit(){
    fetch('https://snapchat.improve-code.net/snap', {
      method: 'POST',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'token' : tokenUser
      },
      body : formData
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      props.navigation.navigate('Main');
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
            <Picker
                selectedValue={userSend}
                style={{height: 50, width: 300}}
                onValueChange={(itemValue) =>
                    setUserSend(itemValue)
                  }>
                <Picker.Item label="Sélectionner un utilisateur" value="none" />
                { users.map(function(item, index){
                    return <Picker.Item key={index} label={item.email} value={item.email}/>})
                }
            </Picker>  
            <Picker
                selectedValue={time}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue) =>
                    setTime(itemValue)
                }>
                <Picker.Item label="1" value='1' />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
            </Picker>
            <View  style={styles.but1}>
              <Button title="Envoyer" onPress={() => handleSubmit()}></Button>
            </View>
          </ScrollView>
        </View>
      );
      
}
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
