import BackgroundMobile from '../../public/assets/home/background-home-mobile.jpg'
import BackgroundDesktop from '../../public/assets/home/background-home-desktop.jpg'
import BackgroundTablet from '../../public/assets/home/background-home-tablet.jpg'

export const Section= ()=>{
    return(
        <section>
        
        <picture>
            <source  media='(max-width:425px)' srcSet={BackgroundMobile} ></source>
            <source  media='(min-width:426px)' srcSet={BackgroundDesktop} ></source>
            <source  media='(min-width:780px)' srcSet={BackgroundTablet} ></source>

            <img src={BackgroundMobile}></img>
        
        </picture>


        <div className='absolute  w-[300px] top-[130px] left-0 right-0 mx-auto text-center'>
        
        <div>
            <p className='font-Barlow text-[16px] text-Secondary-color uppercase tracking-[3px] '>So, you want to travel to</p>

            <h1 className='font-Bellefair text-[80px] uppercase text-third-color'>Space</h1>
        </div>

            <p className='font-Barlow text-[15px] text-Secondary-color px-5'>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
            </p>
        
        </div>



        <div className='bg-third-color absolute left-0 right-0 top-[470px] w-[150px] grid place-content-center h-[150px] mx-auto rounded-full'>
            <p className='font-Bellefair capitalize text-[20px]'>explore</p>
        </div>

        
        </section>
    )
}