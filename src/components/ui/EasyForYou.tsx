import {  Calendar as Clande, CreditCard, Search } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { addDays ,format} from "date-fns"
import React from "react"
import { Calendar } from "./calendar"
import Box from "./box"
function EasyForYou() {
      const [date, setDate] = React.useState<Date>()
    
    const boxServicesData = [
        {
            title: 'Veterinary',
            img: '/box/veterinary 1.webp'
        },
        {
            title: 'Day Care',
            img: '/box/dog (2) 1.webp'
        },
        {
            title: 'Supplies',
            img: '/box/pet-supplies 1.webp'
        },
        {
            title: 'Adoption',
            img: '/box/adoption 1.webp'
        },
        {
            title: 'More',
            img: '/box/pets 1.webp'
        },
    ]

      React.useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', (event) => {
                event.preventDefault();
                scrollContainer.scrollBy({
                    left: event.deltaY < 0 ? -100 : 100,
                    behavior: 'smooth'
                });
            });
        }
    }, []);
  return (
    <div className="  relative bg-gray-custom  pt-40 pb-12">
          {/* <div className="   absolute   -top-[10px]   overflow-x-scroll left-1/2  -translate-x-1/2  shadow-none   w-full flex items-center  justify-center gap-8  ">
              {
                  boxServicesData.map((box, index) => (
                      <Box key={index} img={box.img} subtitle={box.title} />
                  ))
              }
          </div> */}
     <div className=" container text-center pb-12">
              <h2 className='font-extrabold  text-4xl '>Scooby made it easy for you</h2>
              <p className="  text-2xl text-black/80 pt-8 ">Search and connect with trusted pet services providers. It's easy as 1, 2, 3.</p>
              <div className="  grid lg:grid-cols-3  grid-cols-1  gap-8   pt-16  ">
                <div className=" relative text-start  h-fit   ">
                    <span className="    px-5 py-4  z-10 absolute left-0      rounded-lg bg-primary-500  flex items-center  justify-center">
                    <Search  className=" text-white size-6"/>
                    </span>
                      <input placeholder=" Find pet Service provider" className="relative  w-full mb-6   h-14   placeholder:text-xl    focus:ring-4     rounded-xl border  placeholder:text-black/80  border-black/35   pl-[4.5rem]        " />
                      <p className="">Search, select your services and find 
                           experienced pet lover nearby </p>
                </div>
                  
                <div className=" relative text-start  h-fit   ">
                    <span className="    px-5 py-4  z-10 absolute left-0      rounded-lg bg-primary-500  flex items-center  justify-center">
                    < Clande className=" text-white size-6"/>
                    </span>
                      <Popover  >
                          <PopoverTrigger asChild className="  text-center focus:ring-4   "  >
                              <Button

                                  className={cn(
                                      "relative h-14    justify-center text-black/60 bg-white  w-full  rounded-xl border  placeholder:text-black/60   border-black/35 pr-14          ",
                                      !date && "text-muted-foreground"
                                  )}
                              >
                                  {date ? format(date, "PPP") : <span className="text-xl  text-black/80 w-full text-center pl-14 ">Arrange a meet & greet</span>}
                              </Button>
                          </PopoverTrigger>
                          <PopoverContent
                              align="start"
                              className="flex w-auto flex-col bg-white space-y-2 p-2"
                          >
                              <Select
                                  onValueChange={(value) =>
                                      setDate(addDays(new Date(), parseInt(value)))
                                  }
                              >
                                  <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent position="popper" className=" bg-white">
                                      <SelectItem value="0">Today</SelectItem>
                                      <SelectItem value="1">Tomorrow</SelectItem>
                                      <SelectItem value="3">In 3 days</SelectItem>
                                      <SelectItem value="7">In a week</SelectItem>
                                  </SelectContent>
                              </Select>
                              <div className="rounded-md border">
                                  <Calendar mode="single" selected={date} onSelect={setDate} />
                              </div>
                          </PopoverContent>
                      </Popover>
                      <p className=" mt-6 ">Get to know your pet lover in person</p>
                </div>
                  
                <div className=" relative text-start  h-fit   ">
                    <span className="    px-5 py-4  z-10 absolute left-0       rounded-lg bg-primary-500  flex items-center  justify-center">
                    <CreditCard  className=" text-white size-6"/>
                    </span>
                      <input placeholder=" Book your appointment" className="relative  w-full    h-14  mb-6  focus:ring-4 placeholder:text-xl    rounded-xl border  placeholder:text-black/80  border-black/35   pl-[4.5rem]        " />
                      <p className=" ">Search, select your services and find 
                           experienced pet lover nearby </p>
                </div>
                  
            
                  
              </div>

     </div>

    </div>
  )
}

export default EasyForYou



