import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
//import Test from './components/name.js';
//import Logo from './components/image.js';
//import Favicon from "./assets/favicon.png";
import React, { useState, useEffect } from 'react';


const Counter =(props)=> {

  const [count, setCount] = useState(0);
  const [lastcount, setString ]= useState("string");

  return (    
    <View style={styles.container}>
      <Text>Another pages!</Text>
      <StatusBar style="auto" />
      <Button
        title ="clique"
        onPress={() => { setCount(count +1),setString("ta cliquer sur +1")} 
      }
      />
      
      <Button
        title ="ou clique ici"
        onPress={() => {setCount(count -1),setString("ta cliquer sur -1")}
      }
      />
      
      <Text>You clicked {count} times. {lastcount}</Text>
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

export default Counter;