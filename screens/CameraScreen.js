import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { withNavigationFocus } from 'react-navigation';


function CameraScreen(props) {

  const [hasCameraPermission, sethasCameraPermission]= useState(null);
  const [type, setType]= useState(Camera.Constants.Type.back);
  const [path, setPath]= useState('');


  useEffect(() => {
    permissions();
  }, []);

  async function permissions(){
    const status = await Permissions.askAsync(Permissions.CAMERA);
    sethasCameraPermission(status); 
  }
  async function takePicture() {
    if (camera) {
      let photo = await camera.takePictureAsync();
      props.navigation.navigate('Contact', { image: photo.uri });
    }
  }

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (!props.navigation.isFocused()){
      return null;
    } 
    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => {camera = ref;}} style={{ flex: 1 }} type={type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  if (type === Camera.Constants.Type.back){
                    setType(Camera.Constants.Type.front);
                  }
                  else {
                    setType(Camera.Constants.Type.back);
                  }
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={() => takePicture()}>
              <Text style={styles.capture} >
                [CAPTURE]
              </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }

  CameraScreen.navigationOptions = {
    header: null,
  };

  const styles = StyleSheet.create({
    capture: {
      color: '#ffffff',
      justifyContent: 'flex-end',
      textAlign: 'center',
      marginBottom: 36,
    },
  });

export default withNavigationFocus(CameraScreen);