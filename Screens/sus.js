import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Picker } from '@react-native-picker/picker';
import {
    View,
    Text,
    TouchableOpacity,

    Dimensions,
    ScrollView,
    Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

var mastercard = require("../assets/mastercard.png")
var visa = require("../assets/visa.png")
var paypal = require("../assets/paypal.png")
export default function CheckOut({ navigation }) {
    const deliveryMethod = [

        {
            name: "standard",
            price: 2.89,
        },
        {
            name: "express",
            price: 3.09,
        },
        {
            name: "premium",
            price: 5.00,
        },
        {
            name:"exclusive",
            price:10.00, 
        }
    ];
    const [selectedDelivery, setSelectedDelivery] = useState({
        name: "standard",
        price: 2.89,
    });
    const [show,setShow]=useState("none")
    const [checked, setChecked] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("paypal");
    const [price, setPrice] = useState()
    const handlePaymentChange = (value) => {
        setPaymentMethod(value);
    };
    var [icon_name,setIconName]=useState()
        React.useEffect(()=>{
        if (show=="none") {

           setIconName("down")
        } else {
            setIconName("up")
            
        }

    },show)

    return (
        <ScrollView style={{ backgroundColor: "#F2F2F2", }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#F2F2F2",
                    flexDirection: "column",
                    // justifyContent: "space-around",
                }}
            >
                <View
                    style={{
                        paddingTop: 60,
                        paddingHorizontal: 20,
                        backgroundColor: "transparent",
                        paddingBottom: 30,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",

                        width: "100%",
                        borderEndEndRadius: 20,
                        borderEndStartRadius: 20,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            height: 40,
                            width: 40,
                            shadowOffset: { width: 3, height: 4 },
                            shadowColor: "gray",
                            shadowOpacity: 0.4,
                            borderRadius: 5,
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <AntDesign name="left" size={24} color="#FECB4C" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "500",
                            color: "#000",
                            alignSelf: "center",
                        }}
                    >
                        CheckOut
                    </Text>
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            shadowOffset: { width: 3, height: 4 },
                            shadowColor: "gray",
                            shadowOpacity: 0.4,
                            borderRadius: 5,
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <FontAwesome name="bell-o" size={24} color='#FECB4C' />
                    </View>
                </View>
                <View >
                    <View
                        style={{
                            backgroundColor: "white",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: 20,
                            marginVertical: 10,
                            height: 95,
                            alignItems: "center",
                            padding: 13,
                            borderRadius: 10,
                        }}
                    >
                        <View>
                            <Text style={{ fontWeight: "500", fontSize: 20 }}>
                                Delivery method
                            </Text>
                            <Text style={{ marginTop: 8 }}>{selectedDelivery.name}  (+ {selectedDelivery.price.toString()}$)</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=>{
                                if (show=="none") {
                                    setShow("flex")
                                } else {

                                    setShow("none")
                                }
                            }}
                            style={{
                                width: 32,
                                height: 42,
                                backgroundColor: "#FECC4A",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 5,
                            }}
                        >
                 
                            <AntDesign 
                                
                                name={icon_name}
                                size={15}
                                color="white"
                                style={{ textAlign: "center" }}


                            />
                        </TouchableOpacity>

                    </View>
                    <Picker
                        mode="dropdown"
                        
                        style={{
                            flex: 1,
                            width: "90%",
                            alignSelf: "center",
                            display:show,
                            backgroundColor:"white",
                            borderRadius:10,
                            

                        }}
                        
                        
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedDelivery({
                                name: deliveryMethod[itemIndex].name,
                                price: deliveryMethod[itemIndex].price,


                            })
            
                        }

                        }


                    >
                        {deliveryMethod.map((item, index) => (
                            <Picker.Item
                                color="black"
                                key={index}
                                label={`${item.name} (+ ${item.price} $)`}
                                value={item.name}
                            />
                        ))}
                    </Picker>

                    <View
                        style={{
                            backgroundColor: "white",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginHorizontal: 20,
                            marginVertical: 10,
                            height: 95,
                            alignItems: "center",
                            borderRadius: 10,
                        }}
                    >
                        <View>
                            <Text style={{ fontWeight: "500", fontSize: 20 }}>
                                Delivery location
                            </Text>
                            <Text style={{ marginTop: 8 }}>
                                2464 Royal in Mesa. New Jersey 454863{" "}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 32,
                                height: 42,
                                backgroundColor: "#FECC4A",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 5,
                            }}
                        >
                            <Entypo
                                name="edit"
                                size={15}
                                color="white"
                                style={{ textAlign: "center" }}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flex: 2,
                        marginTop: 20,
                        backgroundColor: "white",
                        borderRadius: 20,
                        marginBottom: 10,

                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontWeight: "500",
                                textAlign: "center",
                                fontSize: 20,
                                marginTop: 20,

                            }}
                        >
                            Payment method
                        </Text>
                        {/* <View style={{height:30}}></View> */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 10,
                                marginVertical: 10,
                                paddingHorizontal: 20


                            }}
                        >
                            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: 50,
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderColor: "#F2F2F2",
                                        borderWidth: 1,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Image source={paypal} />
                                </View>
                                <Text
                                    style={{
                                        fontWeight: "500",
                                        fontSize: 17,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                    }}
                                >
                                    Paypal
                                </Text>
                            </View>
                            <RadioButton.Android
                                value="paypal"
                                color="#FECC4A"
                                status={paymentMethod === "paypal" ? "checked" : "unchecked"}
                                onPress={() => handlePaymentChange("paypal")}

                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 10,
                                marginVertical: 10,
                                paddingHorizontal: 20
                            }}
                        >
                            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: 50,
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderColor: "#F2F2F2",
                                        borderWidth: 1,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Image source={mastercard} />
                                </View>
                                <Text
                                    style={{
                                        fontWeight: "500",
                                        fontSize: 17,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                    }}
                                >
                                    Mastercard
                                </Text>
                            </View>

                            <RadioButton.Android
                                value="mastercard"
                                color="#FECC4A"
                                status={
                                    paymentMethod === "mastercard" ? "checked" : "unchecked"
                                }
                                onPress={() => handlePaymentChange("mastercard")}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginVertical: 10,
                                paddingHorizontal: 20

                            }}
                        >
                            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: 50,
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#F2F2F2",
                                        borderRadius: 10,
                                    }}
                                >
                                    <Image source={visa} />
                                </View>
                                <Text
                                    style={{
                                        fontWeight: "500",
                                        fontSize: 17,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                    }}
                                >
                                    Visa
                                </Text>
                            </View>
                            <RadioButton.Android
                                value="visa"
                                color="#FECC4A"
                                status={paymentMethod === "visa" ? "checked" : "unchecked"}
                                onPress={() => handlePaymentChange("visa")}
                                style={{ alignSelf: "center" }}
                            />
                        </View>
                    </View>
                    <View style={{ height: 90 }}></View>
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            width: "100%",
                            paddingVertical: 5,
                            justifyContent: "space-around",
                            shadowOffset: { width: 0, height: -4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 4,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 20,
                            }}
                        >
                            <Text style={{ fontWeight: "500", fontSize: 20 }}>
                                Total Price
                            </Text>
                            <Text style={{ color: "#FECC4A" }}>$ 22.99</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#FECC4A",
                                width: "95%",
                                marginTop: 20,
                                height: 56,
                                borderRadius: 10,
                                margin: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onPress={()=>{
                                navigation.navigate("Aprrove")
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 25,
                                    fontWeight: "500",
                                    textAlign: "center",
                                    fontSize: 20,
                                }}
                            >
                                Confirm
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <StatusBar style="dark" />
                </View>
            </View>
        </ScrollView>
    );
}