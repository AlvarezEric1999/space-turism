import React from 'react'

export const TecnologyItem = ({data}) => {

  console.log(data,'data')

  return (
    <div className='relative' >


    <div className='absolute h-[170px] w-[360px] grid place-content-center  top-[-300px] left-0 right-0  mx-auto'>
    <picture>
      <source media='(max-width:1020px)'  srcSet={data[0].images.landscape} ></source>
      <source media='(min-width:1024px)'  srcSet={data[0].images.portrait} ></source>
      
      <img  className='w-[375px]' src={data[0].images.portrait}></img>
      
    </picture>
    </div>

    
    <h2  className='font-Bellefair text-third-color uppercase text-[24px]' >{data[0].name}</h2>
    <p className='font-barlow text-Secondary-color' >{data[0].description}</p>
    
    </div>
  )
}
