import { Dimensions, StyleSheet } from "react-native"

const height= Dimensions.get('screen').height

export const styles = StyleSheet.create({
    container:{
        height:height,
        paddingTop:80,
        paddingHorizontal:15,
        paddingBottom:100
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        paddingVertical:7
        
    },
    icon:{
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
    background:{
        width:385,
        height:180,
        borderRadius:20,
        overflow:'hidden'
    },
    imgBackground:{
       
        shadowOffset:{width:1, height:2},
        shadowColor:'gray',
        shadowOpacity:0.4,
        
    },
    text2:{
        color:'#47AD6D',
        fontSize:16,
        fontWeight:'bold'
    },
    header2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20
    },
    cards:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    texts:{
        position:'absolute',
        paddingHorizontal:15,
        width:400,
        height:180,
        backgroundColor:'rgba(255, 255, 255, 0.2)'

    },
    textA:{
        fontSize:20,
        fontWeight:'bold',
        letterSpacing:1,
        left:170,
        top:70,
    },
    textB:{
        fontSize:15,
        fontWeight:'bold',
        letterSpacing:1,
        color:'#47AD6D',
        left:180,
        top:70,
    },
    
})