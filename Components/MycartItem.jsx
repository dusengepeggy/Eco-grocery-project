import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { styles } from './Styles/MyCartItemStyles'
export default function MycartItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={ require('../assets/apple2.jpg')}/>
        <View >
        <Text style={styles.text}>Bell pepper red</Text>
        <Text style={styles.caption}>1kg Price</Text>
        <View style={styles.icons}>
          <Icon style={styles.icon} name="minus" type="material-community"/>
          <Text style={styles.text}>4</Text>
          <Icon style={styles.icon} name="plus" color="#47AD6D" type="material-community"/>
        </View>
        </View>
        <View style={styles.contents}>
        <Icon name='delete' color="#FE724C" style={styles.topicon}></Icon>
        <Text style={styles.text}>$4.99</Text>
        </View>
      </View>
    </View>
  )
}
