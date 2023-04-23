import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import anotherPage from './anotherPage';

const login =(props)=> {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');


  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text >nom </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={Username}
        onChangeText={(Text) => setUsername(Text)}
      />
      <Text> Password </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        onChangeText={(Text) => setPassword(Text)}
      />
     <Button
      title='Log in '
      onPress={()=> props.navigation.push('anotherPage')}
      />
      
      <Button
      title='Sign In '
      onPress={()=> props.navigation.push('SignIn')}
      />
      </View>

  );
}
function setMyUSername(value) {
  setUsername(value);
}
function getMyUsername() {
  return Username;
}
function SetMYPassword(value){
  setPassword(value);
}
const styles = StyleSheet.create({
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

export default login;