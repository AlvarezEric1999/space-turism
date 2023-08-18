import { useState } from 'react'
import { NavBar } from "./Navbar"
import menuLogo from '../../public/assets/shared/icon-hamburger.svg'


export const Header = ()=> {
  
  
  const [state, setState] = useState(true)

  const handleMenu = ()=>{
      setState(!state)
  }
  


 
    

    return (

        <header className="flex  w-full absolute justify-between items-center z-50 p-6  lg:p-0">
          <NavBar handleMenu={handleMenu} state={state} ></NavBar>
        
          <img src={menuLogo} className={`tablet:hidden  ${state ? '' : 'hidden' } `} onClick={handleMenu} ></img>
            
        </header>
    )
}