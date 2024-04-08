import { Image, StyleSheet, Text, TextInput, TouchableOpacity,ActivityIndicator, useWindowDimensions, View } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import {FontAwesome,AntDesign, Feather, FontAwesome5,Entypo, Ionicons} from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../src/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';



export default function LoginScreen({navigation}) {

    let [isLoading,setIsLoading] = useState(false);
    const [securePassword,setsecurePassword] = useState(true);

    
  
    useLayoutEffect(() => {
            navigation.setOptions({
            headerShown: false,
            // headerTitle: 'Home',
            
            });

            

        
        },[]);

   
    useFocusEffect(useCallback(() => {    
        
        //call fuctions on each time on screen open
        const UID = AsyncStorage.getItem('UID');
        console.log(UID,'entery stack')        
        
        }))

    const { styles } = useStyle();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login Authentixaton
    const setAsyncData = async(user) => {
        if (user.uid.length == 0){
            alert('Warning ')
        }else{
            try{
                await AsyncStorage.setItem('UID',user.uid); 
                console.log('userId set to async')    
              
           

            }catch(error){
                setIsLoading(false);
                console.log(error)
            }
        }
    }   
    
    
    const handleSignIn = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
           
            setAsyncData(user);
            navigation.navigate('DrawerScreen');
            setIsLoading(false);

        })
        .catch((error) => {
            setIsLoading(false);
            alert("Check the email correctly!")
        })
        
    }
   

    return (

        <View style={styles.entireScreen}>
            <StatusBar style="auto" />

            <Image style={styles.image} source={require('../assets/images/signupinbackground.jpg')}/>
            <Text style={styles.appnametext}>YouBuild</Text>
            <View style={styles.activityContents}>
                <Text style={styles.welcometext}>Login!</Text>
                <View style={styles.haveaccountcontainer}>
                    <Text style={styles.haveaccounttext}>Already have an acconut?</Text>
                    <Text style={styles.registernow}>Login now</Text>
                </View>
        
                <View style={styles.inputFields}>
                    <Text>Email</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TextInput 
                            placeholder='Enter your Email'
                            style={styles.inputEmail}
                            keyboardType='email-address'
                            underlineColorAndroid="yellow"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />  
                        <Entypo name='check' color='#B3BD0C' size={18} style={{position:'absolute', marginLeft:280}}/>                        

                    </View>
                     
                    
                    <Text style={{marginTop:10}}>Password</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TextInput 
                            placeholder='Enter your Password'
                            style={styles.inputpassword}
                            underlineColorAndroid="yellow"
                            autoCapitalize="none"
                            secureTextEntry={securePassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        
                        />
                        <Entypo name='eye' color='#B3BD0C' onPress={() => {
                            setsecurePassword(false);
                        }} size={20} style={{position:'absolute', marginLeft:280}}/> 
                    </View>
                    <View>
                        <TouchableOpacity style={{marginLeft:190}}>
                            <Text style={{fontSize:13,textDecorationLine:'underline', color:'#B3BD0C'}}>Forgot Password?</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                    <TouchableOpacity style={styles.SignupButton} onPress={handleSignIn}>
                        {(() => {
                            if(isLoading==true){
                                return(
                                    <ActivityIndicator color={'white'}  size='small' />

                                );
                            }else{
                                return(
                                    <Text style={{fontSize:16}}>Sign-In</Text>
                                );
                            }
                        })()}
                    </TouchableOpacity>                                  
                </View>
                <View style={styles.orToSignin}>
                        <Text style={{fontSize:14, marginBottom:10}}>Or</Text>
                        <View style={styles.icons}>
                            <TouchableOpacity style={styles.google}>
                                <AntDesign name='google' size={15} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.facebook}>
                                <FontAwesome name='facebook-f' size={15} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.twitter}>
                                <AntDesign name='twitter' size={15} color='white' />
                            </TouchableOpacity>
                            
                            
                        </View>


                        <View style={styles.signincontainer}>
                            <Text style={{marginRight:5}}>Don't have an acconut?</Text>
                            <TouchableOpacity style={styles.SignInText} onPress={() => navigation.navigate('SignupScreen')}>
                                <Text style={{fontSize:14,textDecorationLine:'underline', color:'#B3BD0C'}}>SignUp</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View> 
    )
}

const useStyle = () => {
    const dimensions = useWindowDimensions();
    

    const styles = StyleSheet.create({
        entireScreen:{
            flex:1
        },
        image:{
            width: dimensions.width,
            height: dimensions.height/2.5,
            opacity:0.9
            
        },
        appnametext:{
            fontWeight:'bold',
            position:'absolute',
            paddingTop: 99,
            paddingLeft:80,
            fontSize:50,
            color:"white",
            fontWeight: '900',      
            textShadowColor:'black',
            fontFamily: ''
        },
        activityContents:{
            position:'absolute',
            marginTop: 240,
            height: dimensions.height,
            width: dimensions.width,
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
 
            backgroundColor:'white',
            flex:1
        },
        welcometext:{
            fontSize:30,
            marginTop: 30,
            marginLeft:29,
            color:'black',
            fontWeight: 'bold'
        },
        haveaccountcontainer:{
            flexDirection: 'row',
            marginLeft: 30,
            fontWeight:"bold"
        },
        registernow:{
            marginLeft: 8,
            color:'red'
        },
        inputFields:{
            marginLeft:30,
            marginTop:30,
            
        },
        inputEmail:{
            width: dimensions.width/1.2,
            height: 40,
            fontSize:15,
            paddingBottom:9,
            paddingRight:20

        },
        inputpassword:{
            width: dimensions.width/1.2,
            height: 40,
            fontSize:15,
            paddingBottom:9,
            paddingRight:35,
            
          
        },
        SignupButton:{
            marginTop:18,
            backgroundColor:'yellow',
            marginBottom:10,
            height:40,
            borderRadius:16,
            marginRight: 43,
            marginLeft:13,
            alignItems:'center',
            justifyContent:'center',
            shadowColor:'#171717',
            elevation:10
            
        },
        signincontainer:{
            flexDirection: 'row',
            marginTop:10,
            alignContent:'center',
            marginTop:20
        },
        orToSignin:{
            alignItems:'center',
            marginTop:14  ,
       
        },
        icons:{
            flexDirection:'row',
        },
        google:{
            backgroundColor:'red',
            justifyContent:'center',
            paddingHorizontal:18,
            paddingVertical:7,
            borderRadius:15,
            marginRight:7
        },
        facebook:{
            backgroundColor:'blue',
            justifyContent:'center',
            paddingHorizontal:23,
            paddingVertical:7,
            borderRadius:15,
            marginRight:7
        },
        twitter:{
            backgroundColor:'skyblue',
            justifyContent:'center',
            paddingHorizontal:18,
            paddingVertical:7,
            borderRadius:15
        }
        

      
    })
    return { styles }
}
  