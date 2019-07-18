import React from 'react';
import { 
  createAppContainer, createSwitchNavigator, createStackNavigator
} from 'react-navigation';

import GalleryScreen from '../screens/GalleryScreen'
import MainTabNavigator from './MainTabNavigator';
import CameraScreen from '../screens/CameraScreen'
import ContactScreen from '../screens/ContactScreen'
import HomeScreen from '../screens/HomeScreen';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Gallery: GalleryScreen,
    Camera: CameraScreen,
    Contact: ContactScreen,
    Home: HomeScreen
  })
);
