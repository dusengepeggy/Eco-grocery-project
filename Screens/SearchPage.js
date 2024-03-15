import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Search from '../Components/Search'
import { styles } from '../Styles/SearchPageStyle'
import SearchCard from '../Components/SearchCard'
const Bananas= require('../assets/Bananas.jpg')
const Apple= require('../assets/Apple.jpg')
const Pepper= require('../assets/Pepper.jpg')
const Carrots= require('../assets/Carrots.jpg')
const Shakes= require('../assets/Shakes.png')
const Drinks= require('../assets/Drinks.png')

export default function SearchPage() {
  const [searchText, setSearchText]= useState('')
  const [searchData, setSearchData]=useState([])
  const Searching=()=>{
    if(searchText.length>0){
      const filtering=fruits.filter(item=>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setSearchData(filtering)
    }
    else{
      setSearchData([])
    }

  }

  React.useEffect(()=>{
    Searching()
  }, [searchText])
  

  const fruits=[
    {
      id:1,
      fruit: Drinks,
      name:'Fresh Juices',
      price:4.99
    },
    {
      id:2,
      fruit: Bananas,
      name:'Organic Bananas',
      price:4.99
    },
    {
      id:3,
      fruit: Shakes,
      name:'Milk Shakes',
      price:4.99
    },
    {
      id:4,
      fruit: Apple,
      name:'Fresh Apples',
      price:4.99
    },
    {
      id:5,
      fruit: Pepper,
      name:'Pepper',
      price:4.99
    },
    {
      id:6,
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
      <Search placeholder={'Find Products'} value={searchText} changeText={setSearchText}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.cards}>
        {searchText.length>0?(<View style={styles.cards}>
          
          {searchData.map((item, index)=>
          <View key={index}>
            <SearchCard image={item.fruit} name={item.name} price={item.price}/>
          </View>)}
        </View>):(<View style={styles.cards}>
          
          {fruits.map((item, index)=>
          <View key={index}>
            <SearchCard image={item.fruit} name={item.name} price={item.price}/>
          </View>)}
        </View>)}

      </View>
      </ScrollView>
    </View>
  )
}
