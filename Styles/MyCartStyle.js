import { Dimensions, StyleSheet } from "react-native";
const {width,height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
container:{
    flex:1,
    paddingHorizontal:15,
    height:height,
    width:width,
    paddingTop:80,

},
    title:{
        fontSize:18,
        fontWeight:'bold',
        padding:20,
        paddingBottom:15,     
        textAlign:'center',

    },
    button:{
        backgroundColor:'#FE724C',
        justifyContent:'space-between',
        padding:20,
        borderRadius:5,
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
      },
      buttontext:{
        fontSize:17,
        fontWeight:'bold',
        color:'white',
      },
      buttonText:{
        // backgroundColor:'#9EB1A9'
        backgroundColor:  'rgba(158, 177, 169, 0.4)',
        borderRadius:20,
        paddingHorizontal:10,
      },
      buttoncard:{
      paddingVertical:20,
      display:'flex',
      gap:30,
      },

})