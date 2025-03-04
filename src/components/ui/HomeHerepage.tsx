import Home from "@/assets/icons/Home";
import { Label } from "./label";
import { addDays, format } from "date-fns"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";
import { Input } from "./input";
import { Popover
 } from "./popover";
 import { PopoverTrigger } from "./popover";
 import { PopoverContent } from "./popover";
import { Button } from "./button";
import { Calendar } from "./calendar";
import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import heroImage from "@/assets/images/homeHero.webp";

// import Box from "./box";
function HomeHerepage({hero=heroImage}) {
  const [date, setDate] = React.useState<Date>()
  
  return (
    <section className='relative   bg-cover bg-center pt-28  pb-44 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/65 z-[1]   before:z-[-1] '  style={{ backgroundImage: `url(${ hero })` }} >
      <div  className="  px-4    text-center max-w-[760px] mx-auto">
        <h1 className=" font-bold text-[55px] text-white ">Find a loving local pet sitter or dog Walker</h1>
        <h2  className=" font-medium  text-4xl text-white  pb-10   pt-6 ">Who treats your pet like family</h2>
        <div  className=" bg-white  grid md:grid-cols-2  grid-cols-1  items-end  gap-6  py-6  px-12   rounded-3xl ">
          <div className="  text-start   space-y-2  md:basis-1/2 w-full">
            <Label htmlFor="">I’m looking for</Label>
            <Select>
              <SelectTrigger className=" relative h-14  rounded-xl border  border-black/35  text-black/60   pl-12 ">
                <Home className=" absolute   left-4 text-primary-500 bg-white top-1/2 -translate-y-1/2" />
                <SelectValue placeholder="Select Service"  />
              </SelectTrigger>
              <SelectContent className=" bg-primary-500">
                <SelectGroup>
                  <SelectLabel>Serveices</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="  text-start  space-y-2  md:basis-1/2  w-full">
            <Label htmlFor="">Near</Label>
            <Input placeholder=" Your location" className="relative h-14  rounded-xl border  placeholder:text-black/60  border-black/35      pl-5"/>
          </div>
          <div className="  text-start  space-y-2  md:basis-1/2  w-full">
            <Label htmlFor="">Dates</Label>
            <Popover >
              <PopoverTrigger asChild className=" text-start" >
                <Button
              
                  className={cn( 
                    "relative h-14  justify-start text-black/60 bg-white  w-full  rounded-xl border  placeholder:text-black/60   border-black/35      ",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
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
          </div>
          <div className="  text-start  relative  h-14  overflow-hidden md:basis-1/2  w-full">
          <Search className=" absolute  z-10 text-white size-5   right-3 top-1/2  -translate-y-1/2"/>
            <Input placeholder="Search" className="relative  h-full placeholder:text-white placeholder:font-medium  text-white  rounded-xl border bg-primary-500    border-black/35      pl-5"/>
          </div>

        </div>
      </div>     
  </section>
  );
}

export default HomeHerepage;
