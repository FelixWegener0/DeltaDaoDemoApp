// Wird in aktueller fassung nicht genutzt

import React, { useEffect } from 'react';
import { 
  View, 
  Button,
  TextInput,
} from 'react-native';

import styles from '../CSS/css';

import 'react-native-gesture-handler';


function Sidebar( { navigation } ) {
  const [text, onChangeText] = React.useState('');


  // useEffect(() => {
  //   navigation.navigate('MainScreen', {
  //     paramKey: text,
  //   })
  // }, [text])

  return (
  <View style={styles.container}>
    <Button onPress={() => navigation.goBack()} title="Go back to MainScreen" />

    <View style={styles.containerSearch}>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={String(text)}
          placeholder="anzahl Assets Pro Seite"
          keyboardType="default"
      />
    </View>

    <Button onPress={() => navigation.navigate('MainScreen', {paramKey: text,})} title="submit data" />
  
  </View>
  )
}

export default Sidebar;