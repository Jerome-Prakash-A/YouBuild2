import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react';
import {AntDesign, Octicons,Feather, FontAwesome5, Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import CategoriesItems from '../components/CategoriesItems';
import TopBar from '../components/TopBar';
import { StatusBar } from 'expo-status-bar';


export default function CategoriesScreen({navigation}) {
  const { styles } = useStyle();

  const ScreenName = 'CATEGORIES';

  var EnteredItem = '';

  const updateData = (data) =>{
    console.log(data);
    EnteredItem = data;
   
    
    GotoItemViewScreeen(EnteredItem);
    

      
    
    }

  const GotoItemViewScreeen = (EnteredItem) =>{
    console.log(EnteredItem, 'data');
    

  }

  
   
  return (
    <View style={styles.wholeScreen}>
      <StatusBar style="auto" />


       {/*Top Bar  */}
       <TopBar ScreenName={ScreenName} />
       <ScrollView
        showVertivalScrollIndicator={false}
       >
          <View style={{flexDirection:'column', flex: 1}}>
                    
            <View style={styles.itemRow}>

              <View style={styles.container}>

                <TouchableOpacity style={styles.round}  onPress={()=>{
                  const EnteredItem = 'bricks';
                  navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
                }}>
                        <Image source={require('../assets/images/Categories/bricks.png')} style={styles.image} />
                        
                </TouchableOpacity>
                <Text style={styles.text}>Bricks</Text>
              </View>
              


              <View style={styles.container}>
                <TouchableOpacity style={styles.round}  onPress={()=>{
                  const EnteredItem = 'cement';
                  navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
                }}>
                        <Image source={require('../assets/images/Categories/cement.png')} style={styles.image} />
                        
                </TouchableOpacity>
                <Text style={styles.text}>Cement</Text>
              </View>


              <View style={styles.container}>
                <TouchableOpacity style={styles.round}  onPress={()=>{
                  const EnteredItem = 'sand';
                  navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
                }}>
                        <Image source={require('../assets/images/Categories/sand.png')} style={styles.image} />
                        
                </TouchableOpacity>
                <Text style={styles.text}>Sand</Text>
              </View>

            </View>

            <View style={styles.itemRow}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.round}  onPress={()=>{
                  const EnteredItem = 'gravel';
                  navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
                }}>
                        <Image source={require('../assets/images/Categories/gravel.png')} style={styles.image} />
                        
                </TouchableOpacity>
                <Text style={styles.text}>Steels</Text>
              </View>

              <View style={styles.container}>
                <TouchableOpacity style={styles.round}  onPress={()=>{
                  const EnteredItem = 'paint-box';
                  navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
                }}>
                        <Image source={require('../assets/images/Categories/paint-box.png')} style={styles.image} />
                        
                </TouchableOpacity>
                <Text style={styles.text}>Paints</Text>
              </View>

              <View style={styles.container}>
                <TouchableOpacity style={styles.round}  onPress={()=>{
                  const EnteredItem = 'tiles';
                  navigation.navigate("SearchStack",{screen :'SearchedItemsScreen',params:{EnteredItem}});
                }}>
                        <Image source={require('../assets/images/Categories/tiles.png')} style={styles.image} />
                        
                </TouchableOpacity>
                <Text style={styles.text}>Tiles</Text>
              </View>

            </View>
            
            

          </View>
       </ScrollView>


    </View>
    
    
    
  )
}

const useStyle = () => {
  const dimensions = useWindowDimensions();
  

  const styles = StyleSheet.create({
    wholeScreen:{
      flex:1,

    },
    container:{
      
      alignItems:'center'
    },
    round:{
     
      
      
    },
    image:{
      height:dimensions.height/10,
      width:dimensions.width/4.5,
      marginRight:20,
      marginLeft:5,
   
  
    },
  
  text:{
      fontSize:14,  
      color: 'black',
      
  
      
  },
  itemRow:{
    flexDirection:'row',
    width:'100%',
    marginTop: 20,
    justifyContent:'space-evenly'
  }
    
  })
  return { styles }
}
  