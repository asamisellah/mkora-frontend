import Image from 'next/image'
import styles from "../styles/components/illustration.css"

const Illustration = () => (
  <div className='bg-div'>
      <Image
        src="https://mkora.blob.core.windows.net/mkora/thanks-bg-brown.svg"
        alt="Thank you!"
        width="100"
        height="100"
        className="illustration-bg-img"
      ></Image>
    <div className="img-div rotate-scale-down">
      <Image
        src="https://mkora.blob.core.windows.net/mkora/thanks-brown.svg"
        alt="Thank you!"
        width="100"
        height="100"
        className="illustration-img"
      ></Image>
    </div>
  </div>
)

export default Illustration;
