import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delQuery, getProducts, setPage } from '../feature/productSlice'
import { ItemCard, Loader } from '../components'
import { useParams } from 'react-router-dom'
import { getUser } from '../feature/userSlice'

const Landing = () => {
    const {loading, products, queryObj, page, numOfPages} = useSelector(state => state.product)
    const dispatch = useDispatch()

    // console.log(loading, products, queryObj)

    useEffect(() => {
       


        dispatch(delQuery("typeSpecificLocation"))
        dispatch(delQuery("priceRange"))
        dispatch(delQuery("type"))
        dispatch(getProducts())
        
    }, [queryObj.location, queryObj.search])

    // console.log(products)

    // pagination
    // const handlePageChange = () => {
    //   dispatch(setPage(page+1))
    //   dispatch(getProducts())
    // }

    if (loading){
      return <Loader />
    }
  return (
    <section>
      {/* show items */}
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {
        products?.map(product => <ItemCard key={product._id} item={product} />)
      }
      </div>
      {/* <button disabled={page === numOfPages} onClick={handlePageChange}>Load More</button> */}
    </section>
  )
}

export default Landing