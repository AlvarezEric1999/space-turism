import { UseGetData } from "../../hooks/UseGetData"
import { crew } from "../../data"
import {CrewItem} from '../components/CrewItem'

export const CrewContainer = () => {

    const [state, name] = UseGetData(crew)
    console.log(state,name)

  return (
    <section className="w-[300px] absolute top-[400px] text-center left-0 right-0 mx-auto" >
    


    {state ? <CrewItem data={...state}/>: <p>cargando</p>}
    
    </section>
  )
}
