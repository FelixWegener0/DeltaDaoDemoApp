import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 25,
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
    },
    //Container Search box
    containerAssetsProSeite: {
      backgroundColor: 'white', 
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Text Input Search
    input: {
      color: 'black',
      height: 40,
      width: '60%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    // Buttons zum wechseln der Seite
    button: {
      flexDirection: "row",
      height: 50,
      width: 280,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Bottom sheet
    bottomSheet: {
      backgroundColor: 'black', 
      alignItems: 'center', 
      justifyContent: 'center',
    }
  });

export default styles;