import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import LoginScreen from './LoginScreen';
import SignScreen from './SignScreen';

const Stack = createStackNavigator();

function Switch() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown:false
        }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignScreen" component={SignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Switch;
