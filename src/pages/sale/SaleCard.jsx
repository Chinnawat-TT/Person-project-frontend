

export default function SaleCard({ show }) {
  
  return (

    <div className=" w-full border shadow-sm hover:ring-1 hover:ring-black">
      <div>
        <img 
        className="  h-80"
        src={show.mainImage} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <span className=" font-semibold">{show.name}</span>
        <span>{show.price}Bath</span>
      </div>
    </div>
  )
}
