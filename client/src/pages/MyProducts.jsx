import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProducts } from '../feature/productSlice'
import { ItemCard, Loader } from '../components'

const MyProducts = () => {
  const {loading, myProducts} = useSelector(state => state.product)
    const dispatch = useDispatch()

    // console.log(loading, products, queryObj)

    useEffect(() => {
        dispatch(getMyProducts())
    }, [])

    // console.log(products)

    if (loading){
      return <Loader />
    }
  return (
    <section>
      {/* show items */}
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {
        myProducts?.map(product => <ItemCard key={product._id} item={product} />)
      }
      </div>
    </section>
  )
}

export default MyProducts