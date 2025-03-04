import { Star } from "lucide-react"
import { Button } from "./button"

function PetServices() {
    const PetServices=[
        {
            title:'Pet Grooming',
            address:'Cairo',
            des:'Grooming includes cutting nails, sh...',
            reviwes:4,
            price:'  $24 ',
             imgage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqwFAkfonCWk-tOdkQGfztFHhN4HJ1-D3ww&s'
        },
        {
            title:'Pet Grooming',
            address:'Cairo',
            des:'Grooming includes cutting nails, sh...',
            reviwes:4,
            price:'  $24 ',
             imgage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqwFAkfonCWk-tOdkQGfztFHhN4HJ1-D3ww&s'
        },
        {
            title:'Pet Grooming',
            address:'Cairo',
            des:'Grooming includes cutting nails, sh...',
            reviwes:4,
            price:'  $24 ',
             imgage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqwFAkfonCWk-tOdkQGfztFHhN4HJ1-D3ww&s'
        },
        {
            title:'Pet Grooming',
            address:'Cairo',
            des:'Grooming includes cutting nails, sh...',
            reviwes:4,
            price:'  $24 ',
             imgage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqwFAkfonCWk-tOdkQGfztFHhN4HJ1-D3ww&s'
        },
        {
            title:'Pet Grooming',
            address:'Cairo',
            des:'Grooming includes cutting nails, sh...',
            reviwes:4,
            price:'  $24 ',
             imgage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqwFAkfonCWk-tOdkQGfztFHhN4HJ1-D3ww&s'
        },
      
    ]
  return (
    <div className=" container  mt-20   pb-32">
          <h2 className=" font-bold text-3xl">Scroll down to browse Pet Services near you</h2>
          {
            PetServices.map((item,index)=>(
                <div key={index} className="  shadow-2xl   max-w-[600px]  rounded-3xl  overflow-hidden flex mt-14   md:flex-row flex-col    ">
                <img src={item.imgage} alt="image"  className=" lg:w-[210px]  w-full object-cover" />
                <div className=" lg:py-8  py-4  w-full  px-6   flex  flex-col  justify-center    ">
                <h2 className=" w-full flex  items-center text-2xl font-medium text-primary-500  justify-between">{item.title}   <span className=" font-medium text-lg "> from : <span className=" text-yellow-500">{item.price} </span></span></h2>
                <h3 className=" font-medium  text-xl lg:pt-6 pt-3">{item.address}</h3>
                <p className=" text-black/50 text-lg ;g:py-4   py-2 line-clamp-1 ">{item.des}</p>
                 <span  className=" flex items-center">
                 <Star  className=" fill-yellow-500 text-yellow-500  size-4 inline-block  "/>
                 <Star  className=" fill-yellow-500 text-yellow-500  size-4 inline-block  "/>
                 <Star  className=" fill-yellow-500 text-yellow-500  size-4 inline-block  "/>
                 <Star  className=" fill-yellow-500 text-yellow-500  size-4 inline-block  "/>
                 <Star  className=" fill-yellow-500 text-yellow-500  size-4 inline-block  "/>
                 <p  className=" text-black/60 text-lg inline-block   ml-2">{item.reviwes} Reviwes</p>
                 </span>
                </div>
          </div>
            ))
          }
           <div  className=" text-center  space-y-12 mt-32">
              <h1 className=" text-3xl  font-bold">Don't have time to find what you want? Let us help you!</h1>
              <Button  className=" text-white md:w-[360px] w-full h-14   rounded-xl py-3">Find Pet lover</Button>
           </div>

    </div>
  )
}

export default PetServices