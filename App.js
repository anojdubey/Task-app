import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={()=>({
          headerTitle: '',
          headerRight: () => <Icon name="bars" size={30} color="black" />,
        })} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
