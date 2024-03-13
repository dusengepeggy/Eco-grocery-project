import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Search from "./Components/Search";
import FoodCard from "./Components/FoodCard";
import Home from "./Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SearchPage from "./Screens/SearchPage";
import MyCart from "./Screens/MyCart";
import Favorite from "./Screens/Favorite";
import Profile from "./Screens/Profile";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const CustomButton=({children, onPress})=>{
//   <Pressable onPress={onPress} style={{
//     position:'absolute',
//     display:'flex',
//     top:-30,
//     justifyContent:'center',
//     alignItems:'center',
//   }}>
//     <View 
//     style={{
//       height:50,
//     width:50,
//       backgroundColor:'#FECC4C',
//       borderRadius:25,
//     }}>
//       {children}
//     </View>
//     <Icon name="cart-outline" type="material-community" size={40}/>

//   </Pressable>
// }

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
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              type="material-community"
              size={30}
              color="#47AD6D"
              style={
                focused
                  ? { borderBottomWidth: 5, borderBottomColor: "#47AD6D" }
                  : null
              }
            />
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchPage} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name="magnify"
            type="material-community"
            size={30}
            color="#47AD6D"
            style={
              focused
                ? { borderBottomWidth: 5, borderBottomColor: "#47AD6D" }
                : null
            }
          />
        ),
      }}/>
      <Tab.Screen name="Cart" component={MyCart} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{width:70, height:70, borderRadius:35,display:'flex',  backgroundColor:'#FECC4C',
          top:-30,
    justifyContent:'center',     
    alignItems:'center',
    shadowOffset:{width:4, height:4},
    shadowColor:'#47AD6D',
    shadowOpacity:0.5}}>
          <Icon
            name="cart-outline"
            type="material-community"
            size={30}
            color="white"
          />
          </View>
        ),
       
      }}/>
      <Tab.Screen name="Favorite" component={Favorite} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name="heart-outline"
            type="material-community"
            size={30}
            color="#47AD6D"
            style={
              focused
                ? { borderBottomWidth: 5, borderBottomColor: "#47AD6D" }
                : null
            }
          />
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name="account-outline"
            type="material-community"
            size={30}
            color="#47AD6D"
            style={
              focused
                ? { borderBottomWidth: 5, borderBottomColor: "#47AD6D" }
                : null
            }
          />
        ),
      }}/>
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home1" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
