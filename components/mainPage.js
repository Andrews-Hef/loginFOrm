import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,Image,Dimensions } from 'react-native';
import Carousel from './carousel';

const mainPage =(props)=> {


  return (
    <View style={styles.container}>
        <Text style={styles.titre}>Bienvenue sur mon application !</Text>
        <Text style={styles.texte}>Bonjour</Text>
        <Carousel/>
        <Text style={styles.texte}>Ici,sa scroll</Text>
    </View>

  );
}
const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
        marginBottom:20,
        marginTop:50,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default mainPage;