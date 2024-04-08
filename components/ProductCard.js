import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import {AntDesign, Entypo} from '@expo/vector-icons';

const ProductCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  items,
  long,
  lat,
  navigation

}) => {
  return (
    <TouchableOpacity style={styles.image} onPress={()=>{
      const EnteredItem = 'bricks';
      navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
    }}>
      <Image 
        source={imgUrl}
        style={{height:140, width:240, borderTopRightRadius:4,borderTopLeftRadius:23}}
        />
      
      
      <View style={styles.imageTextContent}>
        <Text style={styles.itemText}>{title}</Text>
        <View style={styles.ratingContent}>        
          <AntDesign name='star' color='green' style={{paddingRight:2}} size={15}/>
          <Text  style={styles.rating}>{rating}</Text>
          <Text  style={styles.genre}>{genre}</Text>
        </View>
        <View style={styles.locationContent}>
          <Entypo name='location' opacity={0.4}  size={12} style={{paddingBottom:2}} />
          <Text style={styles.locationText}>{address}</Text>
        </View>
      </View>
     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image:{
    backgroundColor:'white',
    shadowColor:'grey',
    paddingRight:9,
    paddingBottom:10,
  },
  itemText:{
    paddingBottom:8,
    fontSize:17
  },
  imageTextContent:{
    padding:7,
    
  },
  ratingContent:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:3
  },
  rating:{
    paddingRight:8,
    color:'green'
  },
  genre:{
    color:'grey'
  },
  locationContent:{
    flexDirection:'row',
    alignItems:'center'
  },
  locationText:{
    paddingLeft: 7,
    color: 'grey'

  }
})

export default ProductCard