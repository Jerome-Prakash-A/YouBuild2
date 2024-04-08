import { StyleSheet, Text, ActivityIndicator, TouchableOpacity, View, useWindowDimensions, Image, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {AntDesign, MaterialIcons, EvilIcons,SimpleLineIcons, FontAwesome, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import { StatusBar } from 'expo-status-bar';



export default function BuyNowScreen({navigation}) {

  const route = useRoute();
  const { styles } = useStyle();

  const ItemData = route.params.itemData;
  const countries = [1,2,3,4,5,6,7,8,9,10];
  const [Quantity, setQuantity] = useState(1);
  const [packPirze, setPackPrize] = useState(20);
  const [totalAmount, setTotalAmount] = useState( route.params.itemData.prize);

  const[isLoading,setIsLoading] = useState(false);



  const [Load, setLoad] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,     
      title: 'Order Summary', 
      headerStyle:{
        backgroundColor:'#ffdb00'
      },
      
    })

    
   
  },[])

 const GotoPaymentScreen = () =>{
  setIsLoading(true);
  setTimeout(() => {
    navigation.navigate('PaymentScreen',{totalAmount,Quantity,packPirze, ItemData});
    setIsLoading(false);

  },600)
 }
   
   
 
  

  return (
    <View  style={styles.WholeScreen}>
      <StatusBar style="auto" />

       <ScrollView style={styles.ScrollContent}>

        <View  style={styles.topLevel}>

          <View style={styles.containerRound}>
            <EvilIcons name='check' color={'#ffdb00'} size={40}/>
            <Text style={{fontSize:12}}>Details</Text>

          </View>
          

          <View style={styles.lineLevel}></View>

          <View style={styles.containerRound}>
            <View style={styles.round}>
              <Text style={{fontSize:12}}>2</Text>
            </View>
            <Text style={{fontSize:13, fontWeight:'bold'}}>Summary</Text>

          </View>

          <View style={[styles.lineLevel,{backgroundColor:'lightgrey'}]}></View>


          <View style={styles.containerRound}>
            <View style={[styles.round,{ backgroundColor: '#EFF4F0'}]}>
              <Text style={{fontSize:12}}>3</Text>
            </View>
            <Text style={{fontSize:12}}>Payment</Text>

          </View>

        </View>



        <TouchableOpacity style={styles.RelatedConstainer}>
          <View style={{justifyContent:'flex-start'}}>
            <Text style={{fontSize:17,fontWeight: '500' ,paddingVertical:5}}>Frequently Brought</Text>
          </View>
          <View style={styles.additionalItems}>
            <Image style={styles.image}  source={{uri: route.params.ProductsData[0].image1}} />
            <Entypo name='plus' size={20} />
            <Image style={styles.image}  source={{uri: route.params.ProductsData[1].image1}} />
            <Entypo name='plus' size={20} /> 
            <Image style={styles.image}  source={{uri: route.params.itemData.image1}} />

          </View>
          <View style={styles.imageText}>
            <Text style={{fontSize:17, paddingVertical:5}}>Buy All Three: Rs. 1500</Text>
          </View>
          

        </TouchableOpacity>

        <View style={styles.AdressConatiner}>
          <View style={styles.delverandchange}>
            <Text style={{fontSize:18,fontWeight: '500', marginLeft:15}}>Deliver to:</Text>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={{color:'blue' ,fontWeight: '500'}}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.username}>
            <Text style={{color:'black',fontSize:16 ,fontWeight: '500'}}>{route.params.userData.username}</Text>
            <View style={styles.homeIcon}>
              <Text style={{fontSize:10}}>Home</Text>
            </View>
            
          </View>

          <View style={styles.address}>
            <Text style={{fontSize:15}}>{route.params.userData.address1}</Text>
            <Text style={{fontSize:15, marginTop:5}}>{route.params.userData.phone1}</Text>

          </View>

        </View>

        <View style={styles.wholeitem} >
            <View style={styles.imageamdQnt}>
              <Image style={styles.image} source={{uri: route.params.itemData.image1}}  />
              <SelectDropdown
                defaultButtonText='Qty 1'
                buttonTextStyle={{fontSize:14, fontWeight:'bold'}}
                buttonStyle={styles.quantitybtn}
                data={countries}
                onSelect={(selectedItem, index) => {
                  setQuantity(selectedItem);
                }}
              />

            </View>
            
            <View style={styles.Details}>
                <Text style={styles.itemName}>{route.params.itemData.name}</Text>
                <View style={styles.starsView}>
                    <Stars
                        default={parseInt(route.params.itemData.ratings)}
                        count={5}
                        half={true}
                        disabled={true}
                        fullStar={<Icon name={'star'} size={20} style={[styles.myStarStyle]}/>}
                        emptyStar={<Icon name={'star-outline'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                        halfStar={<Icon name={'star-half'} size={20} style={[styles.myStarStyle]}/>}
                    />
                    <Text style={styles.itemRating}>({route.params.itemData.ratings})</Text>

                </View>
                
                

                <View style={styles.oferandprize}>
                    <Text style={styles.itemOffer}>{route.params.itemData.offer}% off</Text>
                    <Text style={styles.itemPrize}>Rs.{route.params.itemData.prize}</Text>
                </View>
                
                <Text style={styles.itemfreedelivery}>Free Delivery</Text>
                <Text style={styles.itemfreedelivery}>Get Within 24 Hours</Text>



            </View>

        </View>


        <View style={styles.PrizeDetails}>
          <View>
            <Text style={{fontSize:17, fontWeight:'bold', marginBottom:17}}>Price Details:</Text>
          </View>
          
          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Price items</Text>
            <Text style={styles.valueText}>Rs. { route.params.itemData.prize} /- </Text>
          </View>

          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Quantity</Text>
            <Text style={styles.valueText}>  x { Quantity}  </Text>
          </View>

          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Offer</Text>
            <Text style={styles.valueText}>Rs. { route.params.itemData.offer}  per/ {route.params.itemData.measure}</Text>
          </View>

          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Delivery Charges</Text>
            <Text style={styles.valueText}>Free Delivery </Text>
          </View>
          
          <View style={styles.textandvalue}>
            <Text style={styles.detailsText}>Secured Packaging</Text>
            <Text style={styles.valueText}>Rs. {packPirze} /- </Text>
          </View>

          <View style={[styles.textandvalue,{borderWidth:0.2,paddingHorizontal:12}]}>
            <Text style={{fontSize:17, fontWeight:'bold', marginVertical:17}}>Total Amount</Text>
            <Text style={styles.valueText}>Rs. { route.params.itemData.prize * Quantity + packPirze} /- </Text>
          </View>

        </View>



        </ScrollView>



      <View style={styles.bottomBar}>
        <View style={styles.add2cart}>
          <View  style={{flexDirection:'row', alignItems:'center'}}> 
            <FontAwesome name='rupee' size={19} />
            <Text style={styles.pirze}> { route.params.itemData.prize * Quantity + packPirze} /-</Text>

          </View>
          <TouchableOpacity style={{}}>
            <Text style={styles.prizeText}>View Prize Details</Text>

          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.buyNow} onPress={GotoPaymentScreen}>
          <Text style={styles.textBottombar}>CONTINUE</Text>
        </TouchableOpacity>
      </View>

      {(() =>{
          if(isLoading==true){
            return(
              <View style={styles.blurLoading}>
                <ActivityIndicator color={'#ffdb00'} size='large' />
              </View>
            );
          }
        })()}
    </View>
   
    
  )
}

