import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {AntDesign, MaterialIcons,Feather, FontAwesome5, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';


const TopBar = ({ScreenName}) => {
  return (
    <View style={styles.adminsearchcontainer}>         
        
        <View style={{paddingLeft:22,paddingTop:7}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>{ScreenName}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Ionicons name='search' size={24} style={styles.searchIcon} />
            <AntDesign name='hearto' size={24} style={styles.heartoIcon} />
            <AntDesign name='shoppingcart' size={24} style={styles.shoppingcartIcon} />
        </View>
    
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
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
      shoppingcartIcon:{
        marginRight: 10,
        marginTop:6,
  
      },
})