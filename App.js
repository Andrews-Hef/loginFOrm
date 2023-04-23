import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import anotherPage from './components/anotherPage';
import login from './components/login';
import otherPage from './components/otherPage';
const {Navigator,Screen} = createStackNavigator();




export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator>
          <Screen name="Login" component={login} />
          <Screen name='anotherPage' component={anotherPage}/>
          <Screen name='SignIn' component={otherPage}/>
        </Navigator>
      </NavigationContainer>
    </>

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
