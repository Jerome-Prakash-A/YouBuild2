import {addDoc, collection, doc, Firestore, getDocs, onSnapshot, QuerySnapshot, setDoc} from 'firebase/firestore';
import {auth, db} from '../src/config';
import { FlatList, ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import {AntDesign, MaterialIcons,Feather,SimpleLineIcons, FontAwesome5, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import EngineersItemCard from '../components/EngineersItemCard';
import { StatusBar } from 'expo-status-bar';



export default function EngineersScreen({navigation}) {

  const [engineersData,setEngineersData] = useState([]);
  let [isLoading,setIsLoading] = useState(true);


 

  useEffect(() =>{

    getDocs(collection(db, 'engineers'))
    .then(docSnap => {
      var data = [];
      docSnap.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id})

          setIsLoading(false);
      setEngineersData(data);
      
      });      
      
    });
  },[])
  console.log(engineersData);


  return (

    <View style={styles.wholeScreen}>
      <StatusBar style="auto" />

      <View style={styles.adminsearchcontainer}>         
        
        <View style={{paddingLeft:22,paddingTop:7}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Engineers For You</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Ionicons name='search' size={24} style={styles.searchIcon} />
            
        </View>
    
      </View>
      <ScrollView contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop: 10,
            height: 49,
            backgroundColor:'transparent'
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text style={{fontSize:13}}>Sort By</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>  Filter  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>Compose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>Prize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>Age</Text>
        </TouchableOpacity>


      </ScrollView>
     
      <View style={styles.itemsView}>
        {(() => {
          if(isLoading==false){
            return(
            <FlatList 
              showsVerticalScrollIndicator={false}
              data={engineersData}
              renderItem={({item, index}) => {
                return(
                  <EngineersItemCard item={item} navigation={navigation} />
                  
                );
              }}

          />
            );
          }else{
            return(
              <ActivityIndicator color={'#ffdb00'} size='large' />
            )
          }
        })()}
        

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  wholeScreen:{
    flex:1
  },
  adminsearchcontainer:{
    backgroundColor:'#ffdb00',
    paddingTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:10,
    alignItems:'center',
    borderBottomColor:'black',
    borderBottomWidth:.4
  },
  searchIcon:{
    marginRight: 9,
  
  },
  Righticons:{
    marginRight:10
  },
  topscrollcontenets:{
    backgroundColor:'transparent',
    borderColor:'black',
    borderWidth:1,
    borderRadius:20,
    padding:9,
    marginRight:10,
    borderColor:'#C0BA,B7'
  },
  itemsView:{
    height:'81%',
    justifyContent:'center'
  }
})