import React from 'react';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View, ProgressBar, ScrollView } from 'react-native';
import {AntDesign, MaterialIcons,Feather,SimpleLineIcons, FontAwesome,Fontisto, Entypo,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import TopBar from '../components/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';


const CustomDrawerContent = ({navigation}) => {
    const ScreenName = 'ACCOUNT';
    const LogOutsetAsyncData = async() => {
        try{
            await AsyncStorage.setItem('UID','');
            navigation.navigate('LoginScreen',);
        }
        catch(error){
            console.log(error);

                alert('Unable to LogOut!, Try again Later!')
            }
        }

  return (
    <View style={{flex:1, marginTop:20}}>

        <View style={styles.wholeScreen}>

                {/* My Profile */}
            <TouchableOpacity style={styles.MyProfile}>
                <View  style={styles.PhotoandDetails}>
            
                <Image style={styles.profilePhoto} source={require('../assets/images/marvel.png')}/>
            
                <View style={styles.TextadnPoints}>
                    <Text style={styles.userName} >Jero Prak</Text>
                    <View style={styles.pointsArea}>
                    <View style={styles.PointCard}>
                        <MaterialCommunityIcons name='star-four-points' size={20} color={'#ffdb00'}/>
                        <Text style={styles.userPoints}>UB Points</Text>
                    </View>
                    </View>
                    
                </View>
                
                </View>
                <View style={styles.progressContent}>
                <View style={{backgroundColor:'#EAE5E5',width:'80%', height:1, marginBottom:9}}></View>
                    <Text style={{fontSize:11, color:'grey',marginBottom:3 }}>5 UBs left to complete this level!</Text>
                    <Progress.Bar progress={0.5} borderColor={'white'} unfilledColor={'#ECE9E9'} color={'#ffdb00'} width={250} style={{ marginTop:3, marginBottom:9}} />
                </View>
                
                
            </TouchableOpacity>
            <ScrollView style={{ flex:1}}
              showVertivalScrollIndicator={false}

            >

                <View style={styles.MyActivity}>
                    {/* sectors */}

                    <TouchableOpacity style={styles.sectors}>
                    <Feather name='package'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>My orders</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <MaterialCommunityIcons name='bank-outline'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>My Bank & UPI Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <AntDesign name='gift'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>My Rewards</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <AntDesign name='creditcard'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>My Payments</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <Feather name='map'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#5B5252'}}>My Journey</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <SimpleLineIcons name='note'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#5B5252'}}>My Reviews</Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={styles.sectors}>
                    <Entypo name='back-in-time'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#5B5252'}}>My Viewed Products</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <Ionicons name='language-outline'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>Choose Language</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <Ionicons name='settings-outline'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <AntDesign name='customerservice'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>Help Center</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <MaterialIcons name='attach-money'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>Sell on YouBuild</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <Fontisto name='persons'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>My Customers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <FontAwesome name='star-o'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>Rate YouBuild</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sectors}>
                    <Ionicons name='md-document-text-outline'  style={{marginLeft:15}} size={19} color={'#ffdb00'}/>
                    <Text style={{marginLeft:20, fontSize:15,  color:'#3A3636'}}>Legal and Policies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logout} onPress={LogOutsetAsyncData}>
                    <SimpleLineIcons name='logout'  style={{marginLeft:7}} size={23} color={'black'}/>
                    <Text style={{marginLeft:8, fontSize:15,  color:'#3A3636'}}>Log Out</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.version}>
                    <Image style={styles.profilePhoto} source={require('../assets/images/marvel.png')} />
                    <Text>Version 1.0</Text>
                </View>
            </ScrollView>

            </View>
    </View>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    wholeScreen:{
      backgroundColor:"#EAE5E5",
      flex:1,
      padding:2
    },
    MyProfile:{
      backgroundColor:'white',
      height:145,
      justifyContent:'center',
      marginTop:1
      

    },
    PhotoandDetails:{
      flexDirection:'row',
      alignItems:'center',
      
    },
    profilePhoto:{
      borderRadius:180,
      resizeMode:'stretch',
      height:60,
      width:60,    
      marginLeft:20,
      marginRight:18  
    
    },
    TextadnPoints:{
     
      flex:2,
      justifyContent:'center'
    },
    userName:{
      fontSize:18,
      marginBottom:10,
      fontWeight: '700',
      paddingLeft:2
    },
    userPoints:{
      fontSize:12,
      marginBottom:10,
      paddingTop:6
    },
    pointsArea:{
      
    },
    PointCard:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ECE9E9',
      borderRadius:20,
      height:30,
      width:95
    },
    progressBar: {
      height: 10,
      width: '100%',
      backgroundColor: 'yellow',
  
      borderRadius: 5
    },
    progressconatiner:{
      flex: 1,
      flexDirection: "column", //column direction
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 1,
    },
    progressContent:{
      marginHorizontal:10,
      marginTop:9,
    
      
    },
    MyActivity:{
      height:835,
      backgroundColor:'white',
      marginTop:9
    },
    sectors:{
      width:'100%', 
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      height:55,
      borderBottomColor:'#EAE5E5',
      borderBottomWidth:1
    },
    version:{
      marginTop:8,
      backgroundColor:'white',
      alignItems:'center',
      paddingBottom:10
    },
    logout:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ffdb00',
      paddingVertical:13,
      marginHorizontal:33,
      borderRadius:8,
      flexDirection:'row',
      marginTop:8
      }

    
    

})