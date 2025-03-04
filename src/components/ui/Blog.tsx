
const BlogData = [
    {
        title: "Are Dogs Social Animals?",
        image:'https://images.pexels.com/photos/4918102/pexels-photo-4918102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: "14 Tips for First-Time Dog Owners",
        image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: "Deadly cat virus that swept Cyprus found in UK?",
        image:"https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];

function Blog() {
    return (
        <div className="container pt-5 pb-36">
            <h2 className="text-4xl font-bold">Blogs</h2>
            <p className="text-black/80 text-3xl pt-2 ">Because we love to talk about pets.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {BlogData.map((item, index) => (
                    <div key={index} className=" relative lg:max-h-[300px]  group rounded-2xl  overflow-hidden " >
                        <img
                            src={item.image}
                            alt={item.title}
                            className=" object-cover w-full h-full group-hover:scale-105 duration-200    transition-all   lg:aspect-[3/4] aspect-[6/5] "
                            loading="lazy"
                        />
                          <p className=" absolute left-0 bottom-0 w-full  z-10  h-1/4   flex justify-center items-center   px-5  text-white  font-medium lg:text-xl  text-sm bg-black/60">
                            {item.title}
                          </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
