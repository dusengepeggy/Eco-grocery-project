import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../Styles/FoodCardStyle'

export default function SearchCard({image, name, press}) {
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
    <View style={styles.products2}>
        <Image style={styles.product} source={image} resizeMode='cover'/>
        <View style={styles.price1}>
        <Text style={styles.text3}>{name}</Text>
        </View>


    </View>
 
</TouchableOpacity>
  )
}
