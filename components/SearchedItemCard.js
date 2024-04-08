import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign, } from '@expo/vector-icons';



const SearchedItemCard = ({navigation,item}) => {
    
    const GotoItemViewScreeen = () =>{
        navigation.navigate("ItemViewScreen",{item});
    }

  return (
    
    <TouchableOpacity style={styles.wholeitem} onPress={GotoItemViewScreeen}>
        
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
        <AntDesign name='hearto' color={'#C0BAB7'} size={21} style={styles.heartoIcon} />

    </TouchableOpacity>

   
  )
}

export default SearchedItemCard

const styles = StyleSheet.create({
    wholeitem:{
        width: '100%',
        height: 170,
        flexDirection:'row',
        alignItems:'center',
        padding:3,
        borderBottomColor:'#C0BAB7',
        borderBottomWidth:1,
        

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
      }
      
})