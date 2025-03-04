import ArrowRight from "@/assets/icons/arrow-right"
import Box from "@/components/ui/box"
import { Button } from "@/components/ui/button"
import CustomCarousel from "@/components/ui/CustomCarousel"
import HeroSection from "@/components/ui/HeroSection"

function LandingPage() {
  const boxServicesData=[
    {
      title:'Veterinary',
      img:'/box/veterinary 1.webp'
    },
    {
      title:'Day Care',
      img:'/box/dog (2) 1.webp'
    },
    {
      title:'Supplies',
      img:'/box/pet-supplies 1.webp'
    },
    {
      title:'Adoption',
      img:'/box/adoption 1.webp'
    },
    {
      title:'More',
      img:'/box/pets 1.webp'
    },
  ]
  return (<main className=" relative mb-[122px]">
    <HeroSection/>
    <span className=" flex justify-center    absolute -left-[calc(342px/2)]   -top-[calc(342px/2)]    items-center  size-[342px] bg-white opacity-10 rounded-full">
      
    </span>
    <span className=" flex justify-center    absolute -left-[calc(250px/2)]   -top-[calc(250px/2)]    items-center  size-[250px] bg-white opacity-10 rounded-full">
      
    </span>



    <div className="  container flex items-center flex-wrap justify-center gap-8 md:mt-[133px]  mt-16 md:mb-[147px]  mb-[75px]  ">
    {
      boxServicesData.map((box,index)=>(
        <Box key={index} img={box.img}  subtitle={box.title} />
      ))
    }
    </div>
    <div className=" container   mx-auto flex  lg:flex-row md:flex-col flex-col items-center   gap-8   lg:justify-between  ">
      <img className="   aspect-[3/2] object-cover size-full " src="/doctor.webp" alt="" />
      <div className=" w-full max-w-[510px]  md:text-start text-center   h-[324px] ">
        <h1 className=" text-black font-extrabold lg:text-[38px] md:text-[30px] text-2xl ">Your Pet lives for the day,
          <br />the hour, even for the moment. </h1>
        <p className=" my-6  text-black/70  md:text-xl">All employees at Scooby have been carefully selected. <br/>
          Each employee always has the safety <br/>
          and care of your Pet in mind.</p>
        <p className="text-black/70  md:text-xl">

          Contact Us to schedule your services today!</p>

          <div className=" mt-10 flex items-center gap-8 md:flex-row flex-col ">
          <Button className=" w-[255px] h-[55px] text-white ">About Us accordion
          <ArrowRight />
          </Button>
          <h3 className="  underline direction-normal font-medium md:text-[22px]  text-xs text-primary-500 underline-offset-1">Learn more</h3>
          </div>
      </div>
    </div>

    <CustomCarousel />
    </main>
  )
}

export default LandingPage