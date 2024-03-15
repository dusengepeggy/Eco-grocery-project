import { StyleSheet, Text, View ,Image, TouchableHighlight} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { styles } from '../Styles/MyCartItemStyles'

export default function MycartItem({name,image,caption,price}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#F9F9F9"
        // onPress={() => navigation.navigate('Product')}
        >
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={image}/>
        <View >
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.caption}>{caption}</Text>
        <View style={styles.icons}>
          <Icon style={styles.icon} name="minus" type="material-community"/>
          <Text style={styles.text}>4</Text>
          <Icon style={styles.icon} name="plus" color="#47AD6D" type="material-community"/>
        </View>
        </View>
        <View style={styles.contents}>
        <Icon name='delete' color="#FE724C" style={styles.topicon}></Icon>
        <Text style={styles.text}>{price}</Text>
        </View>
      </View>
      </TouchableHighlight>
    </View>
  )
}
