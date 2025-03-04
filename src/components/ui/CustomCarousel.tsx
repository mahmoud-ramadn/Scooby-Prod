import {  StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./carousel";
import { Link } from "react-router-dom";

const productData = [
    {
        image: '/carousle/Rectangle 112.png',
        des: 'Faux Leather Sofa Couch',
        price: '$129'
    },
    {
        image: '/carousle/Rectangle 112.png',
        des: 'Boucle Accent Chair',
        price: '$120'
    },
    {
        image: '/carousle/Rectangle 114.png',
        des: 'Ceramic Flower Vase',
        price: '$12'
    },
    {
        image: '/carousle/Rectangle 116.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/carousle/Rectangle 116.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/carousle/Rectangle 116.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/carousle/Rectangle 116.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/carousle/Rectangle 116.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
    {
        image: '/carousle/Rectangle 116.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'
    },
   
];

function CustomCarousel({ title="Grooming Reviews"}:{title?:string}) {
    return (
        <div className=" container relative px-4  mx-auto mt-[107px] ">
         
            <Carousel
                opts={{
                    align:"end",
                }}
                className="  "
            >
                    <h1 className="md:text-[40px] font-bold text-heading-main mb-12  ">{title}</h1>
                    <div className="gap-x-3 flex   h-full">
                <CarouselPrevious  />
                <CarouselNext />
                       </div>

                



                <CarouselContent className=" md:gap-x-6 gap-x-2 h-[340px] md:px-6    ">
                    {productData.map((item, index) => ( 
                        <CarouselItem key={index} className="   rounded-3xl  border-[1px]   border-Gradient-one/30  ">

                            <div className=" w-full h-[237px]  rounded-ss-3xl   rounded-se-3xl  overflow-hidden">
                                <Link to='/home'>
                            <img  className=" w-full h-full object-cover  hover:scale-105  duration-100   animate-out   " src={item.image} alt="" />
                                </Link>
                            </div>

                             <div className=" px-3  pt-4 pb-6">
                                <div className=" flex  items-center justify-between">
                                    <h3 className="  font-medium text-xl  text-black">Brushing and Haircuts</h3>
                                    <div className="  flex items-center gap-x-1">
                                        <StarIcon className="  size-4 text-warning"/>
                                        <StarIcon className="  size-4 text-warning"/>
                                        <StarIcon className="  size-4 text-warning"/>
                                        <StarIcon className="  size-4 text-warning"/>
                                    </div>
                                </div>
                                <div className=" flex justify-between items-center">
                                    <h3 className=" text-xl  text-black/50">Cairo</h3>
                                    <h3 className=" text-lg text-gray-700 "> From  <span  className=" text-primary-500">$9  </span> </h3>
                                </div>

                             </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CustomCarousel;