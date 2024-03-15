import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../Styles/FoodCardStyle'
import { Icon } from 'react-native-elements'

export default function FoodCard({image, name, price}) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.products}>
            <Image style={styles.product} source={image} resizeMode='cover'/>
            <View style={styles.price1}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text2}>7pcs, Price:</Text>
            <View style={styles.price}>
                <Text style={styles.text}>${price}</Text>
                <TouchableOpacity style={styles.add}>
                    <Icon name='plus' color={'white'} type='material-community' size={30}/>
                </TouchableOpacity>
                </View>
            </View>


        </View>
     
    </TouchableOpacity>
  )
}

