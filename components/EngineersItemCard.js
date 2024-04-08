import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EngineersItemCard = ({navigation, item}) => {

    
   const  GoToEngineerViewScreen = () => {
        navigation.navigate("EngineersStack",{screen :'EngineersViewScreen',params: {item} });

    }

  return (
    <TouchableOpacity style={styles.wholeitem} onPress={GoToEngineerViewScreen}>
        
        <Image style={styles.image} source={{uri: item.image}}  />
        <View style={styles.Details}>
            <Text style={styles.itemName}>{item.name}</Text>

            <View style={styles.company}>
                <Text style={styles.companyText}>{item.company}</Text>                
            </View>

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
            
            

            
            <Text style={styles.DetailedTest}>Experience : {item.experience}</Text>

            




        </View>

    </TouchableOpacity>
  )
}

export default EngineersItemCard

const styles = StyleSheet.create({
    wholeitem:{
        width: '100%',
        height: 170,
        flexDirection:'row',
        alignItems:'center',
        padding:12,
        borderBottomColor:'#C0BAB7',
        borderBottomWidth:1,
        

    },
    image:{
        height:100,
        width:100,
        borderRadius:60
    },
    Details:{
        height:'100%',
        width:'56%',
        padding:20,
        justifyContent:'space-around'
     
 

    },
    itemName:{
        fontSize:16,
        fontWeight:'450',
        paddingBottom:7
    },
    category:{
        fontSize:17,

    },
    company:{
        flexDirection:'row',
        alignItems:'center',

    },
    companyText:{
        fontSize:17,
        fontWeight:'bold',
        color:'darkblue',
        marginRight:10
    },
    itemPrize:{
        fontSize:17,
        fontWeight:'bold',
    },
    DetailedTest:{
        color:'grey'
    },
    starsView:{
        marginRight:81,
        flexDirection:'row',
        marginLeft:5
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