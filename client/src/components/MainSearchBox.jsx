import React from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchSuggestions from './SearchSuggestions'

const MainSearchBox = ({ productTypes, typeIdx, inputValue, handleDebounce }) => {
  return (
    <div className="relative flex-1 w-full max-w-full mx-auto">
      {/* Input */}
      <input
        type="text"
        placeholder={`Search "${productTypes[typeIdx]}"`}
        className="input input-bordered w-full pr-10 border-2 border-black"
        value={inputValue}
        onChange={handleDebounce}
      />

      {/* Search Icon */}
      <button className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
        <FaSearch />
      </button>

      {/* Suggestions */}
      <div className="absolute top-full left-0 w-full z-50 mt-1">
        <SearchSuggestions />
      </div>
    </div>
  )
}

export default MainSearchBox
