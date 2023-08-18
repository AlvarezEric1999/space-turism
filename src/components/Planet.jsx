
import { destinations } from "../../data.js"
import { Item } from "./Item.jsx"
import { UseGetData } from "../../hooks/UseGetData.js"


export const Planet = () => {
const [state] = UseGetData(destinations)

  return (

    <div className="w-[300px] absolute top-[450px] text-center left-0 right-0 mx-auto">
     {state ? <Item data={...state}></Item> : <p>cargando</p> }   
    </div>
  )
}
