import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import ItemViewScreen from '../screens/ItemViewScreen';
import SearchedItemsScreeen from '../screens/SearchedItemsScreeen';
import SearchScreen from '../screens/SearchScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BuyNowScreen from '../screens/BuyNowScreen';
import PaymentProcessScreen from '../screens/PaymentProcessScreen';





const Stack = createNativeStackNavigator();

export default function SearchStack({navigation}) {
  return (
    <Stack.Navigator >
      
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
        <Stack.Screen name='SearchedItemsScreen' component={SearchedItemsScreeen} />
        <Stack.Screen name='ItemViewScreen' component={ItemViewScreen} />
        <Stack.Screen name='BuyNowScreen' component={BuyNowScreen} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
        <Stack.Screen name='PaymentProcessScreen' component={PaymentProcessScreen} />


        

    </Stack.Navigator>
  )
}