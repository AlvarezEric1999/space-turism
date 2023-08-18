import React from 'react'

export const Item = ({data}) => {

    console.log(data)

  return (
    <>
    <h2 className='text-white text-[56px] font-Bellefair uppercase '>{data[0].name}</h2>

    <div className='border-b-[1px] px-4 border-Secondary-color'>
        <p className='text-Secondary-color font-Barlow text-[15px] pb-4 '>{data[0].description}</p>
    </div>
    

    <img className='absolute top-[-310px] w-[180px] h-[180px] right-0 left-0 mx-auto' src={data[0].image}></img>


    <div className='py-4'>

        <p className='text-Secondary-color font-Barlow text-[14px]' >AVG. DISTANCE</p>
        <p className='text-[28px] font-Bellefair text-third-color uppercase'>{data[0].distance}</p>
        
        <p className='text-Secondary-color font-Barlow text-[14px]' >EST. TRAVEL TIME</p>
        <p className='text-[28px] font-Bellefair text-third-color uppercase'>{data[0].travel}</p>
    
    
    </div>


    </>

  )
}
