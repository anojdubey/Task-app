import { TouchableOpacity, Text,Dimensions,View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Copm1(props) {
  return (
      <View>
          <MixComponent value={props.value} />
          <MixComponent value={props.value} />

      </View>
  )
}

const MixComponent = (props) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return(
        <Card style={{
            padding:height*0.025,
            width:width*0.45,
            justifyContent:'space-around',
        }} >
            <TouchableOpacity style={{
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
            }} >
            <Icon style={{
                padding:height*0.01,
            }} name='rocket' size={width*0.04} color='red' />
            <Text style={{
                fontSize:width*0.035,
            }} >{props.value}</Text>
            </TouchableOpacity>
        </Card>
    )
}