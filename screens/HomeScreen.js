import { StyleSheet,Image, Text, View, TextInput, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import {AntDesign, Feather, FontAwesome5,  Octicons ,Ionicons} from '@expo/vector-icons';
import { Categories } from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { DrawerActions } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';




export default function HomeScreen({navigation}) {
  
   
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,      
      // headerStyle:{
      //   backgroundColor:'green'
      // }    
    })
    
    // get async data
    try{
      AsyncStorage.getItem('UID')
      .then(value => {
        if(value!=null){
          console.log(value, 'userid - homeScreen');
        }else{
          console.log(value);
        }
      })
    }catch(error){
      console.log(error);
    }
   
    
  },[])

 const DrawerSCreenToggle = () =>{
  navigation.dispatch(DrawerActions.toggleDrawer())
 }


  
  return (
    <View style={styles.wholeScreen}>
      <StatusBar style="auto" />

      <View style={styles.adminsearchcontainer}>         
        
        {/* Search */}
        <View style={styles.searchConstainer}>
          < Octicons name='three-bars' size={22} onPress={ DrawerSCreenToggle} />

          <TouchableOpacity style={styles.searchInput} activeOpacity={.9} onPress={() => navigation.navigate('SearchStack')}>
            <FontAwesome5 name='search' size={18} style={{paddingLeft:9}} />            
              <Text style={styles.inputText}>Search Items Here</Text>

        
          </TouchableOpacity>        
        </View>
        
      </View>      
      

      {/* Body */}
      <ScrollView contentContainerStyle={{
        paddingBottom:100,
    
      }}>
        {/* Category */}
        <Categories  />
  
        {/* Featured */}
        <FeaturedRow
          id='1'
          title='Featured'
          description="Highly Demanded Materials Here."
          navigation={navigation}
        
          />
        
        <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description="Get products up to 50% discount"
          navigation={navigation}

          /> 
        
        <FeaturedRow
          id='3'
          title='One-Day Delivery'
          description="Get your product within 24 Hours."
          navigation={navigation}

          />
        
        <FeaturedRow
          id='1'
          title='Featured'
          description="Highly Demanded Materials Here."
          navigation={navigation}

          />
        <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description="Get products up to 50% discount"
          navigation={navigation}

          />

        <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description="Get products up to 50% discount"
          navigation={navigation}

          /> 
          <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description="Get products up to 50% discount"
          navigation={navigation}

          /> 
          <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description="Get products up to 50% discount"
          navigation={navigation}

          /> 

    
      </ScrollView>
      
      
    </View>
 
        
    
    
  )
}

const styles = StyleSheet.create({
 
    adminsearchcontainer:{
      backgroundColor:'#ffdb00',
      paddingTop:40
    },
    topProfile:{
      flexDirection: 'row',
      paddingBottom: 17,
      paddingLeft:12,
      paddingTop:10,
      alignItems: 'center',
    
    },
    adminLeftContainer:{
      flex:1,
      paddingStart:7
    },    
    searchConstainer:{
      flexDirection: 'row',
      
      marginHorizontal:15 ,
      alignItems:'center',
      paddingBottom:10,
      
      
     
    },
    searchInput:{
      backgroundColor:'white',
      flexDirection: 'row',
      flex:1,
      alignItems:'center',
      marginRight:2,
      borderRadius:4,
      height: 37,
      marginLeft:15
      
    },
    filterIcon:{
      
    },
    inputText:{
      paddingLeft:10,
      width:270,
      color:'grey'
    }
    
});
