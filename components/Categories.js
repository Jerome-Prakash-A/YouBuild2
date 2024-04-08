




import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';


export const Categories = ({navigaton}) => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal:15,
            padding: 10,
            backgroundColor:'white'
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
        {/* CategoryCard */}
        <CategoryCard imgUrl={require('../assets/images/Categories/bricks.png')}
        
            title='Bricks'
            
        />
        <CategoryCard imgUrl={require('../assets/images/Categories/square-rods.png')}
            title='Steels'
        />
        <CategoryCard imgUrl={require('../assets/images/Categories/length-pipe.png')}
            title='Pipes'
        />
        <CategoryCard imgUrl={require('../assets/images/Categories/varnish.png')}
            title='Painiting'
        />
        <CategoryCard imgUrl={require('../assets/images/Categories/wires.png')}
            title='Wires'
        />
       
        
        
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({});