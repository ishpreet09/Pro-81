import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import MyHeader from '../components/header';
import db from '../config';
import * as firebase from 'firebase';

export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state={
            book:'',
            reason:'',
            userID:firebase.auth().currentUser.email
        }
    
    }

    addRequest=async(book, reason)=>{
        var userID=this.state.userID;
        var requestID=Math.random().toString(36).substring(7)
        db.collection("request").add({
            bookName:book,
            reason:reason,
            requestID:requestID,
            userID:userID
        })
        this.setState({
            book:'',
            reason:''
        })

    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Request Book" navigation ={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                style ={styles.formTextInput}
                placeholder={"Item Name"}
                onChangeText={(text)=>{
                    this.setState({
                        book:text
                    })
                }}
                value={this.state.book}
              />
              <TextInput
                style ={[styles.formTextInput,{height:200}]}
                multiline
                numberOfLines ={8}
                placeholder={"Description"}
                onChangeText ={(text)=>{
                    this.setState({
                        reason:text
                    })
                }}
                value ={this.state.reason}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.book,this.state.reason)}}
                >
                <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Add Items</Text>
              </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  