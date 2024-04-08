import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';


export default function PaymentProcessScreen({navigation}) {
    
    useLayoutEffect(() => {
        navigation.setOptions({
          //headerShown: false,     
          title: '', 
          headerStyle:{
            backgroundColor:'#ffdb00'
          },
          
        })
    
        
       
      },[])
  return (

    <View style={styles.wholeScreen}>
       <StatusBar style="auto" />
        <View style={styles.Content}>
            <Text style={{fontSize:15}}>Send Amount to UPI ID</Text>
             <Text style={{fontSize:30, color:'blue'}}>jeroprak2308@oksbi</Text>
              <Text style={{marginVertical:10}}>Or</Text>
             <Text style={{fontSize:15}}>Send Amount to Phone</Text>
             <Text style={{fontSize:30, color:'blue'}}>6380717575</Text>
             <Text style={{marginVertical:10}}>Or</Text>
             <Text style={{fontSize:15, marginBottom:10}}>Scan to send Amount</Text>
             <Image style={styles.image}  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/you-build-45ca6.appspot.com/o/admin%2FOr%20Code.jpeg?alt=media&token=e8fce726-0900-4e31-b591-484a197046de' }} />


        </View>

        <TouchableOpacity style={styles.buyNow} onPress={() => {
            navigation.navigate('HomeScreen')
        }}>
          <Text style={styles.textBottombar}>Home</Text>
        </TouchableOpacity>
      

    </View>

  )
}

const styles = StyleSheet.create({
    wholeScreen:{
        flex:1, 
        justifyContent:'center'
    },
    Content:{
        width:'100%',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
        
    },
    buyNow:{
       
        alignItems:'center',
        backgroundColor:'#ffdb00',
        margin:40,
        marginTop:130
  
  
      },
      textBottombar:{
        paddingVertical:10,
        fontWeight:'700',
        fontSize:14,
        
        
      },
      image:{
        height:200,
        width:'60%'
      }
})