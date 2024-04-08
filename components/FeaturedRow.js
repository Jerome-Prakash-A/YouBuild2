import {StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import {FontAwesome, Feather, FontAwesome5, Ionicons} from '@expo/vector-icons';
import { GlobalStyles } from '../styles/GlobalStyles';
import ProductCard from './ProductCard';

const FeaturedRow = ({title, description, navigation}) => {
  return (
    <View>
        <View style={styles.FeatureTextArrow}>
            <Text style={GlobalStyles.fText}>{title}</Text>
            <FontAwesome name='long-arrow-right' style={{paddingRight:4}} color='green' size={20}/>
        </View>

        <Text style={styles.descriptionText}>{description}</Text>
        
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal:15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            >

            {/* ProductCards */}
            <ProductCard
                id={1}
                imgUrl={require('../assets/images/Categories/windows.png')}
                title='Doors'
                rating={2}
                genre='Construction'
                address='5/632, CyrinigO, Madurai '
                short_description='Required to build walls'
                items={1}
                long={8}
                lat={23}     
                navigation={navigation}
    
            />
            <ProductCard
                id={1}
                imgUrl={require('../assets/images/Categories/cement.png')}
                title='Cement'
                rating={2}
                genre='construction'
                address='5/632, CyrinigO, Madurai '
                short_description='Required to build walls'
                items={1}
                long={8}
                lat={23}       
                navigation={navigation}
  
            />
            <ProductCard
                id={1}
                imgUrl={require('../assets/images/Categories/sink.png')}
                title='Cement'
                rating={2}
                genre='construction'
                address='5/632, CyrinigO, Madurai '
                short_description='Required to build walls'
                items={1}
                long={8}
                lat={23}       
                navigation={navigation}
  
            />
            <ProductCard
                id={1}
                imgUrl={require('../assets/images/Categories/sheets.png')}
                title='Cement'
                rating={2}
                genre='construction'
                address='5/632, CyrinigO, Madurai '
                short_description='Required to build walls'
                items={1}
                long={8}
                lat={23}       
                navigation={navigation}
  
            />
            <ProductCard
                id={1}
                imgUrl={require('../assets/images/Categories/rough-tiles.png')}
                title='Cement'
                rating={2}
                genre='construction'
                address='5/632, CyrinigO, Madurai '
                short_description='Required to build walls'
                items={1}
                long={8}
                lat={23}       
                navigation={navigation}
  
            />

        </ScrollView>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    FeatureTextArrow:{
        flexDirection: 'row',
        marginTop: 4,
        marginLeft: 14,
        marginRight:4,
        justifyContent: 'space-between'
    },
    descriptionText:{
        fontSize: 13,
        paddingLeft: 14,
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default FeaturedRow