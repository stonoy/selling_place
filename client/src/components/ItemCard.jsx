import React, { memo, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from "../feature/userSlice";

const ItemCard = ({ item}) => {
    const [hover, setHover] = useState(false)
    const [imgId, setImgId] = useState(0)
    const {user, userSubmitting} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        let intId
        if (hover){
            intId = setInterval(() => {
                setImgId(prev => {
                    // console.log(item.title, prev)
                    if (prev === item?.images.length-1){
                        return 0
                    } else {
                        return prev+1
                    }
                })
            }, 1500)
        }

        return () => {
            clearInterval(intId)
        }
    }, [hover])

    const handleWishList = () => {
      dispatch(addToWishList(item._id)).then((data) => {
        if (data?.payload === "no cookie"){
            navigate("/login")
        }
      })
    }

  return (
    <div className="relative border basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white">
        <Link to={`/product/${item._id}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="block ">
      
      {/* Featured label */}
      {item?.featured && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded z-10">
          Featured
        </span>
      )}

      {/* Image carousel */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={item.images[imgId]}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
        {item.images.length > 1 && (
          <div className="absolute bottom-2 right-2 flex space-x-1">
            {item.images.map((_, idx) => (
              <span
                key={idx}
                className="w-2 h-2 rounded-full bg-white opacity-70"
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold line-clamp-1">{item.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-gray-900 text-lg">
            ₹{item.price.toLocaleString()}
          </span>
          {/* <span className="text-sm text-gray-600">{item.sellerName}</span> */}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
          <span>{item.category}</span>
          <span>{item.location}</span>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
          {item.isSold && (
            <span className="text-red-500 font-bold">Sold</span>
          )}
        </div>
      </div>

      
    </Link>
    {/* Wishlist icon */}
      <button disabled={userSubmitting} onClick={handleWishList} className={`absolute top-2 right-2 ${user?.wishlist.includes(item?._id) ? "text-red-500" : "text-slate-500"} hover:text-red-500 transition-colors`}>
        <FaHeart />
      </button>
    </div>
  );
};

export default memo(ItemCard);
