import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"


export const UseGetData = (array)=>{

    const [state , setState] = useState()

    const {name} = useParams()
    
    
    const result = async () => {
      try {
        const data = await array.filter((el) => el.name === name)
        setState(data)
    
      } catch (error) {
        console.log(error)
      }}
    
      
    useEffect(
        ()=>{
            result()
        },[name])



        return [
            state,name
            
        ]


}