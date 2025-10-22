import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, resetFilters } from "../feature/productSlice";
import { Loader, MakeFeatured } from "../components";
import { createChat } from "../feature/chatSlice";
import { GoDotFill } from "react-icons/go";

const ProductDetails = () => {
    const {loading, theProduct} = useSelector(state => state.product)
    const {user} = useSelector(state => state.user)
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const {productId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(resetFilters())
    dispatch(getSingleProduct(productId))
  }, [])

  const isOwnProduct = theProduct?.userId?._id === user?._id

 

  const handleCreateChat = () => {
    dispatch(createChat(theProduct?.userId?._id)).then((data) => {
      
      if (data.type === "chat/createChat/fulfilled"){
        navigate(`/chat/${data?.payload?.theChat?._id}`)
      } else if (data?.payload === "no cookie"){
        navigate("/login")
      }
    })
  }

  if (!theProduct || loading){
    return <Loader />
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE - Images */}
        <div className="flex-1">
          {/* Main Image */}
          <div className="w-full aspect-video overflow-hidden rounded-lg border border-gray-200">
            <img
              src={theProduct.images[selectedImgIdx]}
              alt={theProduct.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-3 justify-center">
            {theProduct.images.map((img, i) => (
              <div
                key={i}
                className={`w-20 h-16 rounded-md overflow-hidden border-2 cursor-pointer ${
                  selectedImgIdx === i ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setSelectedImgIdx(i)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Title and Price */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{theProduct.title}</h1>
            <p className="text-3xl font-semibold text-green-600 mb-4">
              ₹{theProduct.price.toLocaleString()}
            </p>

            {/* Category and Type */}
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Category:</span> {theProduct.category}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Type:</span> {theProduct.type}
            </div>

            {/* Location */}
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Location:</span> {theProduct.location}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed">{theProduct.description}</p>
            </div>

            {/* Uncomment when feature added */}
            
            <div className="mt-4">
              <p className="text-sm text-gray-600"><span className="font-medium">Seller:</span> {theProduct?.userId?.name}</p>
            </div>

            {/* Make Featured */}
            {isOwnProduct && <MakeFeatured isFeatured={theProduct.featured} productId={theProduct?._id}/>}

            {theProduct.featured && (
              <span className="mt-2 inline-block px-2 py-1 text-xs font-semibold bg-yellow-400 text-gray-800 rounded">
                Featured
              </span>
            )}
           
          </div>

          {/* Footer section - Created date and status */}
          <div className="mt-6 text-sm text-gray-500 border-t pt-3">
            <p>Posted on: {new Date(theProduct.createdAt).toLocaleDateString()}</p>
            <p>Status: {theProduct.isSold ? "Sold" : "Available"}</p>
          </div>
          <div className="relative">
            <button
              onClick={handleCreateChat}
              className="relative mt-4 h-10 w-24 border-2 border-slate-500 text-blue-700 rounded-md flex items-center justify-center"
            >
              Chat

              {/* Online status signal */}
              {
                theProduct?.isUserOnline && <span className="absolute top-1 right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              }
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
