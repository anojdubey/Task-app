import { View, Text,Dimensions,ScrollView} from 'react-native'
import React from 'react'
import Copm1 from './components/Copm1';
import Controls from './components/Controls';
import Control2 from './components/Control2';
import MoreComp from './components/MoreComp';


export default function Home() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
      return (
    <ScrollView style={{flex:1,padding:height*0.02}} >
      <Text style={{
          color:'black',
          marginBottom:height*0.01,          
          fontSize:height*0.04,
          fontWeight:'bold',
      }} >Shade Control</Text>
      <Text style={{color:'black'}} >Linking React</Text>
      <View style={{
          marginTop:height*0.03,
      }} >
          <Text style={{color:'black',fontWeight:'500',fontSize:width*0.04}} >SCENES</Text>
          <View style={{
              flexDirection:'row',
              justifyContent:'space-around',
          }} >
          <View style={{justifyContent:'space-around',}} >
            <Copm1 value='On/Off' />
          </View>
          <View style={{justifyContent:'space-around',}} >
          <Copm1 value='Bright' />
          </View>
          </View>
          <Controls/>
          <Control2/>
          <MoreComp/>
      </View>
    </ScrollView>
  )
}