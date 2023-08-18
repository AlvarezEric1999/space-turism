import { UseGetData } from "../../hooks/UseGetData"
import { TecnologyItem } from "./TecnologyItem"
import {technology} from '../../data'

export const TechnologyContainer = () =>{

    const [state] = UseGetData(technology)

    console.log(state,'state')
    console.log(technology)

    return(
        <div className=" absolute top-[450px] text-center left-0 right-0 mx-auto" >
       
            {state ? <TecnologyItem data={...state}></TecnologyItem> : <p>cargando</p>}
         
        </div>
    )


}