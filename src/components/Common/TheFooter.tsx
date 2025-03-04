import Facebook from "@/assets/icons/Facebook"
import XIcon from "./x-Icon"
import Insta from "@/assets/icons/Insta"
import Call from "@/assets/icons/Call"
function TheFooter() {
  return ( <footer  className=" bg-primary-500 pt-16">
     <div className=" container mb-16 flex md:justify-between md:flex-wrap flex-col md:flex-row flex-nowrap  gap-y-10 items-start">
      <div className=" space-y-5">
        <h3  className=" font-medium text-2xl text-white">Let’s Get in touch</h3>
        <p className=" bg-white   lg:min-w-[465px]  flex items-center border border-white    ">
        <input type="email" placeholder="Enter your email"  className="   w-full  border-none  focus:outline-none  pl-6  bg-primary-500  placeholder:text-sm h-12 rounded-none" />
          <span className="  text-primary-500 px-9 font-medium">Connect</span>
         </p>
        <span className=" flex items-center gap-x-7">
          <Facebook/>
          <XIcon/>
          <Insta/>
        </span>
      </div>
      <div className=" space-y-5">
        <h3 className=" font-medium text-2xl text-white">Contacts</h3>
        <p className=" flex items-center  gap-x-2 "><Call />  <span  className=" text-gray-custom" >0100000000 </span> </p>
        <p className=" flex items-center  gap-x-2 "><Call />  <span className=" text-gray-custom" >Scooby@exp.com </span> </p>
        <p className=" flex items-center  gap-x-2 "><Call />  <span className=" text-gray-custom" >Ismailia, Egypt </span> </p>
      </div>
      <div className=" space-y-5">
        <h3 className=" font-medium text-2xl text-white">Contacts</h3>
        <h3 className=" font-medium text-2xl text-white">Privacy policy</h3>
        <h3 className=" font-medium text-2xl text-white">About Us</h3>
        <h3 className=" font-medium text-2xl text-white">Help</h3>       
      </div>

     </div>
    
    <p className=" border-t border-gray-400 text-center pt-4 pb-5  text-white   text-xl">all rights reserved © 2024</p>
  </footer>
 )
}

export default TheFooter