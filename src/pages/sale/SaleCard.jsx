

export default function SaleCard({ show }) {
  
  return (

    <div className=" w-full border rounded-lg shadow-sm">
      <div>
        <img 
        className=" rounded-lg h-80"
        src={show.mainImage} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <span>{show.name}</span>
        <span>{show.price}Bath</span>
      </div>
    </div>
  )
}
