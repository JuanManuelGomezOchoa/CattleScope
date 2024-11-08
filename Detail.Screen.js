import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
//import MapaCalor from "./"

const Arreglo_vacas = [
  {
    Nombre:"Juan",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMains",
    Distancia_Recorrida:"3.87Km" 
  },
  {
    Nombre:"Jonny",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMain",
    Distancia_Recorrida:"4.89Km" 
  },
  {
    Nombre:"Otis",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMain",
    Distancia_Recorrida:"6.11Km" 
  },
  {
    Nombre:"Blanca",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMain",
    Distancia_Recorrida:"3.11Km" 
  },
  {
    Nombre:"Ermenegilda",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMain",
    Distancia_Recorrida:"3.01Km" 
  },
  {
    Nombre:"Esthela",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMain",
    Distancia_Recorrida:"6.98Km" 
  },
  {
    Nombre:"Carmela",
    Ratreo:"https://th.bing.com/th/id/OIP.Qnc4hpg6vW1qsZtOUCWgUQHaEW?w=900&h=529&rs=1&pid=ImgDetMain",
    Distancia_Recorrida:"7.99Km" 
  }
]

export default function DetailsScreen() {
  return (
    <ScrollView>
      {
        Arreglo_vacas.map((datos, index)=>(
          <View key={index} style={{borderColor:'black', backgroundColor:'#79c168', margin:'5%', borderRadius:10}}>
            <Text style={{textAlign:'center', alignContent:'center'}}>Nombre del animal: {datos.Nombre}</Text>
            <Image
        style={{width:'50px', height:'50px'}}
        source={{uri:datos.Ratreo}}
      />
      <Text style={{textAlign:'center', alignContent:'center',marginTop:6 }}>Distancia recorrida el dia de hoy: {datos.Distancia_Recorrida}</Text>
          </View>
        ))
      }

    </ScrollView>
  );
}
