import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import SocialLogos from './SocialLogos';

const UserDetailsModal = ({setShoUserDetails, user, handleLogout}) => {
  return (
    <div className='absolute flex  sm:hidden w-full h-screen top-0 left-0 z-20 bg-slate-100'>
        {
            user ?
            <div className='flex flex-col justify-between '>
                <ul className="menu bg-base-200 rounded-box w-56">
            <button onClick={() => setShoUserDetails(false)}>
                <MdOutlineCancel  className='text-xl text-red-600'/>
            </button>
            <li className="menu-title text-slate-800 font-bold capitalize">{user?.name}</li>
            <li onClick={() => setShoUserDetails(false)}><Link to="/chat">My Chats</Link></li>
            <li onClick={() => setShoUserDetails(false)}><Link to="/myproducts">My Products</Link></li>
            <li onClick={() => setShoUserDetails(false)}><Link>Wishlist</Link></li>
            <li onClick={() => setShoUserDetails(false)}><button onClick={handleLogout}>Logout</button></li>
        </ul>
        <SocialLogos />
        </div>
        :
        <Link to="/login" className='inline-block justify-center items-center text-lg text-blue-600 font-bold underline'>Login</Link>
        }
    </div>
  )
}

export default UserDetailsModal