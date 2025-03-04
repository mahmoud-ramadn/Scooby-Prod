import { Button } from "./button"


function Categories() {
  return (<section className="lg:w-full md:container mx-auto md:space-y-8 space-y-5 mb-8">
    <h1 className="  font-semibold   md:text-[39px]  text-xl text-heading-main ">Categories</h1>
    {/* gird cards */}
    <div className=" grid md:grid-cols-2  grid-cols-1  md:gap-8 gap-5 ">
      <div className="  md:col-span-2  col-span-1  bg-card-bg  flex items-center justify-between   lg:h-[453px] md:h-[300px] h-[173px]
         lg:pl-[107px] md:pl-[58px]  pl-7
      ">
      <div className="  w-fit space-y-7     ">
          <h3 className="  md:text-2xl text-xl font-semibold  text-heading-main ">Sitting Room</h3>
          <Button variant={"outline"} className="w-[155px] h-[56px] md:flex hidden  rounded-[300px] gap-x-4 items-center   " >
            <span>Shop Now</span>
            <img src='/arrow-right.svg' />
          </Button>
      </div>

<div className="md:w-[656px] w-[361px] h-full ">
  <img  className="  w-full h-full    object-cover " src="/categories/sofa.webp" alt="" />
</div>
</div>



      <div className="  col-span-1 bg-card-bg  lg:h-[453px] md:h-[300px] h-[173px]">
      </div>
      <div className="  col-span-1 bg-card-bg  lg:h-[453px] md:h-[300px] h-[173px]">
      </div>
      <div className="  md:col-span-2  col-span-1  bg-card-bg  flex items-center justify-between   lg:h-[453px] md:h-[300px] h-[173px]
         lg:pl-[107px] md:pl-[58px]  pl-7
      ">
        <div className="  w-fit space-y-7     ">
          <h3 className="  md:text-2xl text-xl font-semibold  text-heading-main ">Sitting Room</h3>
          <Button variant={"outline"} className="w-[155px] h-[56px] md:flex hidden  rounded-[300px] gap-x-4 items-center   " >
            <span>Shop Now</span>
            <img src='/arrow-right.svg' />
          </Button>
        </div>

      <div className="md:w-[656px] w-[361px] h-full relative">
  <img
    className="w-full h-full object-cover opacity-50"
    src="/categories/furnior.webp"
    alt="Furniture"
  />
  <div className="absolute inset-0 bg-black/50"></div> 
</div>



      </div>



    </div>
  </section>
  )
}

export default Categories