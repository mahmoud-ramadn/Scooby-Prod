import Fav from "@/assets/icons/Fav"
import { ShoppingCart } from "lucide-react"
interface cardProps{
    title:string,
    price:number,
    discount:number,
    image:string,
    category:string,
     parentage?:number;
}
function Card({title,price,discount,image,category,parentage}:cardProps) {
  return (
      <div className="   py-4 px-3   shadow-md rounded-lg relative  ">
          <button className=" absolute  top-3 right-3 " >
              <Fav className="   size-5  fill-yellow-500 duration-150"/>
          </button>
          <img src={image} alt="item" className=" object-cover w-full  aspect-square     h-48 " />
          <h4 className=" font-medium  text-2xl">{title}</h4>
          <span className=" text-xs">{category}</span>
          <div className=" flex justify-between items-center shrink-0   w-full">
              <p className=" text-gray-600  text-[8px] ">EGP <span className=" font-medium text-[11px]   text-black">{price}</span>  <span  className=" line-through font-medium">{discount}</span>  <span className="   font-medium   text-yellow-500">{parentage}% OFF</span> </p>
            <button className=" border border-yellow-600 font-medium text-xs  flex items-center justify-center py-1  px-3  rounded-full gap-x-2 "> <ShoppingCart/> add </button>
          </div>
      </div>
  )
}
export default Card