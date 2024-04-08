import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import EngineersViewScreen from '../screens/EngineersViewScreen';







const Stack = createNativeStackNavigator();

export default function EngineersStack({navigation}) {
  return (
    <Stack.Navigator >
      
        <Stack.Screen name='EngineersViewScreen' component={EngineersViewScreen} />

     


        

    </Stack.Navigator>
  )
}