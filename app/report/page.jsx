'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ErrorMessage } from "react-hook-form"
import Input from "../components/input"
import Select from "../components/select"
import { fields, options } from "../constants"
// import { getOptions } from "../api/route"


const Report = () => {
  // const [options, setOptions] = useState({})

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitted }, } = useForm(
    {
      defaultValues: {
        amount: ""
      }
    })
  const language = "swahili"

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
    console.log(data)
  }

  // console.log('Errors', errors)

  // console.log('IsDirty', isDirty, 'dirtyFields', dirtyFields)

  


  const renderInputs = () => {
    return fields.map((field, index) => {

      switch (field.type) {
        case "select":
          // Get the options based on the name
          const {optionName, optionKeys = {name: "name", value: "value"}} = field.optionsKey
          return (
            <>
              <Select
                key={field.name}
                {...field}
                register={register}
                label={field.label[language]}
                name={field.name}
                options={options[optionName]}
                optionKeys={optionKeys}
                errors={errors[field.name]}
                validators={field.validators[language]}
              >
              </Select>
          </>
          )
      
        default:
          return (
            <>
              <Input
                key={field.name}
                {...field}
                register={register}
                label = {field.label[language]}
                name={field.name}
                errors={errors[field.name]}
                validators={field.validators[language]}
              ></Input>
              
            </>
          )
      }
    }) 
  }
  
  return (
    <>
      {isSubmitted ? (
        <div className="text-lightgray font-semibold text-xl text-center flex flex-col">
          <p className="mb-4"> Successfully submitted. Thank you for your contribution! </p>
          <Link className="text-primary mb-2 hover:text-opacity-75" href="/analytics">View statistics</Link>
          <Link className="text-primary hover:text-opacity-75" href="/">Back</Link>
        </div>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {renderInputs()}
          <input
            className="submit-btn"
            disabled={isSubmitting}
            type="submit" />
        </form>
        )
      }
    </>
  )
}
export default Report