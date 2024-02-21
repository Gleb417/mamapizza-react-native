import React from 'react';
import { ComponentsCakes } from './ComponentsCakes.js';
import  { SIZES, COLORS, Calendar } from '../constants.js';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';


export default function App() {
  return (
    <View>
      <View style={{paddingTop: 40}}>
        <Text style={{fontSize: SIZES.h2, fontWeight: 'bold'}}>Торты</Text>
      </View>

<View style={{
  width: '100%',
  height: 'auto',
  marginTop:20,
  flexDirection:'row', 
  flexWrap:'wrap', 
  justifyContent: 'space-between',
  backgroundColor:'white',
  }}
  >
        {ComponentsCakes.map(ComponentsCakes =>(

    <View style={{
      width: '100%',
      height: 'auto',
      marginBottom: 10,
      backgroundColor: 'white',
    }}>
          <View underlayColor={COLORS.white}
							style={{
                width:'100%',
								height: 'auto',
								paddingRight: 5,
                backgroundColor:'white',
							}}>

          <View style={{
            width:'100%',
            flexDirection:'row', 
            // flexWrap:'wrap', 
            justifyContent: 'space-between'
            }}>

          <View style={{width:'auto', height: 140,}}>

          <Image source={{uri:ComponentsCakes.imageCakes}} style={{width: 140, height: 140, position: "absolute", top: 0, left: 0,}} />
          </View>
          
          <View style={{height:140, width: '60%', paddingLeft: 10, position: "absolute", top: 0, right: 0, }}>
          <Text style={{fontSize: SIZES.h3,fontWeight: 'bold', paddingBottom:5}}>{ComponentsCakes.nameCakes}</Text>
          <Text numberOfLines={4} ellipsizeMode={'tail'} style={{fontSize: SIZES.body4,}}>{ComponentsCakes.descriptionCakes}</Text>
          <Text style={{position: "absolute", bottom: 0, left: 0, paddingLeft: 15, paddingTop: 5, paddingBottom:5, fontSize: SIZES.h2}}>{ComponentsCakes.priceCakes}</Text>

          <Pressable style={{position: "absolute", bottom: 0, right: 0, marginRight:5, justifyContent: 'space-between', flex:1}}>
          <View style={styles.button}>
          <Text style={{color:'white'}}>Предзаказ <Image source={{uri:'https://static.tildacdn.com/tild6138-3532-4436-a361-393064323434/calendar2.png'}} style={{width:15, height:15}} /></Text>
          </View>

          </Pressable>

          </View>

          </View>

          </View>
  
    </View>

        ))}

</View>

      </View>
  );

}

const styles = StyleSheet.create({
  button:{

fontSize: SIZES.h3,
color:'white',
textAlign: 'center',
width: 100,
borderRadius:25,
padding: 8,
backgroundColor: '#45c0e6',
zIndex: 2,

  }
})