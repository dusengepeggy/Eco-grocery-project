import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container:{
        paddingTop:80,
        paddingHorizontal:15,
        paddingBottom:100
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
    },
    cards:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
})