import Image from 'next/image'
import styles from "../styles/components/brand.css"

// logo and name
export default function Brand({direction = "row"}) {
  return (
    <>
      { direction == "col" ? (
        <div className='flex flex-col items-center'>
          <Image
            src="/mkora.svg"
            alt="mkora-logo"
            width="100"
            height="100"
            className="md:scale-150 sm:scale-95"
          ></Image>

          <h1 className='text-primary sm:text-5xl md:text-7xl md:mt-6 font-semibold font-sans'>M-Kora</h1>
        </div>
      ) : (
          <div className='flex flex-row items-center'>
            <Image
              src="/mkora.svg"
              alt="mkora-logo"
              width="100"
              height="100"
              className="scale-95"
            ></Image>

            <h1 className='text-primary text-5xl font-semibold font-sans'>M-Kora</h1>
          </div>
          
      )}
    </>
  )
}