import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Search from "./Components/Search";
import FoodCard from "./Components/FoodCard";
import Sucessful from "./Screens/approvedOrder";
import Home from "./Screens/Home";
import Splash from "./Screens/Splash";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchPage from "./Screens/SearchPage";
import MyCart from "./Screens/MyCart";
import Favorite from "./Screens/Favorite";
import Profile from "./Screens/Profile";
import trackOrder from "./Screens/trackOrder"
import Product from "./Screens/Product"
import CheckOut from "./Screens/sus";

import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => focused?(<View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              display: "flex",
              backgroundColor: "#FECC4C",
              top: -30,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 4, height: 4 },
              shadowColor: "#47AD6D",
              shadowOpacity: 0.5,
            }}
          >
            <Icon
              name="home-outline"
              type="material-community"
              size={30}
              color="white"
            />
          </View>): (
            <Icon
              name="home-outline"
              type="material-community"
              size={30}
              color="#47AD6D"
              
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({ focused }) =>focused?(<View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              display: "flex",
              backgroundColor: "#FECC4C",
              top: -30,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 4, height: 4 },
              shadowColor: "#47AD6D",
              shadowOpacity: 0.5,
            }}
          >
            <Icon
              name="magnify"
              type="material-community"
              size={30}
              color="white"
            />
          </View>):(
            <Icon
              name="magnify"
              type="material-community"
              size={30}
              color="#47AD6D"
              
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={MyCart}
        options={{
          tabBarIcon: ({ focused }) => focused? (
            
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                display: "flex",
                backgroundColor: "#FECC4C",
                top: -30,
                justifyContent: "center",
                alignItems: "center",
                shadowOffset: { width: 4, height: 4 },
                shadowColor: "#47AD6D",
                shadowOpacity: 0.5,
              }}
            >
              <Icon
                name="cart-outline"
                type="material-community"
                size={30}
                color="white"
              />
            </View>
          ):(<Icon
            name="cart-outline"
            type="material-community"
            size={30}
            color="#47AD6D"
            
          />),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) =>focused?(<View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              display: "flex",
              backgroundColor: "#FECC4C",
              top: -30,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 4, height: 4 },
              shadowColor: "#47AD6D",
              shadowOpacity: 0.5,
            }}
          >
            <Icon
              name="heart-outline"
              type="material-community"
              size={30}
              color="white"
            />
          </View>): (
            <Icon
              name="heart-outline"
              type="material-community"
              size={30}
              color="#47AD6D"
              
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>focused?(<View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              display: "flex",
              backgroundColor: "#FECC4C",
              top: -30,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 4, height: 4 },
              shadowColor: "#47AD6D",
              shadowOpacity: 0.5,
            }}
          >
            <Icon
              name="account-outline"
              type="material-community"
              size={30}
              color="white"
            />
          </View>): (
            <Icon
              name="account-outline"
              type="material-community"
              size={30}
              color="#47AD6D"
              
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const TopNavigation = () => {
  return (
    <Top.Navigator
    screenOptions={{
      tabBarIndicatorStyle:{
        backgroundColor:'#47AD6D',
        width:40,
        left:80,
        bottom:7
      },
      tabBarLabelStyle:{
        fontWeight:'bold',
        fontSize:16
      },
      tabBarStyle:{
        borderColor:'white',
       
        

      }
    }}>
      <Top.Screen name="SignUp" component={Signup} />
      <Top.Screen name="Login" component={Login} />
    </Top.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Enter"
          component={TopNavigation}
          options={{
            headerShown: true,
            headerStyle: {
              height: 300,
            },
            headerRight: () => (
              <View
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "white",
                  borderRadius: 10,
                  shadowOffset: { width: 4, height: 3 },
                  shadowColor: "gray",
                  shadowOpacity: 0.3,
                  position: "absolute",
                  right: 170,
                  top:20,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="cart-outline"
                  type="material-community"
                  size={50}
                  color={"#47AD6D"}
                />
              </View>
            ),
            headerTitle: "ECO GROCERY",
            headerBackTitleVisible: false,
            headerTintColor: "#47AD6D",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 27,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen name="Home1" component={TabNavigation} />
        <Stack.Screen name="Track" component={trackOrder} />
        <Stack.Screen name="Detail" component={Product} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Aprrove" component={Sucessful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
