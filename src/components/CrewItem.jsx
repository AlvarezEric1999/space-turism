

export const CrewItem = ({data}) => {
  return (
    <div>
        <div className=" w-[300px] pt-12 grid place-content-center h-[250px] absolute border-b-[1px] border-Secondary-color top-[-320px] border-b-Secondary-color left-0 right-0 mx-auto ">
          <img className=" w-[180px] h-[200px] " src={data[0].images.png} ></img>
        </div>
        
        <div>
          <p className="font-Bellefair uppercase py-2 text-Secondary-color">{data[0].role}</p>
          <h2 className="font-Bellefair uppercase text-[20px] text-third-color">{data[0].name}</h2>
          <p className="font-Barlow  text-[15px] py-4 text-Secondary-color">{data[0].bio}</p>
        </div>

    
    
    </div>
  )
}
