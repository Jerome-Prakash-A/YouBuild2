import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({imgUrl, title, }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  style={styles.image}  >
        <Image source={imgUrl} 
        style={{width:90, height:90, resizeMode : 'stretch', borderRadius: 7}}/>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        marginHorizontal: 4,
        position: 'relative',
        shadowColor:'#171717',
        elevation:40,
        backgroundColor:'#EEEAE9',
        margin:3
       
    },
    text:{
        position: 'absolute',
        left:9,
        top: 75,
        color: 'black',
        fontWeight:'bold',
        opacity: .9
        
    }
});

export default CategoryCard