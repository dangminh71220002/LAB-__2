import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList,Image,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [music, setMusic] = useState([]);
    const getMusicFromApi = async () => {
        const resp = await fetch("https://us-central1-musdio-6ec90.cloudfunctions.net/app/api/music/get")
        const data = await resp.json().then((responseJson) => {
          setFilteredDataSource(responseJson.data);
          setMasterDataSource(responseJson.data);
        })
        .catch((error) => {
          console.error(error);
        })
        return data.data
    };
    useEffect(() => {
        if (music.length===0){  setMusic(getMusicFromApi()) }
    }, [])




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Search
