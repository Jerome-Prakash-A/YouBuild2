import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import SearchStack from './SearchStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EngineersStack from './EngineersStack';
import DrawerScreen from '../screens/DrawerScreen';

const Stack = createNativeStackNavigator();

export default function EntryEtack({navigation}) {
  
  
  let UID = AsyncStorage.getItem('UID');

  console.log(UID,'entery stack')


  if (UID!= null){
    return (
      <Stack.Navigator 
          screenOptions={{ 
          headerShown: false       
          }}
      >
          
          <Stack.Screen name='DrawerScreen' component={DrawerScreen} />
          <Stack.Screen name='SearchStack' component={SearchStack} />
          <Stack.Screen name='EngineersStack' component={EngineersStack} />
          <Stack.Screen name='SignupScreen' component={SignupScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          

          

  
  
      </Stack.Navigator>
    )
  }else{
    return (
      <Stack.Navigator 
          screenOptions={{ 
          headerShown: false       
          }}
      >
          
          

          

          <Stack.Screen name='SignupScreen' component={SignupScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='DrawerScreen' component={DrawerScreen} />
          <Stack.Screen name='SearchStack' component={SearchStack} />
          <Stack.Screen name='EngineersStack' component={EngineersStack} />
  
  
      </Stack.Navigator>
    )

  }
  
  
}

