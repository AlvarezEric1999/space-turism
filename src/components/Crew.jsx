import backgroundMobile from '../../public/assets/crew/background-crew-mobile.jpg'
import backgroundTablet from '../../public/assets/crew/background-crew-tablet.jpg'
import backgroundDesktop from '../../public/assets/crew/background-crew-desktop.jpg'
import { Outlet,NavLink } from 'react-router-dom'


export const Crew = () => {
  return (
    <section>

    <picture>
        <source media='(max-width:425px)' srcSet={backgroundMobile}></source>
        <source media='(min-width:426px)' srcSet={backgroundDesktop}></source>
        <source media='(min-width:780px)' srcSet={backgroundTablet} ></source>

        <img src={backgroundMobile}></img>
    
    </picture>


    <h2 className='w-[200px] uppercase text-center font-Barlow  absolute top-[90px] left-0 right-0 mx-auto text-Secondary-color '> 02 meet your crew</h2>
    

    <div className=' w-[200px] absolute top-[350px] right-0 left-0 mx-auto '>
    <ul className=' w-full flex gap-4 justify-center  font-Barlow text-Secondary-color' >

        
       
        <NavLink to='Mark Shuttleworth' ><li className=' text-[14px]  bg-white w-[10px] h-[10px] rounded-full '></li></NavLink>

        <NavLink  to='Douglas Hurley'> <li className='text-[14px] bg-Secondary-color w-[10px] h-[10px] rounded-full'></li></NavLink>
        
        <NavLink to='Victor Glover'><li className='text-[14px] bg-Secondary-color w-[10px] h-[10px] rounded-full '></li></NavLink>
        
        <NavLink to='Anousheh Ansari'><li className='text-[14px] bg-Secondary-color w-[10px] h-[10px] rounded-full'></li></NavLink>

    </ul>
</div>



    <Outlet></Outlet>
    
    </section>
  )
}

export default Crew