import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../Styles/ProfileStyle'
import { Icon } from 'react-native-elements'


export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
       {/* <TouchableOpacity style={styles.icon} onPress={()=>navigation.goBack()}><Icon name='arrow-left' type='material-community'size={35}/></TouchableOpacity> */}
      <View style={styles.profilePart1}>
       <View style={styles.profiles}>
        <View style={styles.profile}>
          <Image source={require('../assets/Profile.jpg')} style={styles.profilePic}/>
        </View>
        <View style={styles.text1}><Text style={styles.text2}>Jennifer Doe</Text></View>
        <Text style={styles.text}>doe.jennifer@gmail.com</Text>
        </View>
        <View style={styles.headers}>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.text2}>Shipment</Text>
            <Text style={styles.text3}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header}>
          <Text style={styles.text2}>My Cart</Text>
          <Text style={styles.text3}>15</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header}>
          <Text style={styles.text2}>Shipment</Text>
            <Text style={styles.text3}>5</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profilePart2}>
        <Text style={styles.text2}>My Account</Text>
       <View>
       <View style={styles.iconSet}>
      <View style={styles.icon1}>
        <Icon name={'pencil'} type='material-community' color={'#FE724C'} size={27}/>
      </View>
      <View style={styles.texting1}>
        <Text style={styles.texting2}>Edit Profile</Text>
      </View>
      <TouchableOpacity style={styles.iconA}>
        <Icon name={'chevron-right'} type='material-community' size={27}/>
      </TouchableOpacity>
    </View>
    <View style={styles.iconSet}>
      <View style={styles.icon2}>
        <Icon name={'ticket-percent'} type='material-community' color={'#47AD6D'} size={27}/>
      </View>
      <View style={styles.texting1}>
        <Text style={styles.texting2}>Coupon</Text>
      </View>
      <TouchableOpacity style={styles.iconA}>
        <Icon name={'chevron-right'} type='material-community' size={27}/>
      </TouchableOpacity>
    </View>
    <View style={styles.iconSet}>
      <View style={styles.icon3}>
        <Icon name={'credit-card-outline'} type='material-community' color={'#FECC4C'} size={27}/>
      </View>
      <View style={styles.texting1}>
        <Text style={styles.texting2}>Payment Cards</Text>
      </View>
      <TouchableOpacity style={styles.iconA}>
        <Icon name={'chevron-right'} type='material-community' size={27}/>
      </TouchableOpacity>
    </View>
       </View>
      </View>
      
    </View>
  )
}
