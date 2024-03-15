import { Dimensions, StyleSheet } from "react-native";
const {width,height} = Dimensions.get('screen');
export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white', 
        height:height,
        width:width,
        paddingHorizontal:20,
        paddingTop:80,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        padding:10,
        paddingBottom:20,
        textAlign:'center',
        borderBottomColor: '#EFF0EF',
        borderBottomWidth: 1,
    },
    button:{
        backgroundColor:'#FE724C',
        justifyContent:'center',
        padding:15,
        borderRadius:5,
        alignItems:'center'
      },
      buttontext:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        color:'white'
      },
      buttoncard:{
      paddingVertical:20
      },
})