import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Username,Password} from './login';
import{email} from"./otherPage";

const anotherPage =(props)=>{
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Nom:</Text>
      <Text>{Username}</Text>
      <Text>email:</Text>
      <Text>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default anotherPage;