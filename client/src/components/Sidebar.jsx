import React, { memo } from 'react'
import { extractCat, locationNum } from '../utilsClient'
import { useSelector } from 'react-redux'
import SideFilter from './SideFilter'
import PriceRangeFilter from './PriceRangeFilter'


const Sidebar = ({type}) => {
    const { categoryObj, products} = useSelector(state => state.product)

    // console.log( categoryObj, products)

    // console.log(categoryObj[extractCat(categoryObj, type)])
    // console.log(locationNum(products))

  return (
    <div className='flex flex-col gap-4'>
      <SideFilter header={type} options={categoryObj?.[extractCat(categoryObj, type)]}/>
      <SideFilter header={"Locations"} options={locationNum(products)} location={true}/>
      <PriceRangeFilter 
        min={0}
        max={2000000}
        step={1000}
         />
    </div>
  )
}

export default memo(Sidebar)