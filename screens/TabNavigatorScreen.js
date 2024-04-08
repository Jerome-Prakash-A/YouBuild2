import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  {MaterialIcons,MaterialCommunityIcons,Ionicons, FontAwesome} from 'react-native-vector-icons';
import CartScreen from './CartScreen';
import AccountScreen from './AccountScreen';
import CategoriesScreen from './CategoriesScreen';
import HomeScreen from './HomeScreen';
import EngineersScreen from './EngineersScreen';





export default function TabNavigatorScreen({navigation}) {
    const Tab = createBottomTabNavigator();

  return ( 

      <Tab.Navigator
       
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,   
          tabBarStyle: {
            backgroundColor:'#ffdb00',         
            shadowColor:'#171717',
            height:53,
            // borderTopRightRadius:19,
            // borderTopLeftRadius:20,
            elevation:19,
           
            
            
          },       
          
          tabBarshowLabel:false,
          tabBarHideOnKeyboard: true,

          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'HomeScreen'){
              iconName= focused ? "ios-home-sharp" : "md-home-outline";
              return <Ionicons name={iconName} size={26} color={'black'} />
            }else if(route.name === 'CategoriesScreen'){
              iconName= focused ? "view-dashboard" : "view-dashboard-outline";
              return <MaterialCommunityIcons name={iconName} size={26} color={'black'} />
            }else if(route.name === 'EngineersScreen'){
                iconName= focused ? "building" : "building-o";  
                return <FontAwesome name={iconName} size={26} color={'black'} />
            }else if(route.name === 'AccountScreen'){
                iconName= focused ? "account-circle" : "account-circle-outline";
                return <MaterialCommunityIcons name={iconName} size={26} color={'black'} />
            }else if(route.name === 'CartScreen'){
                iconName= focused ? "md-cart" : "md-cart-outline";
                return <Ionicons name={iconName} size={26} color={'black'} />
              }
            
          },
        
        })}
      >
        <Tab.Screen name='HomeScreen' component={HomeScreen}/>     
        <Tab.Screen name='CategoriesScreen'component={CategoriesScreen} /> 
        <Tab.Screen name='EngineersScreen' component={EngineersScreen}/>     
        <Tab.Screen name='AccountScreen' component={AccountScreen}/>       
        <Tab.Screen name='CartScreen' component={CartScreen}/>
        


        
        


      </Tab.Navigator>
     
    
 
  )
}

