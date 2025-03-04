import Fot from "@/assets/icons/Fot"

function WhyReyOn() {
    const whyRelyonData=
    [
        {
            title: 'Great for your pet',
            des: 'Scooby team are genuine pet lovers from your local neighborhood '
        },
        {
            title: 'A real community',
            des: 'Scooby team are genuine pet lovers from your local neighborhood '
        },
        {
            title: 'Veterinary Coverage',
            des: 'Enjoy peace of mind with veterinary offers coverage for your pet with every booking. No hidden gap payments or subscription costs. '
        },
        {
            title: 'Personalised and flexible pet care',
            des: 'Scooby pet lovers provide one-on-one love and attention in a cozy home space. '
        },
        {
            title: 'Great for you',
            des: 'Simple reservation onlineDaily updates with photos and chatsCustomer service always there for you Payment protection'
        },
        {
            title: 'Trust and Safety',
            des: 'Profiles that have been reviewedPrevious jobs reviews and ratingsA community of pet loversCommunicate directly within platformYour pet is insured',
        },
    ]
  return (
    <div  className=" bg-gray-custom  pt-14 pb-8">
      
              <h2 className=" container text-black text-4xl  font-bold">Why rely on Scooby?</h2>
          <div className="    container mt-10 grid lg:justify-between  justify-center  md:grid-cols-2  grid-cols-1 gap-8">

            {
             whyRelyonData.map((itme,index)=>(
              <div  key={index} className=" max-w-[313px]    space-y-4">
                 <h3 className=" flex  items-center gap-x-2 font-medium text-xl">
                  <Fot/> <span>{itme.title}</span>
                 </h3>
                 <p className=" text-lg  text-black/60">{itme.des}</p>
              </div> 
             ))
            }
          </div>
    </div>
  )
}

export default WhyReyOn