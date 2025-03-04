
function More() {
  const MoreData = [
    { title: 'Pet Veterinary', subtitle: 'When anything worries your pet', image: "https://cdn-icons-png.flaticon.com/512/4213/4213616.png" },
    { title: 'Pet Boarding', subtitle: 'When your pet needs overnight care', image: 'https://cdn-icons-png.flaticon.com/512/9616/9616914.png' },
    { title: 'Pet Grooming', subtitle: 'Give your baby pet a new look', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyobnP-Kb-SPmxD1ArMBQMjNST2qC7_Q4dA&s" },
    { title: 'Pet Sitting', subtitle: 'When your pet needs house-services overnight', image: "https://images.vexels.com/media/users/3/162071/isolated/preview/e0fcf32014f713dc36039cd8d3fe6e99-dog-puppy-ear-flat-sticker.png" },
    { title: 'Pet Training', subtitle: 'Train your pet’s behavior', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Ko8Z1J0a0ipaGLDqjDredi8Q5cxO7PBE8kBWH32jxQIe852P635WvM40_gF2zxINpw&usqp=CAU" },
    { title: 'Pet Walking', subtitle: 'For dogs if they need a walk', image: "https://cdn-icons-png.flaticon.com/512/4213/4213616.png" },
    { title: 'Pet Taxi', subtitle: 'When your pet needs help going out', image:"https://cdn-icons-png.flaticon.com/512/4213/4213616.png" },
    { title: 'Pet Supplies', subtitle: 'All your pet needs', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Ko8Z1J0a0ipaGLDqjDredi8Q5cxO7PBE8kBWH32jxQIe852P635WvM40_gF2zxINpw&usqp=CAU" },
  ];
  return (
   <div className="container  text-center pt-28 pb-36">
  <h1 className="lg:text-5xl text-2xl font-bold text-center">Do you need help with your pets?</h1>
  <h2 className="lg:text-3xl text-xl font-medium text-black/60 text-center lg:pt-10">Book what you're looking for</h2>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-10">
    {MoreData.map((item, index) => (
      <div
        key={index}
        className={`text-center bg-gray-custom col-span-1 border border-black/50 rounded-3xl pt-6 ${
          index === MoreData.length - 1 && MoreData.length % 3 !== 0 ? 'lg:col-start-2' : ''
        }`}
      >
        <img src={item.image} alt="" className="size-[200px] object-cover mx-auto" />
        <h3 className="text-xl font-semibold mt-4 w-full border-t border-black/50 pt-2">{item.title}</h3>
        <p className="text-gray-600 pt-2 pb-2">{item.subtitle}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default More