import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import {AntDesign, MaterialIcons,Feather,SimpleLineIcons, FontAwesome5, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function EngineersViewScreen({navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,      
      // headerStyle:{
      //   backgroundColor:'green'
      // }    
    });
  },[])

  

  const  route = useRoute();
  const { styles } = useStyle();

  const EngineerData = route.params.item;

  const  AfterBooking = () =>{
    alert('Engineer Booked!');
  }

  return (
    <View style={styles.WholeScreen}>
      <StatusBar style="auto" />

      <View style={styles.adminsearchcontainer}>         
        
        <View style={{paddingLeft:22,paddingTop:7}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Engineer Info</Text>
        </View>
        
    
      </View>

      <View style={styles.imageandname}>
          <View style={styles.imageContain}>
            <Image style={styles.image} source={{uri : EngineerData.image}} />

          </View>

          <View style={styles.headText}> 
            <Text style={{fontSize:15}}>Name:</Text>
            <Text style={{fontSize:25}}>{EngineerData.name}</Text>

          </View>
        </View>
      <ScrollView style={styles.scrollContent}>
 
        <View style={styles.engineerinfo}> 
        
          
          <Text style={styles.Detailhead}>Company:</Text>
          <Text style={styles.DetailInfo}>{EngineerData.company}</Text>
          <View style={styles.middleLines}></View>
          <Text style={styles.Detailhead}>Age:</Text>
          <Text style={styles.DetailInfo}>{EngineerData.age}</Text>
          <View style={styles.middleLines}></View>
          <Text style={styles.Detailhead}>native:</Text>
          <Text style={styles.DetailInfo}>{EngineerData.native}</Text>
          <View style={styles.middleLines}></View>
          <Text style={styles.Detailhead}>Experience:</Text>
          <Text style={styles.DetailInfo}>{EngineerData.experience}</Text>
          <View style={styles.middleLines}></View>
          <Text style={styles.Detailhead}>No.of Projects:</Text>
          <Text style={styles.DetailInfo}>{EngineerData.projects}</Text>
          <View style={styles.middleLines}></View>
          <Text style={styles.Detailhead}>Phone:</Text>
          <Text style={styles.DetailInfo}>+91 {EngineerData.phone}</Text>
          <View style={styles.middleLines}></View>
          <Text style={styles.Detailhead}>Email:</Text>
          <Text style={styles.DetailInfo}>{EngineerData.email}</Text>
          <View style={styles.middleLines}></View>

        </View>

      </ScrollView>


      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.Booknow} onPress={AfterBooking} >
          <Text style={styles.textBottombar}>Book Now</Text>
        </TouchableOpacity>
      </View>
        
    </View>
  )
}

const useStyle = () => {
  const dimensions = useWindowDimensions();
  const styles = StyleSheet.create({
    WholeScreen:{
      flex:1,
      backgroundColor:'white'
    },
    scrollContent:{
      backgroundColor:'white'
    },
    imageandname:{
      width:'100%',
      height: dimensions.height/5,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      backgroundColor:'#ffdb00',
      borderBottomRightRadius:80
    },
    image:{
      
      height:100,
      width:100,
      borderRadius:60
    },
    imageContain:{

    },
    headText:{
       marginLeft:10,
        justifyContent:'center'
    },
    engineerinfo:{
      backgroundColor:'white',
      height:dimensions.height/1.2,
      padding:20
      
    },
    bottomBar:{
      width:'100%',
      height:69,
      flexDirection:'row',
      alignItems:'center',
      borderTopWidth:0.2,
      paddingHorizontal:20,
      backgroundColor:'white'
      
    },
    add2cart:{
      flex:3,
      alignItems:'flex-start',
      backgroundColor:'white',
      paddingLeft:15
      
      
    },
    Booknow:{
      flex:2,
      alignItems:'center',
      backgroundColor:'#ffdb00',
      margin:4,
      borderTopLeftRadius:27,
      borderRadius:6


    },
    textBottombar:{
      paddingVertical:10,
      fontWeight:'700',
      fontSize:14,
      
      
    },
    EnginerText:{
      width:'100%',
      backgroundColor:'white',
      marginBottom:4,
      height:30,
      justifyContent:'center',
      paddingHorizontal:20
    },
    Detailhead:{
      fontSize: 20,
      fontWeight:'300',
      color:'#B9AD0E'

    },
    DetailInfo:{
      fontSize:21,
      fontWeight:'400',
      marginLeft:30,
      marginBottom:14
    },
    middleLines:{
      backgroundColor:'#B9AD0E',
      height:2,
      width:'90%',
      opacity:0.1, 
      marginBottom:8
    },
    adminsearchcontainer:{
      backgroundColor:'#ffdb00',
      paddingTop:40,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:10,
      alignItems:'center',
     
    },
    searchIcon:{
      marginRight: 9,
    
    },
    Righticons:{
      marginRight:10
    },

  })

  return { styles }
}
  