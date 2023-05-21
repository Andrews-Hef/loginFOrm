import { StyleSheet,Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

const Test=(name)=>{

 return(
    <View style={StyleSheet.container}>
    <Text>{name}</Text>
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

  export default Test;