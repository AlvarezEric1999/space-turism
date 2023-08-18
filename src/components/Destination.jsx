import backgroundMobile from '../../public/assets/destination/background-destination-mobile.jpg'
import backgroundDesktop from '../../public/assets/destination/background-destination-desktop.jpg'
import backgroundTablet from '../../public/assets/destination/background-destination-tablet.jpg'
import { NavLink , Outlet} from 'react-router-dom'

export const Destination = () => {
  return (
    <section>
        <picture>
            <source media='(max-width:425px)' srcSet={backgroundMobile}></source>
            <source media='(min-width:1024px)' srcSet={backgroundDesktop} ></source>
            <source media='(min-width:768px)' srcSet={backgroundTablet} ></source>
            <img src={backgroundMobile}></img>
        </picture>

      <h2 className=' w-[200px] uppercase text-center font-Barlow  absolute top-[90px] left-0 right-0 mx-auto text-Secondary-color' > 01 Pick your destination</h2>

        <div className=' w-[200px] absolute top-[350px] right-0 left-0 mx-auto '>
            <ul className=' w-full flex justify-between font-Barlow text-Secondary-color' >
                <li className=' pb-4 text-[14px] '><NavLink to='Moon' >MOON</NavLink></li>
                <li className=' text-[14px]'><NavLink to='Mars'>MARS</NavLink></li>
                <li className='text-[14px]'><NavLink to='Europa'>EUROPA</NavLink></li>
                <li className=' text-[14px]'><NavLink to='Titan'>TITAN</NavLink></li>
            
            </ul>
        </div>
    
        <Outlet/>
    
    </section>
  )
}