const useStyle = () => {
  const dimensions = useWindowDimensions();
  

  const styles = StyleSheet.create({
    WholeScreen:{
      flex:1
    },
    ScrollContent:{
      flex:1,
      backgroundColor: '#BCBFBE'
    },
    round:{
      borderRadius:150,
      height: dimensions.height/23,
      backgroundColor: '#ffdb00',
      width: dimensions.width/ 13,
      alignItems:'center',
      justifyContent:'center',


    },
    topLevel:{
      backgroundColor: 'white',
      paddingVertical: 10,
      width: dimensions.width,
      height: dimensions.height/13,
      borderBottomColor:'grey',
      borderBottomWidth:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      paddingBottom:5
    },
    lineLevel:{
      width:'15%',
       height:2,
        backgroundColor:'#EBF39B',
       marginHorizontal:10
      },
      containerRound:{
        alignItems:'center'
      },
      additionalItems:{
        borderColor:'grey',
        borderWidth:1,       
        height: dimensions.height/5,
        width: dimensions.width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'

      },
      image:{
        height: dimensions.height/6,    
        width: dimensions.width/4
    },
    RelatedConstainer:{
      marginTop:5,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'white',
      
      
    },
    imageText:{
      borderBottomColor:'white',
      width: '100%',
      alignItems:'center',
      borderColor:'grey',
      borderWidth:1,
      borderTopColor:'white'
      

    },
    AdressConatiner:{
        marginTop:5,
        backgroundColor:'white',
             
        height: dimensions.height/4.5 ,
        width: dimensions.width,
        
        

    },
    delverandchange:{
      marginTop:7,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      height: dimensions.height/20,
      justifyContent:'space-between',
      
    },
    changeBtn:{
      borderColor:'lightgrey',
      borderWidth:1,
      padding:7,
      marginRight:15
    },
    username:{
      width:'100%',
      height:30,
      flexDirection:'row',
      alignItems:'center',
      marginLeft:15

    },
    homeIcon:{
      padding:4,
      backgroundColor:'lightgrey',
      marginLeft:10,
      borderRadius: 7
    },
    address:{
      width:'100%',
      paddingHorizontal:25

    },
    bottomBar:{
      width:'100%',
      height:69,
      flexDirection:'row',
      alignItems:'center',
      borderTopWidth:0.2,
      paddingBottom:1,
      backgroundColor:'white'
      
    },
    textBottombar:{
      paddingVertical:10,
      fontWeight:'700',
      fontSize:14,
      
      
    },
    pirze:{
      fontSize:18,
      fontWeight:'700'
    },
    prizeText:{
      paddingVertical:2,
      fontWeight:'500',
      fontSize:10,
      color:'blue'
  
    },
  
    add2cart:{
      flex:3,
      alignItems:'flex-start',
      backgroundColor:'white',
      paddingLeft:15
      
      
    },
    buyNow:{
      flex:2,
      alignItems:'center',
      backgroundColor:'#ffdb00',
      margin:4,
      borderRadius:10
  
    },
    NoproductS:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    noProductBTN:{
      backgroundColor:'#ffdb00',
      padding:13,
      borderRadius:15
    },
    PrizeDetails:{
      marginTop:5,
      backgroundColor:'white',           
      height: dimensions.height/2.8 ,
      width: dimensions.width,
      paddingHorizontal:20,
      paddingVertical:10

    },
    textandvalue:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:"center",
      marginBottom:8
    },
    detailsText:{
      fontSize:15
    },
    valueText:{
      color:'green',
      fontSize:15

    },
    wholeitem:{
      width: '100%',
      height: 170,
      flexDirection:'row',
      alignItems:'center',
      padding:3,
     backgroundColor:'white',
      marginTop:5
      

  },
  image:{
      height:110,
      width:110,
  },
  Details:{
      height:'100%',
      width:'56%',
      padding:20,
  

  },
  itemName:{
      fontSize:16,
      fontWeight:'450',
      paddingBottom:7
  },
  category:{
      fontSize:17,

  },
  oferandprize:{
      flexDirection:'row',
      alignItems:'center',

  },
  itemOffer:{
      fontSize:17,
      fontWeight:'bold',
      color:'green',
      marginRight:10
  },
  itemPrize:{
      fontSize:17,
      fontWeight:'bold',
  },
  itemfreedelivery:{
      color:'grey'
  },
  starsView:{
      marginRight:81,
      flexDirection:'row'
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
    imageamdQnt:{
      marginHorizontal:18,
      alignContent:'center',
      justifyContent:'center'
    },
    quantitybtn:{
      height:25,
      width:90,
      borderColor:'grey',
      borderWidth:1,
      backgroundColor:'white',
      
    },
    blurLoading:{
      opacity: 0.6  ,
      backgroundColor:'lightgrey',
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'100%'
    }
  
    
  })
  return { styles }
}
  