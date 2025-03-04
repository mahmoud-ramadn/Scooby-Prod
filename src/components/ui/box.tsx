import { Link } from "react-router-dom";

function Box({img,subtitle}:{img:string,subtitle:string}) {
  return (
    <div className="  lg:size-[190px] w-full   px-11 py-6       backdrop:blur-2xl  shadow-2xl shadow-black/35  space-y-4 rounded-3xl  text-center md:block flex  items-center  justify-between  bg-gray-custom ">
      {
        subtitle === 'More' ? (
          <Link to='/more' >
            <img className=" md:size-[100px] object-cover " src={img} alt="box-img" />
            <h3 className="  font-medium  text-2xl text-black">{subtitle}</h3>
             </Link> ) : (<>
              <img className=" md:size-[100px] object-cover " src={img} alt="box-img" />
              <h3 className="  font-medium  text-2xl text-black">{subtitle}</h3>
             </>)
      }
    </div>
  )
}

export default Box;