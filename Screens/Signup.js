import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputComp from '../Components/InputComp';
import { FIREBASE_AUTH } from '../fireBase/fireBase.comfiguration';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const authenticate = FIREBASE_AUTH;

const { height, width } = Dimensions.get('screen');

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
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

  const handleSignup = async () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      try {
        const response = await createUserWithEmailAndPassword(
          authenticate,
          email,
          password,
        );
      
        console.log(response.user.displayName);
        navigation.navigate('Login')
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email address is already in use. Please use a different email address.');
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView enabled={true} style={{flex:1}} behavior={Platform.OS==='ios'?'padding':'height'}>
    <ScrollView style={styles.main}>
     
        <StatusBar style="auto" />
       
     

      <View style={styles.inputContainer}>
        <InputComp
          label="Username"
       
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

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

      <Text style={styles.termsText}>
        By Continuing you agree to our <Text style={styles.linkText}>Terms of services</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignup}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginLink}>
          Already have an account?{' '}
          <Text style={styles.loginText} onPress={() =>
                        navigation.navigate('Login')
                      }>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main:{
    // height:height,
    backgroundColor:'#FFFFFF'
  },
  container: {
    alignItems: 'center',
    marginTop: height * 0.1,
    
  },
  logo: {
    width: width * 0.25,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#47AD6D',
    marginTop: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 40, // Adjusted marginTop to move input fields up
  },
  errorText: {
    color: 'red',
    marginHorizontal: 40,
  },
  termsText: {
    marginTop: 15,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#47AD6D',
  },
  signupButton: {
    padding: 20,
    backgroundColor: '#FECC4C',
    width: '90%',
    alignSelf: 'center',
    color: 'white',
    borderRadius: 10,
    marginTop: 40, 
  },
  signupButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:17
  },
  loginLink: {
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    color: '#47AD6D',
    fontWeight: 'bold',
  },
});

export default Signup;
