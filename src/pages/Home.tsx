import EasyForYou from "@/components/ui/EasyForYou"
import HomeHerepage from "@/components/ui/HomeHerepage"
import CustomCarousel from "@/components/ui/CustomCarousel"
import ArrowTagRight from "@/assets/icons/ArrowTagRight"
import WhyReyOn from "@/components/ui/WhyReyOn"
import Blog from "@/components/ui/Blog"

function Home() {
  return (
    <main>
      <HomeHerepage />
      <EasyForYou/>
      <CustomCarousel title="Pet owners Reviews" />
      <p className="  pt-6 pb-16 container flex justify-end items-center gap-x-3 font-medium">Show more reviews by happy pet owners <ArrowTagRight/> </p>
      <WhyReyOn/>
      <Blog/>
    </main>
  )
}

export default Home