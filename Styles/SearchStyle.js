import { Dimensions, StyleSheet } from "react-native"
const width= Dimensions.get('screen').width
export const styles = StyleSheet.create({

    container:{
        paddingVertical:30,
        display:'flex',
        alignItems:'center'
        
    },
    input:{
        width:370,
        backgroundColor:'#DEDFDE',
        borderRadius:10,
        
   
    }
})