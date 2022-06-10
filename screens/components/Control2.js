import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';

export default function Control2() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
  return (
    <View>
      <Text style={{
        color: 'black',
        marginTop:height*0.01,
        fontSize:height*0.025,
        fontWeight:'500',
        margin:height*0.01,
      }} >CONTROLS</Text>
      <Card>
          <View style={{
              flexDirection:'row',
              padding:height*0.02,
              alignItems:'center',
          }} >
              <Icon name='chevron-circle-right' size={height*0.04}/>
              <View style={{paddingLeft:width*0.03}} >
                  <Text style={{
                      fontSize:height*0.025,
                        fontWeight:'500',
                  }} >Window Roller Bind</Text>
                  <Text>OFF</Text>
              </View>
          </View>
      </Card>
    </View>
  )
}