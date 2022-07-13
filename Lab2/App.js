import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList,Image,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Minh</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
