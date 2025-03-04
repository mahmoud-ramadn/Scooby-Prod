import { Slider } from "@radix-ui/react-slider";
import { Button } from "./button";

function DesignInspiration() {
  return (
    <section className=" container mx-auto  my-14">
      <h1 className=" text-4xl font-semibold text-heading-main">
        Design inspiration and modern home ideas
      </h1>
      <div className=" flex md:justify-between   justify-center  gap-3 flex-wrap items-center my-8">
        <Button variant={"default"} className="w-[85px] h-[56px] ">
          All{" "}
        </Button>
        <Button variant={"secondary"} className="w-[134px] h-[56px] ">
          Bedroom
        </Button>
        <Button variant={"secondary"} className="w-[155px] h-[56px] ">
          Living room
        </Button>
        <Button variant={"secondary"} className="w-[124px] h-[56px] ">
          Kitchen
        </Button>
        <Button variant={"secondary"} className="w-[152px] h-[56px] ">
          Workspace
        </Button>
        <Button variant={"secondary"} className="w-[128px] h-[56px] ">
          Outdoor
        </Button>
        <Button variant={"secondary"} className="w-[140px] h-[56px] ">
          Bathroom
        </Button>
        <Button variant={"secondary"} className="w-[159px] h-[56px] ">
          Home office
        </Button>
        <Button variant={"secondary"} className="w-[159px] h-[56px] ">
          Dining room
        </Button>
      </div>
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <div className="h-64 sm:h-72 md:h-80 lg:h-[351px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image.png"
                alt=""
              />
            </div>
            <div className="h-64 sm:h-72 md:h-80 lg:h-[352px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-3.png"
                alt=""
              />
            </div>
            <div className="h-48 sm:h-56 md:h-64 lg:h-[253px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-4.png"
                alt=""
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <div className="h-56 sm:h-64 md:h-72 lg:h-[281px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-1.png"
                alt=""
              />
            </div>
            <div className="h-64 sm:h-72 md:h-80 lg:h-[337px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-5.png"
                alt=""
              />
            </div>
            <div className="h-64 sm:h-72 md:h-80 lg:h-[337px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-6.png"
                alt=""
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <div className="h-64 sm:h-72 md:h-80 lg:h-[337px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-2.png"
                alt=""
              />
            </div>
            <div className="h-48 sm:h-56 md:h-64 lg:h-[235px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image.png"
                alt=""
              />
            </div>
            <div className="h-56 sm:h-64 md:h-72 lg:h-[270px]">
              <img
                className="w-full h-full object-cover"
                src="/grid/Gallery-Image-7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" text-center space-y-9  my-5">
          <h2>Showing 9 of 16 results</h2>
          <Slider className=" w-[300px]  mx-auto" defaultValue={[33]} max={100} step={1} />
          <Button variant={"outline"} className="  w-[192px] h-[56px] rounded-[300px]">Show more</Button>
        </div>
      </div>
    </section>
  );
}

export default DesignInspiration;
