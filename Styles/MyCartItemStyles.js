import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
    // padding:20,
    flex:1,
        },
        imagecontainer:{
            padding:20,
            marginVertical: 5,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#f0eded',
            borderRadius:15,
            backgroundColor:'#f9f9f9'
           },
        image:{
        width:100,
        height:100,
        },
        text:{
          fontSize:18,
          fontWeight:'bold',
    
        },
        caption:{
          color:'gray'
    
        },
        icons:{
          display:'flex',
          flexDirection:'row',
          gap:10,
          alignItems:'center',
          paddingTop:10
        },
        icon:{
          borderColor:'gray',
          borderWidth:0.2,
          borderRadius:7,
          padding:7
        },
        contents:{
          gap:30
        },
        topicon:{
          height:40,
          width:40,
          shadowOffset:{width:3, height:4},
          shadowColor:'gray',
          shadowOpacity:0.4,
          borderRadius:5,
          backgroundColor:'white',
          display:"flex",
          alignItems:'center',
          justifyContent:'center'
    
        }
    })