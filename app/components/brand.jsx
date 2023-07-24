// logo and name

import Image from 'next/image'
import styles from "../styles/components/brand.css"

export default function Brand() {
  return (
    <div className='flex md:flex-col sm:flex-row md:items-center'>
      <Image
        src="/mkora.svg"
        alt="mkora-logo"
        width="100"
        height="100"
        className="md:scale-150 sm:scale-95"
      ></Image>

      <h1 className='text-primary sm:text-5xl md:text-7xl md:mt-6 font-semibold font-sans'>M-kora</h1>
      
    </div>
  )
}