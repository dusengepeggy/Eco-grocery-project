import { Text, View } from "react-native";
import React from "react";
import { styles } from "../Styles/SearchStyle";
import { TextInput } from "react-native-paper";

export default function Search({placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColor="#DEDFDE"
        theme={{ roundness: 10, colors:{primary:"transparent"} }}
        placeholder={placeholder} mode
        left={<TextInput.Icon icon={'magnify'} color={'#A8A8A8'} size={35}/>}
      />
    </View>
  );
}
