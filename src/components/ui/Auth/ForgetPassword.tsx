import { Input } from "../input"
import { Button } from "../button"
function ForgetPassword({ handleOpenForgetPage }: { handleOpenForgetPage: () => void }) {
  return (<div className="w-[720px] text-center" >
    <h2 className="  text-lg font-bold  text-heading-main">Login </h2>
    <div className="  my-8 flex justify-center">

      <img src="/broken.jpg" alt="" />
    </div>
    <div className=" w-[352px] mx-auto">
    <h2 className=" text-2xl  text-heading-main  font-medium">Enter your email and we'll send a link to reset your password</h2>
    </div>
    <form className=" flex flex-col items-center gap-3 space-y-5 ">
      <h3 className=" text-center  text-xl font-semibold ">Welcome back</h3>
      <Input  type="password" className="h-[65px] w-[353px] rounded-[300px] border-[1px] border-gray-custom-400 pl-5  focus:border-primary-200 outline-offset-2 focus:outline-double  focus:outline-primary-500 " placeholder='Rest Password' />
      <Button className=" w-[353px] h-[56px]" variant={"default"} >Reset password</Button>

      <p className=" font-semibold   cursor-pointer text-body-sub">Remember your password? <button onClick={handleOpenForgetPage} className=" text-primary-500  cursor-pointer"  > Back to login </button></p>
    </form>
  </div>
  )
}

export default ForgetPassword