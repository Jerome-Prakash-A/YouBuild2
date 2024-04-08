import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {AntDesign, MaterialIcons,Feather, FontAwesome, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addDoc, collection, doc, Firestore, getDoc, getDocs, onSnapshot, QuerySnapshot, setDoc} from 'firebase/firestore';
import {auth, db} from '../src/config';
import CartItemCard from '../components/CartItemCard';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


export default function CartScreen({navigation}) {

  const[ UID, setUID ] = useState('');
  const [productCount, setproductCount]= useState([]);
  const [productsData, setproductsData]= useState([]);  
  let [isLoading,setIsLoading] = useState(true);


  const [test, setTest]= useState(''); 

  const[itemDeleted, setItemDeleted] = useState(false);



  useFocusEffect(useCallback(() => {          //call fuctions on each time on screen open
    // UserData();
    AsyncStorage.getItem('UID')
      .then(value => {

        if(value!=null){
          console.log(value, 'userid CART screen');

          getDocs(collection(db, 'users',value,'cart products'))
            .then(docSnap => {
              var products = [];
              docSnap.forEach((doc) => {
                  const data = { ...doc.data(), id: doc.id}
                  products.push(data)
                setproductCount(products);
              });     
            
              storeCartProductData(products);

            })
          }
         
        })
    
    
      },[storeCartProductData]))

  // useEffect(() =>{
    




   
  // },[])


  const storeCartProductData =(products) =>{

    var prodData =[];

    products.forEach((document) => {
        
        getDoc(doc(db, 'products','data',document.category,document.id))
        .then(val => {
          
          prodData.push({ ...val.data(), id: val.id})
          setproductsData(prodData);

        });
        

      });
  }   

  const GotoItemViewScreeen = () =>{
    setItemDeleted(true);
    navigation.navigate("SearchStack",{screen :'SearchScreeen'});
}
 
  


  return (
    <View style={styles.wholeScreen}>
      <StatusBar style="auto" />

      {/* Top bar */}
      <View style={styles.adminsearchcontainer}>         
        
        <View style={{paddingLeft:22,paddingTop:7}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>{'MY CART'}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Ionicons name='search' size={24} style={styles.searchIcon} onPress={GotoItemViewScreeen}/>
            
        </View>
    
      </View>

      <View style={styles.itemsView}>
        {(() => {
          if(productsData.length == 0){
            return(
              <View style={styles.NoproductS}>
                <Text style={{fontSize:17, marginBottom:12}}>There are no Cart Products!</Text>
                <TouchableOpacity style={styles.noProductBTN} onPress={GotoItemViewScreeen}>
                  <Text style={{fontSize:13,fontWeight:'500', color:'black'}}>Browse Products</Text>
                </TouchableOpacity>
              </View>
            )
          }else{
            return(
              <FlatList 
              showsVerticalScrollIndicator={false}
              data={productsData}
              renderItem={({item, index}) => {
                return(
                  <CartItemCard item={item} navigation={navigation} />
                  
                );
              }}

          />
            )
          }
        })()}
       
      </View>
      {(() => {
          if(productsData.length == 0){
            return(
              <View>
              </View>
            )
          }else{
            return(
              <View style={styles.bottomBar}>
                <View style={styles.add2cart}>
                  <View  style={{flexDirection:'row', alignItems:'center'}}> 
                    <FontAwesome name='rupee' size={19} />
                    <Text style={styles.pirze}> 10000 /-</Text>

                  </View>
                  <TouchableOpacity style={{}}>
                    <Text style={styles.prizeText}>View Prize Details</Text>

                  </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.buyNow}>
                  <Text style={styles.textBottombar}>Place Order</Text>
                </TouchableOpacity>
               </View>
            )
          }
        })()}
      

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
   marginRight:10,
   marginTop:6,
  },
  heartoIcon:{
    marginRight:10,
    marginTop:6,

  },
  itemsView:{
    height:'81%',
  },
  bottomBar:{
    width:'100%',
    height:69,
    flexDirection:'row',
    alignItems:'center',
    borderTopWidth:0.2,
    paddingBottom:16,
    backgroundColor:'white'
    
  },
  textBottombar:{
    paddingVertical:10,
    fontWeight:'700',
    fontSize:14,
    
    
  },
  pirze:{
    fontSize:18,
    fontWeight:'700'
  },
  prizeText:{
    paddingVertical:2,
    fontWeight:'500',
    fontSize:10,
    color:'blue'

  },

  add2cart:{
    flex:3,
    alignItems:'flex-start',
    backgroundColor:'white',
    paddingLeft:15
    
    
  },
  buyNow:{
    flex:2,
    alignItems:'center',
    backgroundColor:'#ffdb00',
    margin:4,
    borderRadius:10

  },
  NoproductS:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  noProductBTN:{
    backgroundColor:'#ffdb00',
    padding:13,
    borderRadius:15
  }
})