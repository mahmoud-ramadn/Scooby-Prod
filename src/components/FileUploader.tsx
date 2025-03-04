
// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get(
//                     "https://scoobyfamily.onrender.com/scooby/api/product/getallproduct"
//                 );
//                 setProducts(response.data.data); // Assuming the products are in `response.data.data`
//                 setLoading(false);
//             } catch (err) {
//                 setError("Failed to fetch products. Please try again.");
//                 setLoading(false);
//                 console.error(err);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <div className="text-center py-8">Loading...</div>;
//     }

//     if (error) {
//         return <div className="text-center py-8 text-red-600">{error}</div>;
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {products.map((product) => (
//                         <div
//                             key={product._id}
//                             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                         >
//                             {/* Product Image */}
//                             <img
//                                 src={product.productImage}
//                                 alt={product.name}
//                                 className="w-full h-48 object-cover"
//                             />

//                             {/* Product Details */}
//                             <div className="p-4">
//                                 <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//                                 <p className="text-gray-600 mb-2">{product.desc}</p>

//                                 {/* Price and Discount */}
//                                 <div className="flex justify-between items-center mb-2">
//                                     <span className="text-gray-800 font-bold">
//                                         ${product.price}
//                                     </span>
//                                     <span className="text-sm text-gray-500">
//                                         {product.discount}% off
//                                     </span>
//                                 </div>

//                                 {/* Price After Discount */}
//                                 <div className="text-sm text-gray-500 mb-2">
//                                     Price After Discount: ${product.priceAfterDiscount}
//                                 </div>

//                                 {/* Quantity and Category */}
//                                 <div className="flex justify-between items-center mb-2">
//                                     <span className="text-sm text-gray-500">
//                                         Quantity: {product.quantity}
//                                     </span>
//                                     <span className="text-sm text-gray-500">
//                                         Category: {product.category}
//                                     </span>
//                                 </div>

//                                 {/* Created At */}
//                                 <div className="text-sm text-gray-500">
//                                     Added on: {new Date(product.createdAt).toLocaleDateString()}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductList;











// import { useState } from "react";
// import axios from "axios";

// const CreateProduct = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         desc: "",
//         quantity: "",
//         price: "",
//         discount: "",
//         priceAfterDiscount: "",
//         productImage: null,
//         category: "",
//         user: "66095adb4c8dee27ed88efa8", // Hardcoded user ID
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Handle file input change
//     const handleFileChange = (e) => {
//         setFormData({ ...formData, productImage: e.target.files[0] });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError("");
//         setSuccess("");

//         const data = new FormData();
//         data.append("name", formData.name);
//         data.append("desc", formData.desc);
//         data.append("quantity", formData.quantity);
//         data.append("price", formData.price);
//         data.append("discount", formData.discount);
//         data.append("priceAfterDiscount", formData.priceAfterDiscount);
//         data.append("category", formData.category);
//         data.append("user", formData.user);
//         if (formData.productImage) {
//             data.append("productImage", formData.productImage);
//         }

//         try {
//             const response = await axios.post(
//                 "https://scoobyfamily.onrender.com/scooby/api/product/createproduct",
//                 data,
//                 {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             if (response.status === 201) {
//                 setSuccess("Product created successfully!");
//                 setFormData({
//                     name: "",
//                     desc: "",
//                     quantity: "",
//                     price: "",
//                     discount: "",
//                     priceAfterDiscount: "",
//                     productImage: null,
//                     category: "",
//                     user: "66095adb4c8dee27ed88efa8",
//                 });
//             }
//         } catch (err) {
//             setError("Failed to create product. Please try again.");
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
//                 <h1 className="text-2xl font-bold text-center mb-6">Create Product</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* Name */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Description:</label>
//                         <input
//                             type="text"
//                             name="desc"
//                             value={formData.desc}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Quantity */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Quantity:</label>
//                         <input
//                             type="number"
//                             name="quantity"
//                             value={formData.quantity}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Price */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Price:</label>
//                         <input
//                             type="number"
//                             name="price"
//                             value={formData.price}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Discount */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Discount:</label>
//                         <input
//                             type="number"
//                             name="discount"
//                             value={formData.discount}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Price After Discount */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Price After Discount:</label>
//                         <input
//                             type="number"
//                             name="priceAfterDiscount"
//                             value={formData.priceAfterDiscount}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Category */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Category:</label>
//                         <input
//                             type="text"
//                             name="category"
//                             value={formData.category}
//                             onChange={handleInputChange}
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Product Image */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Product Image:</label>
//                         <input
//                             type="file"
//                             name="productImage"
//                             onChange={handleFileChange}
//                             required
//                             className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <div>
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
//                         >
//                             {loading ? "Creating..." : "Create Product"}
//                         </button>
//                     </div>
//                 </form>

//                 {/* Error Message */}
//                 {error && (
//                     <p className="mt-4 text-center text-sm text-red-600">{error}</p>
//                 )}

//                 {/* Success Message */}
//                 {success && (
//                     <p className="mt-4 text-center text-sm text-green-600">{success}</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CreateProduct;












































import { ChangeEvent, useState } from "react";
import axios from "axios";

type uploadStatus = "idel" | "uploaindg" | "sucess" | "error";

function FileUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<uploadStatus>("idel");
    const [UploadProgress, setUploadProgress] = useState(0);

    function handelFileChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    async function handelFileUpload() {
        if (!file) return;
        setStatus("uploaindg");

        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post("https://api.escuelajs.co/api/v1/files/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const progress = progressEvent.total
                        ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        : 0;
                    setUploadProgress(progress);
                },
            });

            setStatus("sucess");
            setUploadProgress(100);
        } catch (error) {
            console.log(error);
            setStatus("error");
            setUploadProgress(0);
        } finally {
            setFile(null);
            setStatus("idel");
        }
    }

    return (
        <div className="space-y-5">
            <input type="file" onChange={handelFileChange} />
            {file && status !== "sucess" && (
                <div className="text-2xl">
                    <p className="text-current">File name: {file.name}</p>
                    <p className="text-current">Size: {(file.size / 1024).toFixed(2)} KB</p>
                    <p className="text-current">Type: {file.type}</p>
                </div>
            )}

            {status === "uploaindg" && (
                <div className="space-y-2">
                    <div className="h-2.5 w-full bg-gray-600 rounded-full">
                        <div
                            className="h-2.5 rounded-full bg-primary-500 transition-all duration-300"
                            style={{ width: `${UploadProgress}%` }}
                        ></div>
                    </div>
                    {UploadProgress}%
                </div>
            )}

            {file && (
                <button
                    onClick={handelFileUpload}
                    className="bg-primary-500 text-white m-4 px-7 py-2 rounded-full"
                >
                    Upload
                </button>
            )}

            {status === "sucess" && (
                <p className="text-Gradient-one font-medium text-lg">File Uploaded Successfully!</p>
            )}
            {status === "error" && (
                <p className="text-warning font-medium text-lg">Upload Failed. Please try again.</p>
            )}
        </div>
    );
}

export default FileUploader;