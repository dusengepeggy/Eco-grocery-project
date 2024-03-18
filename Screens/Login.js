import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputComp from '../Components/InputComp';
import { FIREBASE_AUTH } from '../fireBase/fireBase.comfiguration';
import { signInWithEmailAndPassword } from 'firebase/auth';
 
export const authenticate = FIREBASE_AUTH;

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      email.trim() === '' ? 'Email is required' : !emailRegex.test(email) ? 'Invalid email' : ''
    );
  };

  const validatePassword = () => {
    setPasswordError(password.trim() === '' ? 'Password is required' : '');
  };

  const handleLogin = async () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          authenticate,
          email,
          password
        );
        const user = userCredential.user;

        const data = {
          email: user.email,
          uid: user.uid
        };
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem('user_data', jsonData);
        console.log('Data stored successfully!');
        navigation.navigate('Home1')
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          setEmailError('User not found. Please sign up first.');
        } else {
          console.error('Login error:', error);
        }
      }
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <StatusBar style="auto" />
     

        <View style={styles.inputContainer}>
          <InputComp
            label="Email"
           
            iconName="ios-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onBlur={validateEmail}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <InputComp
            label="Password"
           
            iconName={passwordVisible ? 'eye-off' : 'eye'}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            onBlur={validatePassword}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupLink}>
          Don't have an account?{' '}
          <Text style={styles.signupText} onPress={() =>
                        navigation.navigate('SignUp')
                      }>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#FFFFFF'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.1,
    shadowColor: 'gray'
  },
  topView: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 80,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    width: '90%',
    top: 50,
  },
  errorText: {
    color: 'red',
    marginHorizontal: 20,
  },
  appname: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#47AD6D',
    top: 30,
  },
  loginButton: {
    padding: 20,
    backgroundColor: '#FECC4C',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    top: 100,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  signupLink: {
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    top: 110,
  },
  signupText: {
    color: '#47AD6D',
    fontWeight: 'bold',
  },
});
