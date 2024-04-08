import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign, FontAwesome5, Feather  } from '@expo/vector-icons';
import {deleteDoc, collection, doc,  setDoc} from 'firebase/firestore';
import {auth, db} from '../src/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const CartItemCard = ({navigation,item}) => {

    

    const GotoItemViewScreeen = () =>{
        navigation.navigate("SearchStack",{screen :'ItemViewScreen',params:{item}});
    }

    const deleteCartItem = () =>{
        
        AsyncStorage.getItem('UID')
            .then(value => {
                if(value!=null){
                    deleteDoc(doc(db,'users', value ,'cart products', item.id))
                    
                    .then(() => {
                        alert('Item Removesd successfully!');
                        
                    }).catch((error) => {
                        console.log(error);
                    })

                }})
      }
  


  return (
    <View style={styles.wholeConten}>
        <TouchableOpacity style={styles.ProductContent} onPress={GotoItemViewScreeen}>
        
            <Image style={styles.image} source={{uri: item.image1}}  />
            <View style={styles.Details}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.starsView}>
                    <Stars
                        default={parseInt(item.ratings)}
                        count={5}
                        half={true}
                        disabled={true}
                        fullStar={<Icon name={'star'} size={20} style={[styles.myStarStyle]}/>}
                        emptyStar={<Icon name={'star-outline'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                        halfStar={<Icon name={'star-half'} size={20} style={[styles.myStarStyle]}/>}
                    />
                    <Text style={styles.itemRating}>({item.ratings})</Text>

                </View>
                
                

                <View style={styles.oferandprize}>
                    <Text style={styles.itemOffer}>{item.offer}% off</Text>
                    <Text style={styles.itemPrize}>Rs.{item.prize}</Text>
                </View>
                
                <Text style={styles.itemfreedelivery}>Free Delivery</Text>
                <Text style={styles.itemfreedelivery}>Get Within 24 Hours</Text>

                



            </View>
            

        </TouchableOpacity>
        <View style={styles.bottomButtons}>
            <TouchableOpacity style={styles.buttons}>
                <FontAwesome5 name='save' size={20} color={'grey'} />
                <Text style={{marginLeft:7}}>Save for Later</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={deleteCartItem}>
                <AntDesign name='delete' size={20}  color={'grey'}  />
                <Text style={{marginLeft:7}}>Remove</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}>
                < Feather  name='shopping-bag' size={20}  color={'grey'} />
                <Text style={{marginLeft:7}}>Buy Now</Text>
            </TouchableOpacity>
        </View>
        <AntDesign name='hearto' color={'#C0BAB7'} size={21} style={styles.heartoIcon} />

    </View>
    

   
  )
}

export default CartItemCard

const styles = StyleSheet.create({
    wholeConten:{
        
        marginBottom:10

    },
    ProductContent:{
        width: '100%',
        height: 170,
        flexDirection:'row',
        alignItems:'center',
        padding:3,
        
        

    },
    image:{
        height:110,
        width:110,
    },
    Details:{
        height:'100%',
        width:'56%',
        padding:20,
     
 

    },
    itemName:{
        fontSize:16,
        fontWeight:'450',
        paddingBottom:7
    },
    category:{
        fontSize:17,

    },
    oferandprize:{
        flexDirection:'row',
        alignItems:'center',

    },
    itemOffer:{
        fontSize:17,
        fontWeight:'bold',
        color:'green',
        marginRight:10
    },
    itemPrize:{
        fontSize:17,
        fontWeight:'bold',
    },
    itemfreedelivery:{
        color:'grey'
    },
    starsView:{
        marginRight:81,
        flexDirection:'row'
      },
    itemRating:{
        color:'grey',
        marginLeft:10
    },
    myStarStyle: {
        color: 'green',
        backgroundColor: 'transparent',

        
      },
      myEmptyStarStyle: {
        color: '#DCD7D5',
      },
      heartoIcon:{
        position:'absolute',
        left:'90%',
        bottom:'80%'
      },
      bottomButtons:{
        flexDirection:'row',
        justifyContent:"center",
       
      },
      buttons:{
        flexDirection:'row',
         borderWidth:.2,
        
         padding:8
      }
      
})