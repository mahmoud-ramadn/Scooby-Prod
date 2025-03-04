import { Input } from "../input"
import { Button } from "../button"
import { Checkbox } from "../checkbox"

function SignUp({ handleToggle }: { handleToggle:()=>void}) {



    
  return (
      <div className="w-[720px] text-center">
          <h2 className="text-lg font-bold text-heading-main">Create an account</h2>
          <div className="my-8 flex justify-center">
              <img src="/chair.jpg" alt="" />
          </div>
          <form className="flex flex-col items-center gap-3">
              <h3 className="text-center text-xl font-semibold">Let's get your account set up</h3>
              <Input
                  className="h-[65px] w-[353px] rounded-[300px] border-[1px] border-gray-custom-400 pl-5 focus:border-primary-200 outline-offset-2 focus:outline-double focus:outline-primary-500"
                  placeholder="Email"
              />
              <Input
                  className="h-[65px] w-[353px] rounded-[300px] border-[1px] border-gray-custom-400 pl-5 focus:border-primary-200 outline-offset-2 focus:outline-double focus:outline-primary-500"
                  placeholder="Password"
              />
              <Button className="w-[353px] h-[56px]" variant={"default"}>
                  Create account
              </Button>
              <div className="flex items-center space-x-2">
                  < Checkbox id="terms" className="w-6 h-6 accent-primary-500" />
                  <label
                      htmlFor="terms"
                      className="text-sm w-[297px] text-start text-gray-custom-300 leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                      I agree to the Terms and Conditions of Furniture and acknowledge the Privacy Policy
                  </label>
              </div>
              <p className="font-semibold cursor-pointer text-body-sub">
                  Already have an account?
                  <span onClick={handleToggle} className="text-primary-500">
                      Login
                  </span>
              </p>
          </form>
      </div>
  )
}

export default SignUp