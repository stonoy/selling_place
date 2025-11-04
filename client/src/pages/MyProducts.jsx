import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProducts } from '../feature/productSlice'
import { ItemCard, Loader } from '../components'
import { useNavigate } from 'react-router-dom'

const MyProducts = () => {
  const {loading, myProducts} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // console.log(loading, products, queryObj)

    useEffect(() => {
        dispatch(getMyProducts()).then(({type}) => {
          if (type !== "product/getMyProducts/fulfilled"){
            localStorage.clear()
            navigate("/login")
          }
        })
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