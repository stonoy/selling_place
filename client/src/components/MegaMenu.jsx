import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../feature/productSlice'

const MegaMenu = ({showMenu, menuRef, categoryObj}) => {
    
  return (
    <div>
        {
            showMenu
            &&
            <div ref={menuRef} id="mega_menu" className='w-full absolute top-10 left-0 rounded bg-white shadow-xl text-black overflow-y-auto p-4 z-50'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2'>
                    {
                        Object.keys(categoryObj).map((category, i) => {
                            return (
                                <div key={i}>
                                    <h1 className='font-bold underline'>{category}</h1>
                                    <ul className="space-y-1 text-sm">
                                        {
                                            categoryObj[category].map((item, idx) => {
                                                return <li key={idx} >
                                                    <Link to={`/filter/${item}`}>{item}</Link>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default MegaMenu