import React from 'react'
import { socialLogos } from '../utilsClient'

const SocialLogos = () => {
  return (
    <div className="flex  w-full bg-neutral text-neutral-content py-2">
  {socialLogos?.map((logo, i) => (
    <a
      href={logo?.href}
      target="_blank"
      rel="noreferrer"
      className="flex-1 flex justify-center items-center hover:text-white transition"
      key={i}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={logo?.svgPath} />
      </svg>
    </a>
  ))}
</div>

  )
}

export default SocialLogos