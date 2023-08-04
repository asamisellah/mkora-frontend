'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ErrorMessage } from "react-hook-form"
import Input from "../components/input"
import Select from "../components/select"
import { fields, options } from "../constants"
// import { getOptions } from "../api/route"
import useSWR from 'swr'
import { getOptions } from "../api/route"


const Report = () => {
  // const [options, setOptions] = useState({})
  const {data, error} = useSWR('https://mkora-service.azurewebsites.net/api/v1/options', getOptions)

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitted }, } = useForm()
  const language = "swahili"


  console.log("Options data", data)

  // useEffect(() => {
  //   const getOptions = async () => {
  //     const response = await fetch("https://mkora-service.azurewebsites.net/api/v1/options", {
  //       headers: {
  //           "Referrer-Policy": "Access-Control-Allow-Origin"
  //       }
  //     })
  //     const options = await response.json()
  //     console.log("Options***********", options)
  //   }
  //   getOptions()   
  // }, [])

  // On submit:
  // Check for valid state/errors (Validations if field is missing)
  // Submit data
  // Handle is submitting state
  // Handle is submitted state i.e. both error and success

  // useEffect(() => {
  // await fetch(`http://localhost:9080/api/v1/options`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  //    const fetchOptions = async() => {
  //     const result = await getOptions()
  //     if (!ignore) {
  //       console.log(result)
  //       setOptions(result)
  //     }
  //   }

  //   let ignore = false;

  //   fetchOptions()
      
  //   return () => {
  //     ignore = true;
  //   };
  // }, []) 

  
  

  const onSubmit = (data) => {
    console.log("*********", JSON.stringify(data))
    console.log("@@@@@@@@@2", isSubmitted)
  }

  const onError = () => {
    console.log("########", errors)
    console.log("@@@@@@@@@", isSubmitted)
  }

  const renderInputs = () => {
    return fields.map((field, index) => {

      switch (field.type) {
        case "select":
          // Get the options based on the name
          const {optionName, optionKeys = {name: "name", value: "value"}} = field.optionsKey
          return (
            <Select
              key={index+field.name}
              {...field}
              register={register}
              label={field.label[language]}
              name={field.name}
              options={options[optionName]}
              optionKeys={optionKeys}
              errors={errors[field.name]}
              validators={field.validators[language]}
            ></Select>
          )
      
        default:
          return (
            <Input
              key={index+field.name}
              {...field}
              register={register}
              label = {field.label[language]}
              name={field.name}
              errors={errors[field.name]}
              validators={field.validators[language]}
            ></Input>
          )
      }
    }) 
  }
  
  return (
    <>
      {/* {isSubmitted ? (
        <div className="text-lightgray font-semibold text-xl text-center flex flex-col">
          <p className="mb-4"> Successfully submitted. Thank you for your contribution! </p>
          <Link className="text-primary mb-2 hover:text-opacity-75" href="/analytics">View statistics</Link>
          <Link className="text-primary hover:text-opacity-75" href="/report">Back</Link>
        </div>
      ) : ( */}
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit, onError)}>
          {renderInputs()}
          <input
            className="submit-btn"
            disabled={isSubmitting}
            type="submit" />
        </form>
        {/* )
      } */}
    </>
  )
}
export default Report