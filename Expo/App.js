import React, { } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Sidebar from './Objekte/Sidebar';
import MainScreen from './Objekte/MainScreen'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Mainscreen">
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="Sidebar" component={Sidebar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;