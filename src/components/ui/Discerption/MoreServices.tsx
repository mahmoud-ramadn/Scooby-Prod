
import { Carousel ,CarouselItem ,CarouselContent } from "../carousel"

 function MoreServices() {
    return (
        <Carousel   className="w-full   my-6" >
            <CarouselContent  className="lg:gap-x-5 gap-x-2 justify-start">
                {Array.from({ length: 7 }).map((_, index) => (
                    <CarouselItem key={index} className=" md:basis-1/3  basis-[90%] border  overflow-hidden rounded-2xl lg:basis-[30%]">
                        <div className=" text-center h-[360px]  text-white flex items-center w-full   justify-center">
                            <img src="https://images.pexels.com/photos/4657306/pexels-photo-4657306.jpeg?auto=compress&cs=tinysrgb&w=600" alt={`${index +1} image`} className=" w-full h-full object-cover hover:scale-105 duration-200  cursor-pointer" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
          
        </Carousel>
    )
}


export  default MoreServices;