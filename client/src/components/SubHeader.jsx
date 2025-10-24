import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa";
import MegaMenu from './MegaMenu';
import { getProducts } from '../feature/productSlice';

const SubHeader = () => {
    const {loading, categoryObj, productTypes} = useSelector(state => state.product)
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef(null)
    const btnRef = useRef(null)
    const dispatch = useDispatch()

    // console.log(loading, categoryObj, productTypes, showMenu)

    useEffect(() => {
        const handler = (e) => {
            
            if (menuRef.current && !menuRef.current.contains(e.target)){
                if (!btnRef.current.contains(e.target)){
                    setShowMenu(false)
                }
                
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    

  return (
    <div className='flex relative justify-around items-center gap-2 p-2'>
        <div>
            <button ref={btnRef} className='py-1 px-2 flex items-center justify-between gap-4' onClick={() => setShowMenu(p => !p)} disabled={loading}>All Categories 
                <FaArrowDown className={`transition-transform duration-500 ${showMenu ? "rotate-180" : "rotate-0"}`}/></button>
        </div>
        {/* Types */}
        <div className='hidden sm:flex justify-center items-center gap-2'>
            {
                productTypes.slice(0,8).map((type,i) => {
                    return (
                        <Link key={i} to={`/filter/${type}`}>{type}</Link>
                    )
                })
            }
        </div>
        <div className=''>
            <h1>{new Date().toLocaleDateString()}</h1>
        </div>
        {/* Mega menu */}
        <MegaMenu categoryObj={categoryObj} showMenu={showMenu} menuRef={menuRef} />
    </div>
  )
}

export default memo(SubHeader)