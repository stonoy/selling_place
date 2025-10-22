import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { delQuery, getProducts } from '../feature/productSlice';
import { useNavigate } from 'react-router-dom';

const provideRangeSapn = (queryObj, query) => {
    return <><span>Price: </span><span>{queryObj[query].split(",")[0]}</span> - <span>{queryObj[query].split(",")[1]}</span></> 
}

const Queries = () => {
    const {queryObj} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelQuery = (query) => {
        if (query === "type"){
            dispatch(delQuery(query))
            // dispatch(delQuery("typeSpecificLocation"))
            // dispatch(delQuery("priceRange"))
            navigate("/")
        } else {
            dispatch(delQuery(query))
        }
    }

  return (
    <div className='flex justify-center items-center gap-2'>
        {
            Object.keys(queryObj).map((query,i) => {
                if (queryObj[query] !== "India"){
                    return (
                    <div key={i} className='flex p-2 rounded-full text-slate-600 border-2 shadow-lg border-blue-500 justify-center items-center gap-2'>
                        {query === "priceRange" ? provideRangeSapn(queryObj, query) : <p>{queryObj[query]}</p>}
                        <button onClick={() => {
                            handleDelQuery(query)
                            // dispatch(getProducts())
                        }}><ImCancelCircle /></button>
                    </div>
                )
                }
            })
        }
    </div>
  )
}

export default Queries