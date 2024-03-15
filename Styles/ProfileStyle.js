import { Dimensions, StyleSheet, Text, View } from 'react-native'
const height=Dimensions.get('screen').height


export const styles = StyleSheet.create({
    container:{
        height:height,
        backgroundColor:'rgba(71,173,109, 0.1)'
    },
    profilePart1:{
        height:400,
        paddingHorizontal:30,
        display:"flex",
        justifyContent:'center',
    },
    profiles:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center'
    },
    profile:{
        height:120,
        width:120,
        borderWidth:3,
        borderColor:'#47AD6D',
        padding:3,
        borderRadius:60
    },
    profilePic:{
        height:'100%',
        width:'100%',
        borderRadius:60
    },
   
    text1:{
        paddingVertical:20
    },
    text2:{
        fontSize:20,
        fontWeight:'bold'
    },
    text:{
        fontSize:16
    },
    icon:{
        top:70,
        left:30,
        alignItems:'flex-start'
    },
    headers:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        top:30
    },
    header:{
        display:'flex',
        alignItems:'center',
        gap:10
    },
    text3:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FE724C'
    },
     profilePart2:{
        backgroundColor:'white',
        flex:1,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        padding:25,

    },
    iconSet:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        paddingVertical:20,
        position:'relative'
    },
    texting2:{
        fontWeight:'bold',
        fontSize:18,
        top:15
    },
    icon1:{
        height:50,
        width:50,
        backgroundColor:'rgba(254,114,76, 0.1)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    icon2:{
        height:50,
        width:50,
        backgroundColor:'rgba(71,173,109, 0.1)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    icon3:{
        height:50,
        width:50,
        backgroundColor:'rgba(254,204,76, 0.1)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    iconA:{
        top:20,
        position:'absolute',
        right:0
    }
})
