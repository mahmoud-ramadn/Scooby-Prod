
function HeroSection() {
  return (<section  className=" relative w-full bg-gradient-to-r from-Gradient-one to-Gradient-two h-[600px] pl-4    lg:pl-[102px] md:pl-[51px] flex items-center  ">
     
 
    <div className=" container  text-white   z-20 space-y-6">
      <h1 className=" font-semibold   lg:text-7xl  md:text-3xl   text-2xl ">Your Pets, our <br/>
       priority</h1>
      <p className=" lg:text-2xl md:text-xl ">Spend extra time & love with Dog walking</p>
    </div>
    <img className=" absolute right-0  lg:-bottom-[17%] md:-bottom-[58px] -bottom-[34px] " src="/hero.webp" alt="" />
  </section>
  )
}

export default HeroSection