import React, { memo } from 'react'

const SelectLanguages = ({languages}) => {
  return (
    <select className="select select-ghost w-full max-w-xs bg-white border-2 border-black">
        {
            languages?.map((lan, i) => {
                return (
                    <option key={i} value={lan}>{lan}</option>
                )
            })
        }
    </select>
  )
}

export default memo(SelectLanguages)