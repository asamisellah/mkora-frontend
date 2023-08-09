import axios from "axios"
import { options } from "../constants"

export const getOptions = async () => {
  return await axios.get('https://mkora-service.azurewebsites.net/api/v1/options')
    .then(res => {

      const data = {
        ...options,
        ...res.data
      }
      return data
    }).catch((errors) => {
      console.log("Error while fetching options --->", errors)
      return options
    })
}

export const postReport = async (payload) => {
  return await axios.post('https://mkora-service.azurewebsites.net/api/v1/report', JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.statusText === "Accepted" || res.status === 200 ? 'Success' : 'Failed'
    })
    .catch(errors => {
      console.log("Error while posting report --->", errors)
      return "Failed"
    })
}