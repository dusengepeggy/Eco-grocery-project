import { Text, View,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import trackOrder from './trackOrder';
import { styles } from '../Styles/MyCartStyle';
import MycartItem from '../Components/MycartItem'

export default function Mycart({navigation}) {
    const products=[
        {
            id:1,
            image:require('../assets/spritecan.jpg'),
            name:'Sprite can',
            caption:'325ml,price',
            price: '500$'
        },
        {
            id:2,
            image:require('../assets/orange.png'),
            name:'Fanta',
            caption:'orange',
            price: '200$'
        },
        {
            id:3,
            image:require('../assets/apple juice.jpg'),
            name:'Apple Juice',
            caption:'apple',
            price: '300$'
        },
        {
            id:4,
            image:require('../assets/coke.jpeg'),
            name:'Cocacola',
            caption:'Coke',
            price: '205$'
        },


      ]


  return (
    <View style={styles.container}>
    <Text style={styles.title}>
    My cart
</Text>
<FlatList 
        data={products}
        renderItem={({item})=>  <MycartItem name={item.name} caption={item.caption} image={item.image} price={item.price} /> }
        keyExtractor={item => item.id}
        />
<View style={styles.buttoncard}>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('CheckOut')}>
      <TouchableOpacity style={styles.buttonText}><Text style={styles.buttontext} >4</Text></TouchableOpacity>
     <Text style={styles.buttontext}>Go to check out</Text> 
     <TouchableOpacity style={styles.buttonText}><Text style={styles.buttontext}>$12.96</Text></TouchableOpacity>
      </TouchableOpacity>
      </View>
      </View>
  )
}
