import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import anotherPage from './components/anotherPage';
import login from './components/login';
import pokedex from './components/pokedex';
import cadis from './components/cadis';
import counter from './components/counter';
import otherPage from './components/otherPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainPage from './components/mainPage';
const Tab = createBottomTabNavigator();
const {Navigator,Screen} = createStackNavigator();



export default function App() {
  return (
    <> 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MainPage" component={mainPage}/>
        <Tab.Screen name="Login" component={login} />
        <Tab.Screen name='anotherPage' component={anotherPage}/>
        <Tab.Screen name='SignIn' component={otherPage}/>
        <Tab.Screen name='Pokedex' component={pokedex}/>
        <Tab.Screen name='counter' component={counter}/>
        <Tab.Screen name='cadis' component={cadis}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
