import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { getProducts, landingMakeQuery } from '../feature/productSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SearchSuggestions from './SearchSuggestions'

const MainSearchBox = ({productTypes, typeIdx, inputValue, handleDebounce}) => {
  

  // console.log(productTypes, typeIdx, inputValue, handleDebounce)

  return (
    <div className="relative w-full max-w-md ">
  <input
    type="text"
    placeholder={`Search "${productTypes[typeIdx]}"`}
    className="input input-bordered w-full pr-10 border-2 border-black" // add right padding for icon
    value={inputValue}
    onChange={handleDebounce}
  />

  <button  className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
    <FaSearch />
  </button>

  {/* suggestions */}
  {
    (
      <div className='absolute right-0 z-10'>
        <SearchSuggestions  />
      </div>
    )
  }
</div>
  )
}

export default MainSearchBox