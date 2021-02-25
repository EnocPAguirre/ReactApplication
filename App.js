import React, { useState } from 'react';
import { View, FlatList, Text, Image, ScrollView, TextInput, Button, StyleSheet } from 'react-native';

import Header from './components/screens/cards';

const principalStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    item1: {
      height: 110
    },
    item2: {
      flex: 2, backgroundColor: 'black'
    },
    item3: {
      flex: 3, backgroundColor: 'steelblue'

    }
})

const App  = () => {
  return (
      <View style={principalStyles.container} >

      <View style={principalStyles.item1}>
      <Header/>
      </View>
      <View style={principalStyles.item2}></View>
      <View style={principalStyles.item3}></View>
    </View>
  );
}




export default App;



