import React from 'react';
import { ComponentsDrinks } from './ComponentsDrinks.js';
import  { SIZES, COLORS } from '../constants.js';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';


export default function App() {
  return (
    <View>
      <View style={{paddingTop: 40}}>
        <Text style={{fontSize: SIZES.h2, fontWeight: 'bold'}}>Напитки</Text>
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
        {ComponentsDrinks.map(ComponentsDrinks =>(

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

          <Image source={{uri:ComponentsDrinks.imageDrinks}} style={{width: 140, height: 140, position: "absolute", top: 0, left: 0,}} />
          </View>
          
          <View style={{height:140, width: '60%', paddingLeft: 10, position: "absolute", top: 0, right: 0, }}>
          <Text style={{fontSize: SIZES.h3,fontWeight: 'bold', paddingBottom:5}}>{ComponentsDrinks.nameDrinks}</Text>
          <Text numberOfLines={4} ellipsizeMode={'tail'} style={{fontSize: SIZES.body4,}}>{ComponentsDrinks.descriptionDrinks}</Text>
          <Text style={{position: "absolute", bottom: 0, left: 0, paddingLeft: 15, paddingTop: 5, paddingBottom:5, fontSize: SIZES.h2}}>{ComponentsDrinks.priceDrinks}</Text>
          <Pressable style={{position: "absolute", bottom: 0, right: 0, marginRight:5,}}>
            <Text style={styles.button}>В корзину +</Text>
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
backgroundColor: '#FF4500',

  }
})