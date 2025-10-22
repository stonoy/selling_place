import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { filterMakeQuery, getProducts } from '../feature/productSlice'
import { ItemCard, Loader, Sidebar } from '../components'

const FilterPage = () => {
    const {type} = useParams()
    const {queryObj, products, loading} = useSelector(state => state.product)
    const dispatch = useDispatch()

    // console.log(queryObj, products, loading, type)

    useEffect(() => {
        dispatch(filterMakeQuery({type}))
        dispatch(getProducts())
    },[type, queryObj.typeSpecificLocation, queryObj.priceRange])

    if (loading){
      return <Loader />
    }

  return (
    <section className='flex gap-2'>
        <div className='w-1/4'>
            <Sidebar type={type} />
        </div>
        <div className='w-3/4'>
            <div className='flex justify-center items-center flex-wrap gap-4'>
              {
                products?.map(product => <ItemCard key={product._id} item={product} />)
            }
          </div>
        </div>
    </section>
  )
}

export default FilterPage