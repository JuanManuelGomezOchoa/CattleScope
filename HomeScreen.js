import React from 'react';
import { FaHandPointDown } from 'react-icons/fa';
import { View, Text, Button, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{backgroundColor:'#79c168', width:'100%', height:'100%', alignItems:'center'}}>
      <StatusBar style='light'/>
      <Text>Da click en el boton de abajo para ver la informacion de tu ganado</Text>
      
      <Button
        title="Informacion de mi ganado"
        onPress={() => navigation.navigate('DETALLES')}
      />
    </View>
  );
}
