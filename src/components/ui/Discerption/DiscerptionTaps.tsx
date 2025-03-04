import { Tabs , TabsContent, TabsList,TabsTrigger ,  } from "../tabs"

function DiscerptionTaps() {
     return (<Tabs defaultValue="Discerption" className=" w-fit mt-12">
         <TabsList className=""  >
             <TabsTrigger value="Discerption">Discerption</TabsTrigger>
             <TabsTrigger value="password">Password</TabsTrigger>
         </TabsList>
         <TabsContent value="Discerption" className=" w-full  ">
             <h3 className="   text-gray-700  lg:text-2xl  leading-relaxed"> <span className="  ">Looking for peace of mind when it comes to your furry friend?</span>  Our pet care service  offers a wagging tail
                 or purrfect cuddle worth of options! Whether you need someone to play fetch, administer medication,
                 or provide a loving home away from home, we've got you covered.</h3>
             <article className="  space-y-9  my-9">
                 <img
                     className="  md:float-end xs:float-right sm:float-right     w-full md:w-[650px]  my-5 lg:ml-4  object-cover   shrink-0  h-[455px]   rounded-lg"
                     src="https://images.pexels.com/photos/5749807/pexels-photo-5749807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="Mountains"
                 />
                 <p className="text-gray-700  lg:text-2xl   leading-relaxed    ">
                     Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change
                     the world, but what about that kid, sitting down, opening a book, right now, in a branch at the
                     local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five
                     Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and
                     missing books, you'd better think again. This is about that kid's right to read a book without
                     getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks.
                     You and your good-time buddies.
                 </p>

                 <p className="text-gray-700  lg:text-2xl  leading-relaxed  ">
                     <span className=" text-primary-500 font-medium ">Busy schedule? Traveling the world?</span>
                     Our pet care services are your lifesaver!
                     Let us take the worry out of pet parenthood,
                     so you can focus on what matters most.
                     Your happy, healthy pet awaits!
                 </p>
             </article>

         </TabsContent>
         <TabsContent value="password">
          two
         </TabsContent>
     </Tabs>
    )
}


export default DiscerptionTaps