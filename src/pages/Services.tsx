import Blog from "@/components/ui/Blog"
import HomeHerepage from "@/components/ui/HomeHerepage"
import WhyReyOn from "@/components/ui/WhyReyOn"
import PetServices from "@/components/ui/PetServices"

function Services() {
  return (
    <div>
          <HomeHerepage hero='https://images.pexels.com/photos/15175720/pexels-photo-15175720/free-photo-of-dog-with-its-tongue-out-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <PetServices />
        <WhyReyOn/>
        <Blog/>
    </div>
  )
}

export default Services