import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { SliderBox } from "react-native-image-slider-box";
import { styles } from './Styles/ProductStyles';
export default function Product() {
  const image=[
    require('../assets/apple.jpg'),
    require('../assets/apple1.jpg'),
    require('../assets/apple2.jpg')
  ]
  return (
    <View style={styles.container}>
      <View style={styles.topicons}>
        <View style={styles.arrow}>
        <Icon name="chevron-left" color="#feecbd"></Icon>  
        </View>
        <Icon name="heart-outline" type="material-community" color="gray"></Icon>
      </View>
      <View >
        <View style={styles.slidecard}>
        <SliderBox images={image}
        sliderBoxHeight={300} 
        autoplay
        circleLoop
        resizeMode={'contain'}
        dotColor="#73C08F"
        inactiveDotColor="white"
        dotStyle={{
          width: 15,
          height: 5,
          borderRadius: 5,
        }}
        />
          </View>
      {/* <Image style={styles.image} source={require('../assets/apple.jpg')}/> */}
      <Text style={styles.text}>Naturel Red Apple</Text>
      <Text style={styles.text2}>1kg price</Text>

      <View style={styles.icons2}>
        <Text style={styles.text}>$49.5</Text>
        <View style={styles.row}>
        <Icon name="minus" type="material-community" ></Icon>
        <View style={styles.number}>
        <Icon name="numeric-1" type="material-community" ></Icon>
        </View>
        <Icon name="plus" type="material-community" color='#73C08F' ></Icon>
        </View>
      </View>

      <View style={styles.detail}>
      <View style={styles.row}>
      <Text style={styles.text1}>Product Detail</Text>
      <Icon name="chevron-down" type="material-community"/>
      </View>
      <Text style={styles.text2}>Apples are a popular fruit that contain vitamins, minerals, fiber, antioxidants, and other nutrients. They come in many colors, sizes, and flavors.</Text>
      </View>
      <View style={styles.detail}>
      <View style={styles.row}>
      <Text style={styles.text1}>Nutritions</Text>
      <View style={styles.row} >
      <TouchableOpacity style={styles.nutrition} >
      <Text style={styles.text2}>100gr</Text>
      </TouchableOpacity>
      <Icon name="chevron-right" type="material-community"/>
      </View>
      </View>
      </View>
      <View style={styles.detail}>
      <View style={styles.row}>
      <Text style={styles.text1}>Reviews</Text>
      <Icon name="chevron-right" type="material-community"/>
      </View>
      </View>
      </View>
      <View style={styles.buttoncard}>
    <TouchableOpacity style={styles.button}>
     <Text style={styles.buttontext}>Add to cart</Text> 
      </TouchableOpacity>
      </View>
    </View>
  )
}

