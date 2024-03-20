import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Search from "../Components/Search";
import { styles } from "../Styles/SearchPageStyle";
import SearchCard from "../Components/SearchCard";
import { GetData } from "../FirebaseFetch/Fetch";


export default function SearchPage({navigation}) {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [dynamic, setDynamic]= useState([])
  const Searching = () => {
    if (searchText.length > 0) {
      const filtering = dynamic.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchData(filtering);
    } else {
      setSearchData([]);
    }
  };

  React.useEffect(()=>{
    const ItemsInStock=async()=>{
      const allItems=await GetData()
    setDynamic(allItems)
    }
  ItemsInStock()
  },[])


  React.useEffect(() => {
    Searching();
  }, [searchText]);

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.text}>Find Products</Text>
      </View>
      <Search
        placeholder={"Find Products"}
        value={searchText}
        changeText={setSearchText}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cards}>
          {searchText.length > 0 ? (
            <View style={styles.cards}>
              {searchData.map((item, index) => (
                <View key={index}>
                  <SearchCard press={()=>{navigation.navigate('Detail', item)}}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.cards}>
              {dynamic.map((item, index) => (
                <View key={index}>
                  <SearchCard press={()=>{navigation.navigate('Detail',item)}}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
