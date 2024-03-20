import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Icon } from "react-native-elements"


var polaire = require('../assets/profilepic.jpeg')


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topNav: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingBottom:20,
    borderEndEndRadius: 20,
    borderEndStartRadius: 20,
    width: "100%",
    alignSelf: 'center',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  icon: {
    height: 40,
    width: 40,
    shadowOffset: { width: 3, height: 4 },
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    borderRadius: 5,
    backgroundColor: 'white',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    alignSelf: 'center'
  },
  down: {
    bottom: 30,
    position: "absolute",
    width: "95%",
    alignSelf: "center",
    padding: 10,
    gap:10

  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20
  },
  contactSub:{
    display: "flex",
    flexDirection: "row",
    gap:10
  },
  phoneContainer:{
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#FECB4C',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'

  },
  order:{
    backgroundColor:"#FE724C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    padding: 20
  },
  ViewButton:{
    borderRadius: 5,
    backgroundColor: '#FECB4C',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    padding:10

  }
});

export default MapPage = ({navigation}) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

  })
  const userLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    else {
      const location = await Location.getCurrentPositionAsync();
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }



  }

  useEffect(() => {
    userLocation()
  }, [])


  return (
    <>
      <StatusBar style="dark" />


      <View style={styles.container}>


        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={mapRegion}

        >

          <Marker coordinate={mapRegion} title='Marker' />

        </MapView>

        <View style={styles.topNav}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="chevron-left" type="material-community" size={26} color={'#FECB4C'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>
            Track order
          </Text>

          <View style={styles.icon}>
            <Icon name="bell-outline" type="material-community" size={26} color={'#FECB4C'} />
          </View>




        </View>
        <View style={styles.down}>
          <View style={styles.contactContainer} >
            <View style={styles.contactSub}>
              <Image source={polaire} style={{ width: 50, height: 50, borderRadius: 3 }} resizeMode='stretch' />
              <View style={{gap:2}}>
                <Text >Name </Text>
                <Text style={{fontSize:12}} >ID-123456789</Text>
                <Text style={{fontSize:11, color:"gray"}}>Food courier </Text>
              </View>
            </View>
            <View style={styles.phoneContainer}  >
              <Icon name="phone" type="material-community" size={15} color={'white'} />
            </View>
          </View>

          <View style={styles.order}>
            <View>
              <Text style={{fontSize:12, color:"white",fontWeight:'200'}}>Order code: 2345678</Text>
              <Text style={{fontSize:12, color:"white",fontWeight:'200'}}>Arrival time: 15 min</Text>
            </View>
            <TouchableOpacity style={styles.ViewButton}>
              <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>View</Text>
            </TouchableOpacity>

          </View>


        </View>
      </View>
    </>
 
  )
};
