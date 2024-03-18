import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

const InputComp = ({ label, placeholder, iconName, value, onChangeText, secureTextEntry, togglePasswordVisibility }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
        
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="gray"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {iconName === 'ios-mail' ? (
          <AntDesign name="check" size={20} color="#47AD6D" style={styles.icon} />
        ) : (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <MaterialCommunityIcons name={iconName} size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width:'90%',
  },
  label: {
    fontSize: 16,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#47AD6D',
  },
});

export default InputComp;
