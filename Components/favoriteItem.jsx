import {Text, View,Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { styles } from '../Styles/FavoriteItemStyle'
export default function FavoriteItem({image,name,caption,price}) {
  return (
<View style={styles.container}>
<View style={styles.itemcard}>
<Image style={styles.image} source={image}/>
<View style={styles.textcard}>
<Text style={styles.text1}>{name}</Text>
<Text style={styles.text2}>{caption}</Text>
</View>
<View style={styles.money}>
<Text style={styles.text3}>{price}</Text> 
<Icon name="chevron-right" type="material-community"/> 
</View>
</View>
    </View>
  )
}

