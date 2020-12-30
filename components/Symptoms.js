import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet , Button , TouchableHighlight ,Image, TouchableOpacity , TextInput , Modal , FlatList,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Symptoms(){
    return (
        <View style={styles.container}>
     
            <Image source={require('../assets/symptoms.jpg')}
            style={{width:'100%' , height:'40%'}}
            
            />
    
            {/* First row of buttons */}
            <View style={{flexDirection:'row'}}>
              <View style={styles.btn}>
                <Image
                source={require('../assets/headace.png')}
                style={{width:80 , height:100}}
                />
                
                <Text style={styles.btntext}>
                    
                    <Text style={{ fontSize:25, color:'#073b4c'}}>
                      Headace
                    </Text>
                </Text>
    
              
                
              </View>
              <View style={styles.btn}>
                <Image
                source={require('../assets/cough.png')}
                style={{width:80 , height:100}}
                />
                
                <Text style={styles.btntext}>
                    
                    <Text style={{fontSize:25, color:'#073b4c'}}>
                      Cough
                    </Text>
                </Text>
    
              
                
              </View>
            </View>
    
    
            {/* 2nd row of buttons */}
            <View style={{flexDirection:'row'}}>
            <View style={styles.btn}>
                <Image
                source={require('../assets/fever.png')}
                style={{width:80 , height:100}}
                />
                
                <Text style={styles.btntext}>
                    
                    <Text style={{fontSize:25, color:'#073b4c'}}>
                      Fever
                    </Text>
                </Text>
         
              </View>
              <View style={styles.btn}>
                <Image
                source={require('../assets/sore-throat.png')}
                style={{width:80 , height:100}}
                />
                
                <Text style={styles.btntext}>
                    
                    <Text style={{ fontSize:25, color:'#073b4c'}}>
                      Sore Throat
                    </Text>
                </Text>
    
              </View>
            </View>
            
    
        </View>
      );
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#355070',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    btn:{
      backgroundColor:'#a8dadc',
      margin:8,
      marginTop:20,
      width:'43%',
      height:150,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      borderColor:'#74c69d'
  
    },
    btntext:{
      color:'white',
      fontSize:18,
      
    },
    btnnumberstyle:{
      fontWeight:'bold',
      fontSize:23,
  
    }
  });
  