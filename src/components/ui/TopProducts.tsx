import { Slider } from "@radix-ui/react-slider"
import { Button } from "./button"
import { Select  ,SelectContent,SelectGroup,SelectTrigger,SelectValue ,SelectItem,SelectLabel } from "./select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
function TopProducts() {
    const productData=[{
        image:'/mock product/Image (1).png',
        des:'Faux Leather Sofa Couch',
        price:'$129'
    },
    {
        image: '/mock product/Image (2).png',
        des: 'Boucle Accent Chair',
        price: '$120'
    },
    {
        image: '/mock product/Image (3).png',
        des: 'Ceramic Flower Vase',
        price: '$12'
    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },
    {

        image: '/mock product/Image.png',
        des: 'Aurla Fabric Accent Chair',
        price: '$30'

    },






    ]
  return (<div className="  container mx-auto mb-14">
<div className=" w-full  md:flex justify-between items-center  space-y-6  ">
          <h1 className=" text-heading-main md:text-4xl text-xl font-semibold">Top Products</h1>
         <div>
          <Select>
              <SelectTrigger className="w-[218px]  md:rounded-[300px]  rounded-3xl h-[64px]   px-4">
                  <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
                  <SelectContent position="popper"  className=" bg-primary-200" >
                  <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
              </SelectContent>
          </Select>
         </div>
</div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2  gap-8 grid-cols-2 mt-8  mb-[62px] ">
        {
            productData.map((itme,index)=>(
          <div key={index} className=" lg:col-span-1   col-span-1  md:h-[383px]  h-[235px]  ">
            <div className=" w-full md:h-[313px] h-[173px]   rounded-md overflow-hidden">
            <img className=" w-full h-full  object-cover" src={itme.image} alt="" />
            </div>
            <div className=" w-full  flex items-center justify-between h-[62px] ">
                <h3 className=" font-medium text-lg">{itme.des}</h3>
                <span className=" bg-primary-50   rounded-[300px] 
                 text-heading-main  text-lg font-semibold
                flex items-center justify-center  w-[71px] h-[38px]">{itme.price}</span>
            </div>

                <RadioGroup className=" flex items-center" defaultValue="comfortable">
                            <RadioGroupItem className="   bg-primary-200 " value="default" id="r1" />
                        <RadioGroupItem className=" bg-[#834F65] " value="comfortable" id="r2" />
                </RadioGroup>

            </div>
            ))

        }




      </div>
      <div className=" text-center space-y-8">
          <h3 className=" text-heading-main text-sm ">Showing {productData.length} of 48 results</h3>
          <Slider className=" w-[300px]  mx-auto" defaultValue={[33]} max={100} step={1} />
          <Button variant={"outline"} className="  w-[192px] h-[56px] rounded-[300px]">Show more</Button>
      </div>
  </div>
  )
}

export default TopProducts