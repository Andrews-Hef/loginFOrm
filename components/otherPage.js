import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';
import {Username,Password,setMyUSername,SetMYPassword} from './login';


const otherPage =(props)=>{
    const [email, Setemail] = useState('');
    return (
        <View style={styles.container}>
            
            <Text >nom </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={Username}
                onChangeText={(Text) => setMyUSername(Text)}
            />
            <Text> email </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={email}
                onChangeText={(Text) => setMyEmail(Text)}
            />
            <Text> Password </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={Password}
                onChangeText={(Text) => SetMYPassword(Text)}
            />
            <Button
            title='Sign In '
            onPress={()=> props.navigation.push('anotherPage')}
            />
        </View>
      );
}
function setMyEmail(value) {
    Setemail(value);
  }
  function getMyEmail() {
    return email;
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
  export default otherPage;