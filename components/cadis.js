import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,Image,Dimensions,ScrollView } from 'react-native';
import Logo from './image';
import kadis from '../assets/cadis.jpg';
import baignoire from '../assets/baignoire.jpg';
import remorque from '../assets/remorque.png';


const cadis =(props)=> {

  return (
      <ScrollView >
        <Text style={styles.Gtitre}>Panier</Text>
        <Text> vos items:</Text>

        <Logo style={styles.image} source={kadis} alert={'pour faire les course c\'est pratique '}/>
        <Text>cadis, 150HT €</Text>

        <Logo source={baignoire} alert={'baignoire'} ></Logo>
        <Text>baignoire, 3600HT €</Text>

        <Logo source={remorque} alert={'ca roule bien '}></Logo>
        <Text>remorque 2 roues, 850HT €</Text>


        <Text>TOTAL</Text>
        <Text style={styles.red} >4 600€ HT</Text>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  red:{
    color:'red'
  },
  Gtitre:{
    textAlign: 'center',
  },
  Ptitre:{
    marginBottom:'-10%'
  },
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

export default cadis;