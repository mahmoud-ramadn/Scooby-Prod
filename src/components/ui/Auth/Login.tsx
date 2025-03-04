import { Input } from "../input"
import { Button } from "../button"
function Login({ handleToggle, handlOpenForegePage }: { handleToggle: () => void; handlOpenForegePage: () => void }) {

   

    return (
        <>
  
 <div className = "w-[720px] text-center" >
        <h2 className="  text-lg font-bold  text-heading-main">Login </h2>
        <div className="  my-8 flex justify-center">

            <img src="/Squircle.png" alt="" />
        </div>
        <form className=" flex flex-col items-center gap-3">
            <h3 className=" text-center  text-xl font-semibold ">Welcome back</h3>
            <Input className="h-[65px] w-[353px] rounded-[300px] border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500 " placeholder='Email' />
            <Input className="h-[65px] w-[353px] rounded-[300px]  border-[1px] border-gray-custom-400 pl-5 focus:border-primary-200  outline-offset-2 focus:outline-double  focus:outline-primary-500 " placeholder='Password' />
<div className=" w-[330px] mx-auto  text-end ">
            <p   onClick={handlOpenForegePage}   className="  text-base cursor-pointer  font-bold text-primary-500 " >Forget Password</p>

</div>

            <Button  className=" w-[353px] h-[56px]" variant={"default"} >Login</Button>
            <div className=" text-body-sub" >____________________________  or __________________________</div>
            <Button className=" w-[353px] h-[56px]" variant={"outline"} ><img src="/google_logo.jpg" alt="" /> Continue with Google</Button>
            <Button className=" w-[353px] h-[56px]" variant={"outline"} ><img src="/Group.jpg" alt="" /> Continue with Apple</Button>
            <p className=" font-semibold   cursor-pointer text-body-sub">First time here?  <button onClick={handleToggle} className=" text-primary-500  cursor-pointer"  >Create an account </button></p>
        </form>
    </div>

           
        </>
    
   
  )
}

export default Login