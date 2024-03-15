import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingTop:15,
        paddingHorizontal:10
    },
    products:{
        height:250,
        width:170,
        shadowOffset:{width: 3, height: 4},
        shadowColor:'gray',
        shadowOpacity:0.3,
        borderRadius:15,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'whitesmoke',
        
        
    },
    products2:{
        height:220,
        width:170,
        shadowOffset:{width: 3, height: 4},
        shadowColor:'gray',
        shadowOpacity:0.3,
        borderRadius:15,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'whitesmoke',
        
        
    },
    price1:{
        paddingHorizontal:15
    },
    product:{
        height:130,
        width:'100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    text:{
        fontWeight:'bold',
        fontSize:17,
        paddingVertical:7
        
    },
    text2:{
        color:'gray',
        paddingVertical:7
    },
    add:{
        height:35,
        width:35,
        backgroundColor:'#FECC4C',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    price:{
        display:'flex',
        flexDirection:'row',
        gap:60
    },
    text3:{
        fontWeight:'bold',
        fontSize:17,
        paddingVertical:25,
        textAlign:'center'
    }


})