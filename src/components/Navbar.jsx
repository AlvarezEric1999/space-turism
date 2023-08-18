import { useState } from 'react'
import logo from '../../public/assets/shared/logo.svg'
import closeLogo from '../../public/assets/shared/icon-close.svg'
import { Link , NavLink} from 'react-router-dom'

export const NavBar = ({handleMenu,state})=>{

 
    return(

        <nav className='w-full flex relative items-center justify-between laptop:pl-8 laptop:pt-8'>   
        
           <Link to='/home' ><img className='w-[50px] h-[50px]' src={logo}></img></Link>
        
           <div className='laptop:w-[473px] laptop:h-[1px] laptop:absolute laptop:left-[100px] laptop:z-10 bg-Secondary-color/90 '></div>

            <ul className={`absolute tablet:static  bg-Secondary-color/10 backdrop-filter backdrop-blur-lg  ${state ? 'hidden' : ''}  px-8 h-screen tablet:py-0 py-20 top-[-30px] left-[100px] tablet:w-auto w-[250px]  laptop:w-[830px] tablet:h-[96px] `}>
               
                <div className='flex flex-col tablet:flex-row  py-8 l laptop:justify-center '>
                    <Link to='/' className='py-2 font-Barlow text-Secondary-color uppercase tablet:pr-4 '><span className='pr-4 text-third-color '>00</span>home</Link>
                    <Link  to='/destination' className='py-2 font-Barlow  text-Secondary-color uppercase tablet:pr-4 '><span className='pr-4 text-third-color  '>01</span>destination</Link>
                    <Link   to='/crew' className='py-2 font-Barlow text-Secondary-color uppercase tablet:pr-4 '><span className='pr-4 text-third-color  '>02</span>crew</Link>
                    <Link  to='/technology' className='py-2 font-Barlow text-Secondary-color uppercase tablet:pr-4'><span className='pr-4 text-third-color '>03</span>technology</Link>
                </div>  
                
                <li className='inline-block absolute tablet:hidden tablet:static top-[45px] right-[25px] cursor-pointer' onClick={handleMenu} ><img src={closeLogo}></img></li>
            </ul>


          

        </nav>
    )
}