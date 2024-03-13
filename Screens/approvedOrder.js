import { View,Text,TouchableOpacity,Image } from "react-native";
var img=require("../assets/check2.gif")
export default function Sucessful() {

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:15}}>
            <Image source={img} style={{width:300,height:300}}/>
            <Text style={{fontSize:25,fontWeight:'500',color:'#000000',textAlign:"center",width:"80%"}}>Your order has been accepted</Text>
            <Text style={{fontSize:16,fontWeight:'300',color:'gray',textAlign:"center",width:"80%",marginBottom:30}}>Your item has been packed an is on the way to be delivered</Text>
            <TouchableOpacity style={{width:"90%",padding:15,borderRadius:10,backgroundColor:'#FECB4C',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'#ffffff'}}>Track order</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:20,color:'#000000'}}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    )

}