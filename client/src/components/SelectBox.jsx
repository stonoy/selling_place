import React, { memo } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { getProducts, landingMakeQuery } from '../feature/productSlice'
import { useNavigate } from 'react-router-dom'

const SelectBox = ({loading, locations}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="relative w-full max-w-xs ">
      <select
        className="select select-ghost w-full pl-10 bg-white border-2 border-black" // add left padding for icon
        disabled={loading}
        onChange={(e) => {
          e.target.blur();
          dispatch(landingMakeQuery({location: e.target.value}))
          // dispatch(getProducts())
          // navigate to home page
          navigate("/") // it wont trigger when clicked from "/" page
        }}
      >
        <option  selected>India</option>
        {locations.map((location, i) => (
          <option key={i} value={location}>{location}</option>
        ))}
      </select>
    
      <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 z-10 pointer-events-none text-gray-400" />
    </div>
  )
}

export default memo(SelectBox)