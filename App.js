import * as React from 'react';

import { Button, View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Importe os componentes de Cabeçalho, Corpo e Rodapé

import Corpo from './Corpo';

import Rodapé from './Rodapé';



function HomeScreen({ navigation }) {

  return (

    <View style={{ flex: 1 }}>

      <View style={stylestop.container}>

      <View>

        <Text style={stylestop.title}>Atividade</Text>

      </View>

      <View style={stylestop.navigation}>

        <Button

          title="Wesley"

          onPress={() => navigation.navigate('Wesley')} />

        <Button

          title="Ollyver"

          onPress={() => navigation.navigate('Ollyver')} />

      </View>

    </View>

    </View>

  );

}



function WesleyScreen({ navigation }) {

  return (

    <View style={stylesW.container}>

      <Text style={stylesW.title}>Fazer o L</Text>
      <Text style={stylesW.story}>Ele é um amigo de confiança pq eu confio nele</Text>

    </View>

  );

}



function OllyverScreen({ navigation }) {

    return (

        <View style={stylesO.container}>

        <Text style={stylesO.title}>Fingir de morto</Text>
        <Text style={stylesW.story}>Ele é um amigo de confiança pq eu confio nele também</Text>

      </View>

    );

  }



const Stack = createNativeStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Wesley" component={WesleyScreen} />

        <Stack.Screen name="Ollyver" component={OllyverScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



const stylestop = StyleSheet.create({

    container: {

      backgroundColor: 'black',

      padding: 20,

      flexDirection: 'column', // Alterado de 'row' para 'column'

      justifyContent: 'flex-start', // Alterado de 'space-between' para 'flex-start'

      position: 'absolute',

      alignItems: 'center',

      top: 10,

      left: 0,

      right: 0,

    },

    

    title: {

      color: 'white',

      fontSize: 18,

      fontWeight: 'bold',

      marginBottom: 5,

    },

    

    navigation: {

      flexDirection: 'row',

      marginTop: 10,

      fontSize: 100,

      gap: 10,

    },

  });



  const stylesW = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

      paddingHorizontal: 16,

    },

    title: {

      fontSize: 24,

      fontWeight: 'bold',

      marginBottom: 16,

    },

    story: {

      fontSize: 16,

      textAlign: 'center',

      lineHeight: 24,

    },

  });



  const stylesO = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

      paddingHorizontal: 16,

    },

    title: {

      fontSize: 24,

      fontWeight: 'bold',

      marginBottom: 16,

    },

    story: {

      fontSize: 16,

      textAlign: 'center',

      lineHeight: 24,

    },

  });



  

export default App;
