'use client'

import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import Illustration from "../components/illustration"
import styles from "../styles/analytics/styles.css"
import { RWebShare } from 'react-web-share'
import { useEffect, useState } from 'react';



const Analytics = () => {
  const [currDomain, setCurrDomain] = useState()
  
  useEffect(() => {
    setCurrDomain(window.location.origin)
  }, [setCurrDomain])
  
  return (
    <div className="flex flex-col gap-8 items-center">
      <Illustration></Illustration>

      <article className="text-lightgray sm:w-full md:w-3/4 text-center gap-3 flex flex-col items-center ">
        <h2 className="font-semibold sm:w-3/4 lg:w-1/2 text-5xl">Thanks For Your Support!</h2>
        
        <RWebShare
          data={{
            text: "Umetoboka kakitu leo? Share with us your experience if you've had to pay a bribe recently on our platform, M-Kora",
            url: `${currDomain}/report`,
            title: "Share M-Kora survey form",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button id="share-btn" className="scale-up-center submit-btn flex gap-3 justify-center items-center">
            <IosShareRoundedIcon></IosShareRoundedIcon>
            Share
          </button>
        </RWebShare>

        <p className="p-text mt-10">Your contribution is highly valued. Your information is vital in helping us paint a clearer picture of corruption incidents, which will soon be displayed on this visualization page.</p>
        <p className="p-text">You can encourage your friends, family, and colleagues to add their voice by clicking the share button ☝🏾.</p>
      </article>

      
    </div>
  )
}
export default Analytics