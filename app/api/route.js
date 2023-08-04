import axios from "axios"
import { NextResponse } from "next/server"
import { options } from "../constants"

// export const getOptions = async () => {
//   console.log(`url: ${process.env.SERVICE_BASE_URL}/options`)
//   await fetch(`http://localhost:9080/api/v1/options`, {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   }).then(res => {
//     const data1 = res.json()

//     const data = {
//       ...data1,
//       ...options
//     }
//     console.log('Responding here', data)
//     return NextResponse.json({ data })
//     // return data
//   }).catch(() => {
//     console.log('Something went wrong')
//     return NextResponse.json({ options })
//   })
// }

export const getOptions = (url) => {
  axios.get(url)
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(errors => {
      console.log(errors)
    })
}