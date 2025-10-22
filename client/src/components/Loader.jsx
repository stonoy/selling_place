import React, { memo, useEffect, useState } from 'react'
import { PiSpinnerGapBold } from "react-icons/pi";
import { loadingQuotes } from '../utilsClient';

const Loader = () => {
    const [quoteId, setQuoteId] = useState(0)

    useEffect(() => {
        const intId = setInterval(() => {
            setQuoteId(p => {
                if (p === loadingQuotes.length-1){
                    return 0
                } else {
                    return p+1
                }
            })
        }, 1500)

        return () => {
            clearInterval(intId)
        }
    }, [])

  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <div className='flex flex-col gap-4 justify-center items-center rounded-md shadow-lg p-4 bg-gray-200'>
            <h1>{loadingQuotes[quoteId]}</h1>
            <PiSpinnerGapBold className='text-2xl animate-spin' />
        </div>
    </div>
  )
}

export default memo(Loader)