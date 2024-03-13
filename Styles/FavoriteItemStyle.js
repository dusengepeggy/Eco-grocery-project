import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex:1,
 
    },
    itemcard:{
        paddingVertical:10,
        borderBottomColor: '#EFF0EF',
        borderBottomWidth: 1,
        marginVertical: 5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    image:{
        width:'30%',
        height:100,
      },
      text1:{
        fontSize:15,
        fontWeight:'bold',
      },
      text2:{
        fontSize:15,
        color:'gray'
      },
      text3:{
        fontSize:17,
        fontWeight:'bold',
      },
      money:{
        flexDirection:'row',
        justifyContent:'center',
        
      },
      textcard:{
        width:'30%',
      }


})