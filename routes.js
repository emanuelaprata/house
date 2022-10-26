// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import CalculadoraDizimo from './src/pages/Dizimo';
import CalculadoraPrimicias from './src/pages/Primicias';
import AoVivo from './src/pages/Ao vivo';
import Agenda from './src/pages/Agenda';
import Participe from './src/pages/Participe';
import Biblia from './src/pages/Biblia';
import Projetos from './src/pages/Projetos';
import Capitulo from './src/pages/Capitulos/Capitulos';
import Versiculo from './src/pages/Versiculo';
import Informacoes from './src/pages/informações';


function Rotas() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CalculadoraDizimo" component={CalculadoraDizimo} />
        <Stack.Screen name="CalculadoraPrimicias" component={CalculadoraPrimicias} />
        <Stack.Screen name="AoVivo" component={AoVivo} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Participe" component={Participe} />
        <Stack.Screen name="Biblia" component={Biblia} />
        <Stack.Screen name="Projetos" component={Projetos} />
        <Stack.Screen name="Capitulo" component={Capitulo} />
        <Stack.Screen name="Versiculo" component={Versiculo} />
        <Stack.Screen name="Informacoes" component={Informacoes} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;