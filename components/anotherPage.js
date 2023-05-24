import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Username,Password} from './login';
import{email} from"./otherPage";

import Icon from 'react-native-vector-icons/FontAwesome';

const AnotherPage =(props)=>{
  return (
    <View style={styles.container}>
      <Icon name="rocket" size={30} color="#900" />
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

export default AnotherPage;