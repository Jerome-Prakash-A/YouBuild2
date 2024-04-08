import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {AntDesign, Feather, FontAwesome5, Ionicons} from '@expo/vector-icons';



const CategoriesTabItem = ({navigation}) => {
    const { styles } = useStyle();


    const [colorchange, setcolorChange] = useState('#E7E6E2');

    const onSelectItem = () => {
        setcolorChange('yellow')
    }

  return (
    <TouchableOpacity style={styles.item} onPress={onSelectItem}>
       
        <View style={ {
        flex:1,
        height: '100%',
        width: 1,
        backgroundColor: colorchange} } ></View>
        
        <View style={styles.texticon}>
            <AntDesign name='home' size={23} />
            <Text style={styles.itemItext}>Building</Text>
        </View>
        
    </TouchableOpacity>
  )
}

const useStyle = () => {
    
    

    const styles = StyleSheet.create({
    item:{
        backgroundColor:'#E7E6E2',
        paddingVertical:20,
        paddingHorizontal:4,
        alignItems:'center',
        flexDirection:'row'
        
    },
    itemItext:{
        fontSize:16
    },
   
    texticon:{
        flex:18,
        alignItems:'center'
    }
});
return { styles }
}


export default CategoriesTabItem