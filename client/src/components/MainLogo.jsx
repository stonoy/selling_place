import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const MainLogo = () => {
  return (
    <Link to="/" className='block w-44 h-12' >
        <img src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg" className='w-12 h-12' alt="" />
    </Link>
  )
}

export default memo(MainLogo)