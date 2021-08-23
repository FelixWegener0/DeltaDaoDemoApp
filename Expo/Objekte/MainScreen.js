import React, { useEffect, useState } from 'react';
import { 
  Text,
  View,
  Button,
  Linking, 
  TouchableHighlight,
  
  SafeAreaView,
  TextInput,
  RefreshControl,
  ScrollView,
  Alert,
  FlatList
} from 'react-native';

import styles from '../CSS/css';
import Kachel from './Kacheln';

import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';



function MainScreen( { navigation, route } ) {
    const [data1, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [anzahlAssets, setAnzahlAssets] = useState(10);
    const sheetRef = React.useRef(null);
    const enableContent = false;
    const [search, setSearch] = useState('');


    const renderContent = () => (
        <View style={styles.bottomSheet}>
            <View style={styles.button}>  
                <TouchableHighlight onPress = {() => {if(page > 1 ) {setPage(page - 1)}} }>
                <Text style={{color: 'white'}}>Last Page    </Text>
                </TouchableHighlight>

                <Text style={{color: 'white'}}>current Page: {page}     	</Text>

                <TouchableHighlight onPress = {() => setPage(page + 1)}>
                <Text style={{color: 'white'}}>Next Page</Text>
                </TouchableHighlight>
            </View>

            {/*Eingabe für Assets Pro Seite*/}
            <View style={styles.containerAssetsProSeite}>
                <TextInput
                    style={styles.input}
                    onChangeText={setAnzahlAssets}
                    value={String('')}
                    placeholder="anzahl Assets Pro Seite"
                    keyboardType="default"
                />
            </View>

            {/*Eingabe für Search funktion*/}
            <View style={styles.containerAssetsProSeite}>
                <TextInput
                    style={styles.input}
                    onChangeText={setSearch}
                    value={String(search)}
                    placeholder="Search"
                    keyboardType="default"
                />
            </View>
            
        </View>
    );



    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.io)",
        "Content-Type": "application/json"
    }

    useEffect(() => {
        fetch("https://aquarius.gaiaxtestnet.oceanprotocol.com/api/v1/aquarius/assets/ddo/query", { 
        method: "POST",
        body: `{\r\n    \"cancelToken\": {\r\n        \"promise\": {}\r\n    },\r\n    \"offset\": ${anzahlAssets},\r\n    \"page\": ${page},\r\n    \"query\": {\r\n        \"query_string\": {\r\n            \"query\": \"-isInPurgatory:true \"\r\n        }\r\n    },\r\n    \"sort\": {\r\n        \"created\": -1\r\n    }\r\n}`,
        headers: headersList
        })
        .then((response) => response.json())
        .then((json) => setData(json));
    }, [page, anzahlAssets])



    return (
        <SafeAreaView style={styles.container}> 
            
            <TouchableHighlight onPress = {() => Alert.alert('Open Website', 'Leaving App and open the Ocan Marketplace?', [
                {text: "Yes", onPress: () => Linking.openURL('https://market.oceanprotocol.com/')},
                {text: "No"},
                ])}>
                <Text style={styles.ueberschrift}>Gaia-X Portal (powered by Ocean Protocol)</Text>
            </TouchableHighlight>

            <Text style={{color: 'white',}}>trade data sets in the Gaia-X network (powered by Ocean Protocol)</Text>

            <FlatList
                data = {data1.results}
                keyExtractor={item => item.id}

                renderItem={({ item }) => {

                const metadata = item.service.find(service => service.type === 'metadata')

                if(search !== '') {
                    const datasets = item.service.results.filter((item) => {
                        const metadata = item.service.find((svc) => svc.type === 'metadata')
                        return metadata.attributes.main.type === 'dataset'
                    })

                    metadata = datasets;
                }

                return <Kachel 
                
                    headline={metadata.attributes.main.name}
                    date={metadata.attributes.main.dateCreated} 
                    author={metadata.attributes.main.author}
                    id={item.id}
                    description={metadata.attributes.additionalInformation.description}

                />
                }}
            />
            
            <BottomSheet
                ref={sheetRef}
                snapPoints={['50%', '1%']}
                initialSnap={1}
                borderRadius={10}
                renderContent={renderContent}
                enabledContentTapInteraction={enableContent}
            />
            
        </SafeAreaView>
    );
}


export default MainScreen;