import React, { memo } from 'react'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserDropDown = ({user, handleLogout}) => {
  return (
    <details className="hidden sm:dropdown">
  <summary className="btn m-1">
    <p>{user?.name}</p>
    {/* <img src={user?.avater} alt={user?.name} className='w-10 h-5 rounded-full'/> */}
    <FaArrowDown className='text-lg text-black'/>
  </summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link to="/chat">My Chats</Link></li>
    <li><Link to="/myproducts">My Products</Link></li>
    <li><Link>Wishlist</Link></li>
    <li><button onClick={handleLogout}>Logout</button></li>
  </ul>
</details>
  )
}

export default memo(UserDropDown)