

export default function SaleCard({ show }) {
  console.log("++++++++++++++++++++++++++",show)
  return (

    <div className=" w-full border rounded-lg ">
      <div>
        <img 
        className=" rounded-lg"
        src={show.mainImage} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <span>{show.name}</span>
        <span>{show.price}Bath</span>
      </div>

     
    </div>
  )
}
