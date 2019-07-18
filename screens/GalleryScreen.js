import * as React from 'react';
import { Button, Image, View } from 'react-native';
import {ImagePicker, Permissions, Constants} from 'expo';


export default class GalleryScreen extends React.Component {
    state = {
      image: null,
    };
  
    render() {
      let { image } = this.state;
    
      if (image){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button
                title="Pick an image from camera roll"
                onPress={this._pickImage}
              />
              {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}   
                <View>
                    <Button title="Contact" onPress={() => this.props.navigation.navigate('Contact', {image: image})} />
                </View>
            </View>
        );
      }else {
          return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}   
      </View>
          )}
      
    }
  
    componentDidMount() {
      this.getPermissionAsync();
    }
  
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
  
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
  }