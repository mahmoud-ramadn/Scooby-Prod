import Card from "@/components/Common/Card";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { TProduct } from "@/types";

function Shope() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "medicine",
  ]); 

  const Categories = [
    { id: "Medicines", category: "medicine" },
    { id: "Food", category: "food" },
    { id: "Toys", category: "toys" },
    { id: "Grooming", category: "grooming" },
    { id: "Accessories", category: "accessories" },
  ];

  const getProducts = async (categories: string[] = []) => {
    try {
      let url =
        "https://scoobyfamily.onrender.com/scooby/api/product/getallproduct";
      if (categories.length > 0) {
        const queryParams = categories
          .map((cat) => `category=${cat}`)
          .join("&");
        url += `?${queryParams}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      setProducts(result.data); // Assuming the response has a `data` field
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  useEffect(() => {
    getProducts(selectedCategories);
  }, [selectedCategories]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 my-20">
      {/* Categories Section */}
      <div className="lg:col-span-1 md:col-span-2 col-span-1">
        <h2 className="font-medium border-b pb-4 border-gray-700">
          Categories
        </h2>
        <div className="space-y-6 mt-4">
          {Categories.map((category, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.category)}
                onChange={() => handleCategoryChange(category.category)}
                className="form-checkbox h-5 w-5 text-primary-500 rounded"
              />
              <span>{category.category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="lg:col-span-3 md:col-span-2 col-span-1">
        {/* Search Bar */}
        <div className="overflow-hidden relative rounded-md shadow">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="py-5 w-full pl-3 placeholder:text-black/50 shadow-md"
          />
          <div className="px-10 h-full flex items-center justify-center absolute right-0 top-0 bg-primary-500">
            <Search className="size-8 text-white" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-[715px] grid lg:grid-cols-3 mt-7 gap-8 md:grid-cols-2 grid-cols-1">
          {products.length > 0 ? (
            products.map((product, index) => (
              <Card
                key={index}
                title={product.name}
                price={product.price}
                discount={product.discount}
                image={product.productImage}
                category={product.category}
              />
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shope;
