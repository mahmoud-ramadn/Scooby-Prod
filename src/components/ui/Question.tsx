
import { Accordion ,AccordionContent,AccordionItem,AccordionTrigger } from "./accordion"

function Question() {
  return (
    <section className=" container mx-auto mb-20">
          <h1 className=" text-3xl font-semibold text-heading-main">We have got the answers to your questions</h1>
          <div className=" ">
              <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="  py-9 ">
                      <AccordionTrigger> 
                          <div className=" flex items-center  gap-x-8">
                              <h1 className=" md:text-xl  font-bold text-gray-custom  ">01</h1>    
                         <span className=" md:text-xl   font-semibold text-heading-main">
                                  What types of furniture do you offer?
                            </span> 
                          </div>
                         </AccordionTrigger>
                      <AccordionContent className="  md:w-[588px]   text-body-sub ">
                          We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="  py-9 ">
                      <AccordionTrigger> 
                          <div className=" flex items-center  gap-x-8">
                              <h1 className="  md:text-xl  font-bold text-gray-custom  ">02</h1>    
                         <span className=" md:text-xl  font-semibold text-heading-main">
                                  What types of furniture do you offer?
                            </span> 
                          </div>
                         </AccordionTrigger>
                      <AccordionContent className="  md:w-[588px]   text-body-sub ">
                          We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="  py-9 ">
                      <AccordionTrigger> 
                          <div className=" flex items-center  gap-x-8">
                              <h1 className=" md:text-xl  font-bold text-gray-custom  ">03</h1>    
                         <span className=" md:text-xl  font-semibold text-heading-main">
                                  What types of furniture do you offer?
                            </span> 
                          </div>
                         </AccordionTrigger>
                      <AccordionContent className="  md:w-[588px]   text-body-sub ">
                          We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>
          </div>
    </section>
  )
}

export default Question