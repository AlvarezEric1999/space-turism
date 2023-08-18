import { Outlet, NavLink } from 'react-router-dom'
import BackgroundDesktop from '../../public/assets/technology/background-technology-desktop.jpg'
import BackgroundMobile from '../../public/assets/technology/background-technology-mobile.jpg'
import BackgroundTablet from '../../public/assets/technology/background-technology-tablet.jpg'

export const Technology = () => {
  return (
    <section>
    

    <picture>
    
    <source media='(max-width:425px)' srcSet={BackgroundMobile} ></source>
    <source media='(min-width:426px)' srcSet={BackgroundDesktop} ></source>
    <source media='(min-width:780px)' srcSet={BackgroundTablet} ></source>
    
    
    <img src={BackgroundMobile}></img>
    </picture>
    
    <h2 className=' w-[200px] uppercase text-center font-Barlow  absolute top-[90px] left-0 right-0 mx-auto text-Secondary-color' > SPACE LAUNCH 101</h2>
    
    
    <div className=' w-[200px] absolute top-[350px] right-0 left-0 mx-auto '>
    <ul className=' w-full flex justify-between font-Barlow ' >
    <li className=' w-[40px] h-[40px] rounded-full grid  place-content-center text-[14px] bg-third-color '><NavLink to='Launch vehicle' className='text-bg-black'>1</NavLink></li>
    <li className='   w-[40px] h-[40px] rounded-full grid  place-content-center text-[14px] bg-third-color '><NavLink to='Spaceport'>2</NavLink></li>
    <li className='  w-[40px] h-[40px] rounded-full grid  place-content-center text-[14px] bg-third-color '><NavLink to='Space capsule'>3</NavLink></li>
    
    </ul>
    </div>
    
    <h2 className=' w-[200px] uppercase text-center font-Barlow  absolute top-[420px] left-0 right-0 mx-auto text-Secondary-color' > the terminology</h2>
    
    <Outlet></Outlet>
    
    </section>
  )
}
