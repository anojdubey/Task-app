import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function MoreComp() {
    const height=Dimensions.get('window').height;
  return (
    <View style={{
        marginTop:height*0.02,
    }} >
      <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
      }} >
        <Comp val1='30%'  value='OPEN' />
        <Comp val1='30%' value='PAUSE' />
        <Comp val1='30%' value='CLOSE' />
      </View>
      <View style={{
          marginTop:height*0.02,
          flexDirection:'row',
      }} >
        <Comp val1='45%' value='BLACKOUT' />
        <Comp val1='45%' value='RIP+' />
      </View>
    </View>
  )
}

const Comp=(props)=>{
    const height=Dimensions.get('window').height;
    return(
        <Card style={{padding:height*0.02,
            marginRight:height*0.02,
            width:props.val1,
        }}>
            <Text style={{
                color:'gray',
                fontSize:height*0.025,
                padding:height*0.01,
            }} >{props.value}</Text>
        </Card>
    )
}