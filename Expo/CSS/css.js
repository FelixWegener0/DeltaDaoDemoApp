import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1,
      backgroundColor: 'black',
    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10, 
    },
    ueberschrift: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Flatlist Deck
    headline: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 0,
      width: 200,
    },
    defaulttext: {
      color: 'black',
      fontSize: 12,
      //textAlign: 'center',
    }
  });

export default styles;