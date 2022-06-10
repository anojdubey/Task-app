import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';

export default function Controls() {
    const value='Open';
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
  return (
      <>
    <Text style={{
        marginTop:height*0.02,
        color:'black',
        fontWeight:'500',
        fontSize:width*0.04,
        marginLeft:width*0.02,
  }} >Group Controls</Text>
    <View style={{
        marginTop:height*0.01,
        flexDirection:'row',
        justifyContent:'space-between',
    }} >
      <Card style={{
            marginTop:height*0.01,
            left:width*0.05,
            alignItems:'center',
            height:height*0.1,
            width:width*0.4,
            padding:height*0.01,
            alignContent:'center',
      }} >
          <Text style={{fontSize:width*0.04,top:height*0.015}} >Mouse Open</Text>
      </Card>
      <Card style={{
            marginTop:height*0.01,
            alignItems:'center',
            height:height*0.1,
            width:width*0.45,
            padding:height*0.01,
            alignContent:'center',
      }} >
          <Text style={{fontSize:width*0.04,top:height*0.015}} >Mouse Close</Text>
      </Card>
    </View>
    </>
  )
}