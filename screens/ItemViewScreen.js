import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {AntDesign, MaterialIcons, EvilIcons,SimpleLineIcons, FontAwesome, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import SliderItemView from '../components/SliderItemView';
import { useRoute } from '@react-navigation/native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewMoreText from 'react-native-view-more-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addDoc, collection, doc, Firestore, getDoc, getDocs, onSnapshot, QuerySnapshot, setDoc} from 'firebase/firestore';
import {auth, db} from '../src/config';
import { StatusBar } from 'expo-status-bar';





export default function ItemViewScreen({navigation}) {

  const route = useRoute();
  const itemData=route.params.item
  const [productCount, setproductCount]= useState([]);
  const [cartPresent, setCartPresent]= useState(false);
  const [UID, setUID] = useState('');

  // BuynowScreen Stuff
  const [RelatedproductCount, setRelatedproductCount]= useState([]);
  const [ProductsData,setproductsData] = useState([{'image1':'https://firebasestorage.googleapis.com/v0/b/you-build-45ca6.appspot.com/o/productImages%2Fbricks%2Fvinoth.png?alt=media&token=f057ca79-c5d4-4bf6-86ef-527c17e2dc19'},
  {'image1':'https://firebasestorage.googleapis.com/v0/b/you-build-45ca6.appspot.com/o/productImages%2Fbricks%2Fvinoth.png?alt=media&token=f057ca79-c5d4-4bf6-86ef-527c17e2dc19'}]);  
  const [userData, setUserData] = useState();

  const[isLoading,setIsLoading] = useState(false);

  

 
 


  // Image swipe
  var dataImages= [itemData.image1]
  for(const[key,value] of Object.entries(itemData)){
    if('image2image3image4image5image6'.includes(key)){
      dataImages.push(value);
    }
  }


    useLayoutEffect(() => {

    navigation.setOptions({
      // headerShown: false,     
      title: '', 
      headerStyle:{
        backgroundColor:'#ffdb00'
      },
      headerRight: () => (
        <AntDesign name='shoppingcart' size={24} style={styles.Righticons} /> 
      )
    })


    AsyncStorage.getItem('UID')
    .then(value => {

      if(value!=null){
        console.log(value, 'userid CART screen');
        setUID(value);

        getDocs(collection(db, 'users',value,'cart products'))
          .then(docSnap => {
            var products = [];
            docSnap.forEach((doc) => {
                const data = { id: doc.id}
                products.push(data)        
              setproductCount(products);

              checkCartProduct(products);
              
            });     
          
            // storeCartProductData(products);

          })
          UserDataforBuyNowScreen(value);
        }

        
       
      })


      BuyNowScreenActivity();

    
  },[])

    const checkCartProduct = (p) => {
        p.forEach((Data)=>{
        if(Data.id === itemData.id){
          setCartPresent(true);
     
        }
      })
      
      
    }
    
    const AddToCart = () =>{
      setDoc(doc(db,'users', UID ,'cart products', itemData.id),{                    
        brought: 0,
        category: itemData.category,
        count: 1,
        ordered: false

        }).then(() => {
          alert('Item Added to Your Cart!');
          setCartPresent(true);
        }).catch((error) => {
            console.log(error);
        })
    }

      // ByNowActivity

    const BuyNowScreenActivity = () => {
      
        getDocs(collection(db, 'products','data',itemData.category,
                  itemData.id, 'relatedItems'))
            .then(docSnap => {
                  var products = [];
                  docSnap.forEach((doc) => {
                    const data = { ...doc.data(), id: doc.id}
                    products.push(data)
                    setRelatedproductCount(products);
                  });     

                  storeRelatedProducts(products);

            })


            const storeRelatedProducts =(products) =>{
                      var prodData =[];
                      products.forEach((document) => {                        
                          getDoc(doc(db, 'products','data',document.category,document.id))
                              .then(val => {                                
                                prodData.push({ ...val.data(), id: val.id})                              
                                setproductsData(prodData);
                                
                          });
                      });
            }

    }
      // UserData to BuynowScreen
      const UserDataforBuyNowScreen = (value) =>{

        getDoc(doc(db, 'users',value))
          .then(val => {
            setUserData({ ...val.data(), id: val.id});
  
          });
      }



      //GotoBuyNow screen
      const GoToBuyNowScreen = () =>{
        setIsLoading(true);
        setTimeout(() => {
          navigation.navigate('BuyNowScreen',{itemData, ProductsData, userData})
          setIsLoading(false);
        },5200)
   
      }


  return (
    <View style={styles.afterHeader}>
      <StatusBar style="auto" />
      
      <ScrollView 
        style={{ flex:1}}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.swipeContent} >      
          <SwiperFlatList 
            showPagination
            paginationStyleItem={{height:6,width:6}}
            paginationActiveColor='#ffdb00'        
            data={dataImages}
            renderItem={({item, index}) => {
              return(
                <SliderItemView item={item} navigation={navigation} />
              );
            }}
            
          />
          <AntDesign name='hearto' color={'#7E7978'} size={22} style={styles.heartoIcon} />
          < EvilIcons name='share-google' size={27} color={'#7E7978'} style={styles.shareIcons} />
        </View>

        <View style={styles.descriptionView}>
          <View style={styles.basicDetails}>
            <Text style={styles.itemName}>{itemData.name}</Text>
            <Text>{itemData.description}</Text>


            <View style={styles.starsView}>
              <Stars
                default={parseInt(itemData.ratings)}
                count={5}
                half={true}
                disabled={true}
                fullStar={<Icon name={'star'} size={20} style={[styles.myStarStyle]}/>}
                emptyStar={<Icon name={'star-outline'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Icon name={'star-half'} size={20} style={[styles.myStarStyle]}/>}
              />
              <Text style={styles.itemRating}>({itemData.ratings})</Text>

            </View>
              
            <View style={styles.oferandprize}>
              <Text style={styles.itemOffer}>{itemData.offer}% off</Text>
              <Text style={styles.itemPrize}>Rs.{itemData.prize}</Text>
              <Text> /Per {itemData.measure}</Text>
            </View>           
                
            

          </View>
          
          
          <View style={styles.HighlightContnet}>
            <Text style={{fontSize:17, fontWeight:'600', marginBottom:12}}>Highlights</Text>
            <Text style={{fontSize:15, marginLeft:10}}>Type: {itemData.measure}</Text>
            <Text style={{fontSize:15, marginLeft:10}}>Height: {itemData.height}</Text>
            <Text style={{fontSize:15, marginLeft:10}}>Weight: {itemData.weight}</Text>
            <Text style={{fontSize:15, marginLeft:10}}>Size: {itemData.size}</Text>
          </View>

          <TouchableOpacity style={styles.freeDelivery}  >
            <View style={{alignItems:'center', flexDirection:'row'}}>
              <MaterialCommunityIcons name='truck-fast' size={25}  />
              <View style={{paddingHorizontal:20}}>
                <Text style={styles.itemfreedelivery}>Free Delivery</Text>
                <Text style={{fontSize:12}}>By Saturday</Text>
              </View>
            </View>
            
            <View style={{backgroundColor:'#ffdb00',width:2, }}></View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={{marginRight:42, fontWeight:'500'}}>Tentative Delivery</Text>
              <FontAwesome name='angle-right' size={29} />
            </View>
            

          </TouchableOpacity>
          

          <View style={styles.ProductDetailsContent}>
            <Text style={{fontSize:17, fontWeight:'600', marginBottom:12}}>Product Details</Text>
            <ViewMoreText numberOfLines={3}>
              <Text>{itemData.details}</Text>
            </ViewMoreText>
          </View>
          
          
          <View style={styles.Ybcoins}>
            <Text style={{fontSize:15, fontWeight:'300'}}>You will earn </Text>
            <View style={{backgroundColor:'#ffdb00',padding:4, borderRadius:18, justifyContent:'center'}}>
              <MaterialCommunityIcons name='star-four-points' size={12} color={'black'}/>
            </View>
            <Text style={{fontSize:16, fontWeight:'600', }}> 10 YB coins</Text>
            <Text style={{fontSize:15, fontWeight:'300', }}> on this order!!</Text>
          </View>

          <TouchableOpacity style={styles.Coupons}>
            <Text style={{fontWeight:'500'}}>All Offers & Coupons</Text>
            <FontAwesome name='angle-right' size={29} />
          </TouchableOpacity>

          <View  style={styles.deliveryFeatured}>
            <View style={styles.replacement}>
              <View style={{backgroundColor:'#ffdb00',padding:4, borderRadius:18}}>
                <Entypo name='cycle' size={15} color={'white'} />
              </View>
              <Text style={{marginTop:5,fontSize:13}}>1 Day </Text>
              <Text style={{fontSize:13}}>replacement</Text>
            </View>

            <View style={{backgroundColor:'#ffdb00',width:2, }}></View>

            <View style={styles.replacement}>
              <View style={{backgroundColor:'green',padding:6, }}>
                <FontAwesome name='rupee' size={14} color={'white'}  />
              </View>
              <Text  style={{marginTop:5,fontSize:13}}>Cash on Delivery </Text>
              <Text style={{fontSize:13}}>available</Text>
            </View>
            <View style={{backgroundColor:'#ffdb00',width:2, }}></View>

            <View style={styles.replacement}>
              <View style={{backgroundColor:'blue',borderRadius:7,padding:5, }}>
                <Entypo name='shield' size={14} color={'white'}  />
              </View>
              <Text  style={{marginTop:5 ,fontSize:13}}>Pure </Text>
              <Text style={{fontSize:13}}>Yb Asured</Text>
            </View>

          </View>
          
          <View  style={styles.ReviewsRatings}>
            <Text style={{fontSize:17, fontWeight:'600', marginBottom:12}}>Reviews & Ratings</Text>
            
            <View  style={styles.Review1}>
              <View  style={styles.ratingAndName}>
                <Stars
                  default={parseInt(itemData.ratings)}
                  count={5}
                  half={true}
                  disabled={true}
                  fullStar={<Icon name={'star'} size={20} style={[styles.myStarStyle]}/>}
                  emptyStar={<Icon name={'star-outline'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                  halfStar={<Icon name={'star-half'} size={20} style={[styles.myStarStyle]}/>}
                />
                <Text style={{fontSize:14, fontWeight:'600', marginLeft:7}}>UserName 1</Text>
              </View>

              <Text >Its really a good product!!
                to use ful for building a quilty home.
                very low prize too. Try buy this product from Sree Ramakrishna
                bricks.. You will be benefitted more. 
              </Text>
            </View>

            <View  style={styles.Review1}>
              <View  style={styles.ratingAndName}>
                <Stars
                  count={5}
                  half={true}
                  disabled={true}
                  fullStar={<Icon name={'star'} size={20} style={[styles.myStarStyle]}/>}
                  emptyStar={<Icon name={'star-outline'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                  halfStar={<Icon name={'star-half'} size={20} style={[styles.myStarStyle]}/>}
                />
                <Text style={{fontSize:14, fontWeight:'600', marginLeft:7}}>UserName 2</Text>
              </View>

              <Text >Its really a good product!!
                to use ful for building a quilty home.
                very low prize too. Try buy this product from Sree Ramakrishna
                bricks.. You will be benefitted more. 
              </Text>
            </View>

            
            
            <TouchableOpacity  style={styles.alldetailsbutton}>
              <Text  style={{fontSize:16, fontWeight:'600',}}>All Reviews</Text>
              <MaterialIcons name='keyboard-arrow-right' size={25} />
            </TouchableOpacity>
          </View>
      
              
        </ View>
      
      </ScrollView>

      <View style={styles.bottomBar}>
        {(() => {
          if(cartPresent != true){
            return(
              <TouchableOpacity style={styles.add2cart} onPress={AddToCart}>
                <Text style={styles.textBottombar}>Add to Cart</Text>
              </TouchableOpacity>
            )
          }else{
            return(
              <TouchableOpacity style={styles.add2cart} onPress={()=> navigation.navigate("CartScreen")}>
                <Text style={styles.textBottombar}>Go to Cart</Text>
              </TouchableOpacity>
            )
            
          }
        })()}
          
                    
          
          <TouchableOpacity style={styles.buyNow} onPress={GoToBuyNowScreen}>
            <Text style={styles.textBottombar}>Buy Now</Text>
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


const styles = StyleSheet.create({
  afterHeader:{
    flex:1,
  },
  swipeContent:{
    width:'100%',
    height:350
  },
  descriptionView:{

    backgroundColor: '#EAE5E5'
  },
  itemName:{ 
    fontWeight: '600',
    marginBottom:5
  },
  category:{
      fontSize:21,

  },
  oferandprize:{
      flexDirection:'row',
      alignItems:'baseline',

  },
  itemOffer:{
      fontSize:25,
      fontWeight:'bold',
      color:'green',
      marginRight:10
  },
  itemPrize:{
      fontSize:25,
      fontWeight:'bold',
  },
  itemfreedelivery:{
      color:'green',
      fontWeight:'500'
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
    bottomBar:{
      width:'100%',
      height:59,
      flexDirection:'row',
      alignItems:'center',
      borderTopWidth:0.2
      
    },
    add2cart:{
      flex:1,
      alignItems:'center',
      backgroundColor:'white',
      
      
    },
    buyNow:{
      flex:1,
      alignItems:'center',
      backgroundColor:'#ffdb00'

    },
    textBottombar:{
      paddingVertical:20,
      fontWeight:'700',
      fontSize:15
    },
    heartoIcon:{
      position:'absolute',
      left:'85%',
      bottom:'87%'
    },
    shareIcons:{
      position:'absolute',
      left:'84%',
      bottom:'77%'
    },
    HighlightContnet:{
      marginTop: 4,
      backgroundColor:'white',
      padding:12


    },
    basicDetails:{
      backgroundColor:'white',
      padding:12,
      justifyContent:'flex-start'
    },
    ProductDetailsContent:{
      marginTop: 4,
      backgroundColor:'white',
      padding:12

    },
    ReviewsRatings:{
      marginTop: 4,
      backgroundColor:'white',
      padding:12,
         
    },
    alldetailsbutton:{
      flexDirection:'row',
      justifyContent:'space-between' ,
      alignItems:'center',
      height:25,
      
    },
    ratingAndName:{
      flexDirection:'row',
      alignItems:'center'
    },
    Review1:{
      padding:20,
      borderBottomWidth:0.8,
      borderBottomColor:'grey',
      marginBottom:11
    },
    Ybcoins:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop: 4,
      backgroundColor:'white',
      padding:14,
    },
    freeDelivery:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop: 4,
      backgroundColor:'white',
      padding:10
      
      
    },
    deliveryFeatured:{
      flexDirection:'row',
      marginTop: 4,
      backgroundColor:'white',
      paddingVertical:20,
      width:'100%',
      
    },
    replacement:{
      alignItems:'center',
      paddingHorizontal:19,
      justifyContent:'center',
      width:'33%',
      
    },
    Coupons:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop: 4,
      backgroundColor:'white',
      padding:12,
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