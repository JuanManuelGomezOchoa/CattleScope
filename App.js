import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './Detail.Screen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="INICIO" component={HomeScreen} />
        <Stack.Screen name="DETALLES" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
