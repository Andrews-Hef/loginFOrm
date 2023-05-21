import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';



const otherPage =(props)=>{
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [email, Setemail] = useState('');
    useEffect(() => {

      console.log("FieldName :"+Username);
      console.log( "password :"+Password );
      console.log("email :"+ email);
    },[Username,Password,email]);
    return (
        <View style={styles.container}>
            
            <Text >nom </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(e) => setUsername(e)}
            />
            <Text> email </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(email) => Setemail(email)}
            />
            <Text> Password </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(e) => setPassword(e)}

            />
            <Button
            title='Sign In '
            onPress={()=> props.navigation.navigate('anotherPage')}
            />
        </View>
      );
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