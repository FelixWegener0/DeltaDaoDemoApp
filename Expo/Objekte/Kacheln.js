import React from 'react';
import { 
    Text,
    View, 
    Linking, 
    TouchableHighlight, 
    Alert, 
  } from 'react-native';
import styles from '../CSS/css';

var AssetLink = 'https://market.oceanprotocol.com/asset/';

const Kachel = (props) => (
<TouchableHighlight onPress= {() => Alert.alert('Open Website', 'Leaving App and open the webside for this '+props.headline, [
        {text: "Yes", onPress: () => Linking.openURL(AssetLink+props.id)},
        {text: "No"},
    ])}>
    <View style={styles.item}>


        <Text style={styles.headline}>{props.headline}</Text>
        <Text style={styles.defaulttext}>Created by:      {props.author}</Text>
        <Text style={styles.defaulttext}>Created on:      {props.date}</Text>
        <Text style={styles.defaulttext}>Description:     {props.description}</Text>

    </View>
</TouchableHighlight>
);




export default Kachel;