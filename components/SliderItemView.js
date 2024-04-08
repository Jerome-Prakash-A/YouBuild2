import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'


const SliderItemView = ({item}) => {
  const { styles } = useStyle();

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: item}} />        
    </View>
   
  )
}

export default SliderItemView

const styles = StyleSheet.create({
  
   
})

const useStyle = () => {
  const dimensions = useWindowDimensions();
  

  const styles = StyleSheet.create({
    container:{
  
      width:dimensions.width
    },
      image:{
          height: 370,       
      },
    
    
  })
  return { styles }
}
  