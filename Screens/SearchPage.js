import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Search from '../Components/Search'
import { styles } from '../Styles/SearchPageStyle'
import FoodCard from '../Components/FoodCard'
const Bananas= require('../assets/Bananas.jpg')
const Apple= require('../assets/Apple.jpg')
const Pepper= require('../assets/Pepper.jpg')
const Carrots= require('../assets/Carrots.jpg')
const Shakes= require('../assets/Shakes.png')
const Drinks= require('../assets/Drinks.png')

export default function SearchPage() {

  const fruits=[
    {
      id:1,
      fruit: Drinks,
      name:'Fresh Juices',
      price:4.99
    },
    {
      id:1,
      fruit: Bananas,
      name:'Organic Bananas',
      price:4.99
    },
    {
      id:1,
      fruit: Shakes,
      name:'Milk Shakes',
      price:4.99
    },
    {
      id:2,
      fruit: Apple,
      name:'Fresh Apples',
      price:4.99
    },
    {
      id:3,
      fruit: Pepper,
      name:'Pepper',
      price:4.99
    },
    {
      id:4,
      fruit:Carrots,
      name:'Carrots',
      price:4.99
    },
  ]
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.header}>
        <Text style={styles.text}>Find Products</Text>
      </View>
      <Search placeholder={'Find Products'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.cards}>
      {fruits.map((item, index)=>
          <View key={index}>
            <FoodCard image={item.fruit} name={item.name} price={item.price}/>
          </View>)}
      </View>
      </ScrollView>
    </View>
  )
}
