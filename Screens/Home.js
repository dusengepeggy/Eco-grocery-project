import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import React, {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../Styles/HomeStyle";
import Search from "../Components/Search";
import { Icon } from "react-native-elements";
import FoodCard from "../Components/FoodCard";
import { SliderBox } from "react-native-image-slider-box";
import { FIREBASE_AUTH } from "../fireBase/fireBase.comfiguration";
import { GetData } from "../FirebaseFetch/Fetch";
export const authenticate = FIREBASE_AUTH;


const Bananas= require('../assets/Bananas.jpg')
const Apple= require('../assets/Apple.jpg')
const Pepper= require('../assets/Pepper.jpg')
const Carrots= require('../assets/Carrots.jpg')


export default function Home({navigation}) {
  const [searchText, setSearchText]= useState('')
  const [searchData, setSearchData]=useState([])
  const [currentUser, setCurrentUser]=useState(null)
  const [dynamic,setDynamic]=useState([])
  const [like, setLike]=useState(false)
 

 
 

 
  const Searching=()=>{
    if(searchText.length>0){
      const filtering2=dynamic.filter(item=>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setSearchData(filtering2)
    }
    else{
      setSearchData([])
    }

  }
 
  React.useEffect(()=>{
   var ItemsInStock= async ()=>{
      var allItems =await GetData()
      setDynamic(allItems); 
     
    }
    ItemsInStock()
    
   
  },[])
  React.useEffect(()=>{
    Searching()
  }, [searchText])

  

 




  const sliders=[
    require('../assets/Fruits.jpg'),
    require('../assets/Fruits2.jpg'),
    require('../assets/Fruits3.jpg'),
  ]
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.header}>
        <View>
          {currentUser?(<Text style={styles.text}>Welcome, </Text>):(<Text style={styles.text}>Welcome</Text>)}
          
          </View>
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
          <Text style={styles.text}>Best Selling</Text>
          <Text style={styles.text2}>See all</Text>
        </View>
        <ScrollView style={styles.cards} horizontal showsHorizontalScrollIndicator={false}>
        
          
        {dynamic.map((item, index)=>{
            if (item.sales>50) {
              return(
                <View key={index}>
                  <FoodCard image={item.image} name={item.name} price={item.price} press={()=>{navigation.navigate('Detail',item)}} />
                </View>

              )
              
            }
          }
        )}
          

        </ScrollView>
        <View style={styles.header2}>
          <Text style={styles.text}>Exclusive Offer</Text>
          <Text style={styles.text2}>See all</Text>
        </View>
        <View style={styles.cards}>
          
          {dynamic.map((item, index)=>
          <View key={index}>
            <FoodCard image={item.image} name={item.name} price={item.price} press={()=>{navigation.navigate('Detail',item)}}/>
          </View>)}
        </View></>):( <>
        <Text style={styles.text}>Search Results</Text>
        <View style={styles.cards}>
          
          {searchData.map((item, index)=>
          <View key={index}>
            <FoodCard image={{uri:item.image[0]}} name={item.name} price={item.price} press={()=>{navigation.navigate('Detail',item)}}/>
          </View>)}
        </View></>)}
      </View>
 
    </ScrollView>
    </View>
  );
}
