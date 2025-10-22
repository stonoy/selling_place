import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { landingMakeQuery, resetSuggestions } from '../feature/productSlice'

const SearchSuggestions = () => {
  const {suggestions, loading} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(suggestions, loading)

  return (
    <div className={`${suggestions.length === 0 ? "hidden" : "block"} w-full text-xs h-72 overflow-y-scroll rounded-md bg-base-200 lg:text-md`}>
        {
          loading ?
          <h1 className='w-full'>Loading...</h1>
          :
          <div className='flex flex-col gap-1 '>
            {
              suggestions?.map((suggestion,i) => {
                return (
                  <button onClick={() => {
                      dispatch(resetSuggestions())
                      dispatch(landingMakeQuery({search: suggestion?.title}))
                      navigate("/") // it wont trigger when clicked from "/" page
                      // dispatch(getProducts())
                    }} key={i} className='flex justify-between gap-1 items-center p-1 m-1 border-b-2 border-slate-300'>
                    <span className=''>{suggestion?.title}</span>
                    <span>{suggestion?.type}</span>
                  </button>
                )
              })
            }
          </div>
        }
      </div>
  )
}



export default memo(SearchSuggestions)