import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const CategoriesItems = ({item}) => {

    
  return (
    
        <View style={{
            flexDirection:'column',
            height:230,
            justifyContent:'center',
            alignItems:'center',
            paddingTop:5,
            marginBottom:12,
            paddingBottom:9,
            backgroundColor: item.select == true ? 'white' : '#E7E6E2',
            
            }}>
            <View style={{flexDirection:'row', paddingTop:3, alignItems:'center'}}>
                <Text style={{flex:1, marginLeft:7, color:'grey'}}>{item.text}</Text>
               
                <View style={{backgroundColor:'#D2D2D2',marginTop:5, height:2,flex: item.text.length >= 6 ? 3 : 4}}></View>
            </View>

            <View style={styles.TopRow}>
                
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Image source={item.materials.image1.source} style={styles.rowFirstimage} />
                    <Text style={styles.itemTextTop}>{item.materials.image1.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Image source={item.materials.image2.source} style={{height:70, width:70 ,marginRight:20}} />
                    <Text style={styles.itemTextTop}>{item.materials.image2.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Image source={item.materials.image3.source} style={{height:70, width:70 ,marginRight:20}} />
                    <Text style={styles.itemTextTop}>{item.materials.image3.text}</Text>
                </TouchableOpacity>
            

            </View>
            <View style={styles.BottomRow}>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Image source={item.materials.image4.source} style={styles.rowFirstimage} />
                    <Text style={styles.itemTextDown}>{item.materials.image4.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <Image source={item.materials.image5.source} style={{height:70, width:70 }} />
                    <Text style={styles.itemTextDown}>{item.materials.image5.text}</Text>
                </TouchableOpacity>

            </View>
            
        </View>
   
  )
}

const styles = StyleSheet.create({
    wholeContainer:{
        flexDirection:'column',
        height:180,
        justifyContent:'center',
        alignItems:'center'
    },
    TopRow:{
        flexDirection:'row',
        margin:7,
        marginLeft:20,
    },
    BottomRow:
        {flexDirection:'row',
        margin:7,
        justifyContent:'center'
    },
    rowFirstimage:{
        height:70,
        width:70,
        marginRight:20,
        marginLeft:5,
    
    },
    itemTextDown:{
        fontSize:11
    },
    itemTextTop:{
        fontSize:11,
        paddingRight:17
    }
})

export default CategoriesItems