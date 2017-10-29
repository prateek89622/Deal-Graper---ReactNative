// Android code

// Importing libraries to help creating components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'MagicBricks!'} />
    <AlbumList />
  </View>
);

// Render it tos device
AppRegistry.registerComponent('MagicBricks', () => App);
