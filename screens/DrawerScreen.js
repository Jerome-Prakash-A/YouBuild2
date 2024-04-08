import 'react-native-gesture-handler';
import TabNavigatorScreen from './TabNavigatorScreen';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';


const Drawer = createDrawerNavigator();

export default function DrawerScreen({navigation}) {
  return (
    <Drawer.Navigator
        screenOptions={{ 
        headerShown: false       
        }}
        drawerContent={() => <CustomDrawerContent navigation={navigation} /> }
        >
      <Drawer.Screen name='TabNavigatorScreen' component={TabNavigatorScreen} />
    </Drawer.Navigator>
  );
}