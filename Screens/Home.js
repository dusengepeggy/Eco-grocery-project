import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../Styles/HomeStyle";
import Search from "../Components/Search";
import { Icon } from "react-native-elements";
import FoodCard from "../Components/FoodCard";
import { SliderBox } from "react-native-image-slider-box";


const Bananas= require('../assets/Bananas.jpg')
const Apple= require('../assets/Apple.jpg')
const Pepper= require('../assets/Pepper.jpg')
const Carrots= require('../assets/Carrots.jpg')


export default function Home() {
  const [searchText, setSearchText]= useState('')
  const [searchData, setSearchData]=useState([])
  const Searching=()=>{
    if(searchText.length>0){
      const filtering=fruits.filter(item=>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      const filtering2=fruits2.filter(item=>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setSearchData(filtering2)
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
      fruit: Bananas,
      name:'Organic Bananas',
      price:4.99
    },
    {
      id:2,
      fruit: Apple,
      name:'Fresh Apples',
      price:4.99
    },
  ]
const fruits2=[
    {
      id:1,
      fruit: Pepper,
      name:'Pepper',
      price:4.99
    },
    {
      id:2,
      fruit:Carrots,
      name:'Carrots',
      price:4.99
    },
    {
      id:3,
      fruit: Bananas,
      name:'Organic Bananas',
      price:4.99
    },
    {
      id:4,
      fruit: Apple,
      name:'Fresh Apples',
      price:4.99
    },
  ]

  const sliders=[
    require('../assets/Fruits.jpg'),
    require('../assets/Fruits2.jpg'),
    require('../assets/Fruits3.jpg'),
  ]
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.header}>
        <Text style={styles.text}>Hello, Username</Text>
        <View style={styles.icon}>
          <Icon name="bell-outline" type="material-community" size={26} color={'#FECB4C'}/>
        </View>
      </View>
      <Search placeholder={'Search Store'} value={searchText} changeText={setSearchText}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.background}>
        <SliderBox 
        position='relative'
        images={sliders}
        dotColor={'#47AD6D'}
        borderRadius={15}
        autoplay
        circleLoop
     
        dotStyle={{
         width: 15,
         height: 7,
        }}/>
        <View style={styles.texts}>
          <Text style={styles.textA}>Fresh Vegetables</Text>
          <Text style={styles.textB}>Get up to 40% OFF</Text>
        </View>
      </View>
      <View>
        {searchText.length<=0?(<><View style={styles.header2}>
          <Text style={styles.text}>Exclusive Offer</Text>
          <Text style={styles.text2}>See all</Text>
        </View>
        <View style={styles.cards}>
          
          {fruits.map((item, index)=>
          <View key={index}>
            <FoodCard image={item.fruit} name={item.name} price={item.price}/>
          </View>)}
        </View>
        <View style={styles.header2}>
          <Text style={styles.text}>Best Selling</Text>
          <Text style={styles.text2}>See all</Text>
        </View>
        <View style={styles.cards}>
          
          {fruits2.map((item, index)=>
          <View key={index}>
            <FoodCard image={item.fruit} name={item.name} price={item.price}/>
          </View>)}
        </View></>):( <>
        <Text style={styles.text}>Search Results</Text>
        <View style={styles.cards}>
          
          {searchData.map((item, index)=>
          <View key={index}>
            <FoodCard image={item.fruit} name={item.name} price={item.price}/>
          </View>)}
        </View></>)}
      </View>
    </ScrollView>
    </View>
  );
}
