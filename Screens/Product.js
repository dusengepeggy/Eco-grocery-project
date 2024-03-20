import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import { styles } from "../Styles/ProductStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Product({ navigation, route }) {
  const detail = route.params;
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topicons}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon name="chevron-left" color="#feecbd"></Icon>
          </TouchableOpacity>
        </View>
        <Icon
          name="heart-outline"
          type="material-community"
          color="gray"
        ></Icon>
      </View>
      <View>
        <View style={styles.slidecard}>
          <SliderBox
            images={detail.image}
            sliderBoxHeight={200}
            autoplay
            circleLoop
            resizeMode={"contain"}
            dotColor="#73C08F"
            inactiveDotColor="white"
            dotStyle={{
              width: 15,
              height: 5,
              borderRadius: 5,
            }}
          />
        </View>

        <Text style={styles.text}>{detail.name}</Text>
        <Text style={styles.text2}>In Stock: {detail.piecesInStock}</Text>

        <View style={styles.icons2}>
          <Text style={styles.text}>${detail.price}</Text>
          <View style={styles.row}>
            <Icon name="minus" type="material-community"></Icon>
            <View style={styles.number}>
              <Icon name="numeric-1" type="material-community"></Icon>
            </View>
            <Icon name="plus" type="material-community" color="#73C08F"></Icon>
          </View>
        </View>

        <View style={styles.detail}>
          <View style={styles.row}>
            <Text style={styles.text1}>Product Detail</Text>
            <Icon name="chevron-down" type="material-community" />
          </View>
          <Text style={styles.text2}>
            {detail.description}
          </Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.row}>
            <Text style={styles.text1}>Nutritions</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.nutrition}>
                <Text style={styles.text2}>100gr</Text>
              </TouchableOpacity>
              <Icon name="chevron-right" type="material-community" />
            </View>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.row}>
            <Text style={styles.text1}>Reviews</Text>
            <Icon name="chevron-right" type="material-community" />
          </View>
        </View>
      </View>
      <View style={styles.buttoncard}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
