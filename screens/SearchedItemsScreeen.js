import {addDoc, collection, doc, Firestore, getDocs, onSnapshot, QuerySnapshot, setDoc} from 'firebase/firestore';
import authentication from '../src/config';
import {auth, db} from '../src/config';
import { FlatList,ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import {AntDesign, MaterialIcons,Feather,SimpleLineIcons, FontAwesome5, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import SearchedItemCard from '../components/SearchedItemCard';
import { StatusBar } from 'expo-status-bar';



//time < timestamp.date(2023, 3, 7);

export default function SearchedItemsScreeen({navigation,}) {

  const route = useRoute();
  const [productsData, setproductsData]= useState([]);  
    
  let [isLoading,setIsLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,      
      // headerStyle:{
      //   backgroundColor:'green'
      // }    
    });
  },[])


  useEffect(() =>{

    getDocs(collection(db, 'products','data',route.params.EnteredItem))
    .then(docSnap => {
      var products = [];
      docSnap.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id})

          setIsLoading(false);
      setproductsData(products);
      
      });      
      
    });

   
    
   

    
  },[])

  

  return (
    <View style={styles.wholeScreen}>
      <StatusBar style="auto" />

      <View style={styles.adminsearchcontainer}>         
        
        <View style={{paddingLeft:20,paddingTop:7, flexDirection:'row', alignItems:'center'}}>
          <AntDesign name='arrowleft' size={25} style={{marginRight:18}} onPress={() => navigation.goBack()} />
          <Ionicons name='search' size={24} style={styles.searchIcon} onPress={() => navigation.navigate('SearchScreen')}  />
          <TouchableOpacity style={{width:'45%',marginTop:6}} onPress={() => navigation.navigate('SearchScreen')} >
            <Text style={{fontSize:16}}>{route.params.EnteredItem}</Text>
          </TouchableOpacity>  
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <SimpleLineIcons name='microphone' size={25} style={styles.Righticons} />
          <AntDesign name='camerao' size={25} style={styles.Righticons}  />          
          <AntDesign name='shoppingcart' size={24} style={styles.Righticons} />
        </View>
    
      </View>
      <ScrollView contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop: 10,
            height: 49
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
          <Text>Brands</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>Discounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topscrollcontenets}>
          <Text>Prize</Text>
        </TouchableOpacity>


      </ScrollView>
     
      <View style={styles.itemsView}>
        
        {(() => {
          // IsLoading???
          if(isLoading==false){
            return(
              <FlatList 
              showsVerticalScrollIndicator={false}
              data={productsData}
              renderItem={({item, index}) => {
                return(
                  <SearchedItemCard item={item} navigation={navigation} />
                  
                );
              }}

          />

            );
          }else{
            return(
              <ActivityIndicator color={'#ffdb00'}  size='large' />
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
  },
  Loading:{
    color:'yellow'
  }
 
})