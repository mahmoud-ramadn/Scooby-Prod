import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"

function TheHeader() {
  const  NavLinke=[
    {
      title:'Home',
      path:'/home'
    },
    {
      title:'About Us',
      path:'/'
    },
    {
      title:'Contact Us',
      path:'/'
    },
    {
      title:'Services',
      path:'/services',
      icons:'/drop-down.svg'
    },


  ]
  return (<header className="  bg-primary-500 relative z-10  px-4">
     <div className=" container mx-auto  flex items-center justify-between py-[17px]">

      <div className=" flex items-center   lg:gap-x-[115px] md:gap-x-[75px]  gap-x-9 ">
      <Link to="/" className=" md:w-[65px] md:h-[65px] w-12 h-12 ">
        <img src="/favicon.svg" alt="" />
      </Link>

      <nav className=" hidden md:block">
        <ul className="  flex items-center gap-x-6">
          {
            NavLinke.map((linke,index)=>(
          <li key={index}>
            <Link to={linke.path} className=" flex   items-center  text-white  lg:text-xl md:text-base gap-x-2">{linke.title} <img src={linke.icons} alt="" /></Link>
          </li>
            ))
          }
        </ul>
      </nav>
      </div>

      <div className="  hidden md:block   lg:text-xl md:text-base">
        <button>Sign Up</button>  / <button className="  text-white font-medium">Login</button>
      </div>


<div className=" md:hidden block">
  <MenuIcon/>
</div>
     </div>
  </header>
  )
}

export default TheHeader