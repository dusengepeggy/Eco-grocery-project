import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Enter');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../assets/g1.jpg')} style={styles.imageBackground1} />
      <View style={styles.contentContainer}>
        <Image source={require('../assets/icon1.jpg')} style={styles.logo} />
        <Text style={styles.appName}>ECO GROCERY</Text>
      </View>
      <ImageBackground source={require('../assets/g2.jpg')} style={styles.imageBackground2}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
  },
  imageBackground1: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  imageBackground2: {
    width: '100%',
    height: 400,
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
  },
  logo: {
    width: 200,
    height: 100,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#47AD6D',
    top: 40,
  },
});
