import { StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white', 
        margin:15,
        padding:15,  
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