import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop:40,
        margin:15,
        padding:15,
    
    },
    slidecard:{
    borderColor:'black',
    borderRadius:10,
    },
    topicons:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between'
    },
    arrow:{
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
      },
    
    image:{
      width:'90%',
      height:300,
    },
    text:{
      fontSize:18,
      fontWeight:'bold',
    },
    
    text1:{
      fontSize:15,
      fontWeight:'bold',
    },
    text2:{
      fontSize:15,
      color:'gray'
    },
    row:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      gap:10
    },
    icons2:{
      display:'flex',
      flexDirection:"row",
      justifyContent:'space-between',
      paddingVertical:20,
      borderBottomColor: '#EFF0EF',
      borderBottomWidth: 1,
    },
    detail:{
      paddingVertical:10,
      borderBottomColor: '#EFF0EF',
      borderBottomWidth: 1,
      marginVertical: 5,
    },
    button:{
      backgroundColor:'#FECC4C',
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
    number:{
      borderWidth:0.2,
      borderRadius:5,
      padding:2
    },
    nutrition:{
      backgroundColor:'#EDEDED',
      justifyContent:'center',
    }
    
    })