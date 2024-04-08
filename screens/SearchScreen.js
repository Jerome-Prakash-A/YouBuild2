import {  FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // note this
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import {AntDesign, MaterialIcons,Feather,SimpleLineIcons, 
        FontAwesome,Fontisto, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


export default function SearchScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,      
          // headerStyle:{
          //   backgroundColor:'green'
          // }    
        });   

        try{
            AsyncStorage.getItem('UID')
            .then(value => {
              if(value!=null){
                console.log(value, 'userid search screen');
              }else{
                console.log(value);
              }
            })
          }catch(error){
            console.log(error);
          }
          
      },[])



      const [recentData, setrecentData] = useState([
        {text:'Bricks'},
        {text:'Cemetnt'},
        {text:'Sand'},
        {text:'Rods'}

      ]);

      const [EnteredItem ,setEnteredItem] = useState('')

      function verifyString (text){
        text = text.trimEnd();
        if('bricksBRICKSBricks'.includes(text)){
          setEnteredItem('bricks');
        }else if('cementsCementsCEMENTS'.includes(text)){
          setEnteredItem('cement');
        }else if('sandsSANDSSands'.includes(text)){
          setEnteredItem('sand');
        }else if('electricalsElectricalsELECTRICALS'.includes(text)){
          setEnteredItem('electricals');
        }else if('gravelsGRAVELSGravels'.includes(text)){
          setEnteredItem('gravel');
        }
      }
     

      const GotoSearchedItemScreen = () => {
        console.log(EnteredItem);
        if('         '.includes(EnteredItem)){
          alert("Please Enter Something!")
        }else{
          navigation.navigate('SearchedItemsScreen',{EnteredItem});
        }
      }

  return (
    <SafeAreaView>
        <StatusBar style="auto" />

        <View style={styles.searchContainer}>
            <AntDesign name='search1' size={24} />
            <TextInput autoFocus={true} onSubmitEditing={GotoSearchedItemScreen} 
                         placeholder='Search for Products, Brands' 
                         style={styles.inputFeild} 
                         onChangeText={(text) => verifyString(text)}
            />
            <SimpleLineIcons name='microphone' size={25} style={{paddingRight:7}} />
            <AntDesign name='camerao' size={25} />
        </View>
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={recentData}
            renderItem={({item, index}) => {
              return(
                <View  style={styles.recentDataWhole}>

                    <TouchableOpacity style={styles.recentDataField}>
                        <Entypo name='back-in-time' color={'#8E8C8B'} size={23}  style={{marginHorizontal:15}} />
                        <View style={styles.textView}>
                            <Text>
                                {item.text}
                            </Text>
                        </View>
                        
                        
                    </TouchableOpacity>
                    <View>
                        <Feather name='arrow-up-left' color={'#8E8C8B'} size={23} style={{marginRight:10}} />
                    </View>
                </View>


              );
            }}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    searchContainer:{
      
        marginTop:10,
        flexDirection:'row',
        paddingHorizontal:20,
        height:50,
        alignItems:'center',
        borderBottomColor:'#8E8C8B',
        borderBottomWidth:.8
    },
    inputFeild:{
        marginLeft:9,
        width:'73%',
        height: '80%',
        fontSize:16
    },
    recentDataWhole:{
        flexDirection:'row'
    },
    recentDataField:{
        flexDirection:'row',
        height:45,
        alignItems:'center',
      
    },
    textView:{
        width:"73%",
        marginRight:10,
        height:'70%',
        justifyContent:'center'
    }
})