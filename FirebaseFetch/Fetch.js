import { getDocs } from "firebase/firestore"
import { colRef } from "../fireBase/fireBase.comfiguration"



export const GetData= async()=>{
    const Fruits=[]
    try {
      const stock=  await getDocs(colRef)
      stock.forEach((doc)=>{
        Fruits.push({...doc.data(), id:doc.id})
      })
      
    } catch (error) {
        console.error(error);
    }
    // console.log(Fruits)
    return Fruits
}