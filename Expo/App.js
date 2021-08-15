import React, { useEffect, useState } from 'react';
import { 
  Text,
  View, 
  Linking, 
  TouchableHighlight, 
  SafeAreaView, 
  Alert, 
  FlatList
} from 'react-native';

import styles from './CSS/css';
import Kachel from './Objekte/Kacheln';



const App = () => {
  const [data1, setData] = useState([]);
  const [page, setPage] = useState(1);

  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.io)",
    "Content-Type": "application/json"
  }
   
  useEffect(() => {
    fetch("https://aquarius.oceanprotocol.com/api/v1/aquarius/assets/ddo/query", { 
      method: "POST",
      body: `{\r\n    \"cancelToken\": {\r\n        \"promise\": {}\r\n    },\r\n    \"offset\": 9,\r\n    \"page\": ${page},\r\n    \"query\": {\r\n        \"query_string\": {\r\n            \"query\": \"(chainId:4 OR chainId:3) AND -isInPurgatory:true \"\r\n        }\r\n    },\r\n    \"sort\": {\r\n        \"created\": -1\r\n    }\r\n}`,
      headers: headersList
    })
    .then((response) => response.json())
    .then((json) => setData(json));
  }, [page])
  

  return (
    <SafeAreaView style={styles.container}> 

      <Text style={styles.ueberschrift}>Ocean portable Market</Text>
          
      <TouchableHighlight onPress = {() => Alert.alert('Open Website', 'Leaving App and open the Ocan Marketplace?', [
              {text: "Yes", onPress: () => Linking.openURL('https://market.oceanprotocol.com/')},
              {text: "No"},
          ])}>
          <Text style={{color: 'white',}}>A marketplace to find, publish and trade data sets in the Ocean Network.</Text>
      </TouchableHighlight>
      
      
      
      <FlatList
        data = {data1.results}
        keyExtractor={item => item.id}

        renderItem={({ item }) => {

          const metadata = item.service.find(service => service.type === 'metadata')

          return <Kachel 
          
            headline={metadata.attributes.main.type}
            date={metadata.attributes.main.dateCreated} 
            author={metadata.attributes.main.author}
            id={item.id}
            description={metadata.attributes.additionalInformation.description}

          />
        }}
      />

      <View style={{flexDirection: "row"}}>  
        <TouchableHighlight onPress = {() => {if(page > 1 ) {setPage(page - 1)}} }>
          <Text style={{color: 'white'}}>Last Page     </Text>
        </TouchableHighlight>

        <Text style={{color: 'white'}}>current Page: {page}     </Text>

        <TouchableHighlight onPress = {() => setPage(page + 1)}>
          <Text style={{color: 'white'}}>Next Page</Text>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  );
}

export default App;