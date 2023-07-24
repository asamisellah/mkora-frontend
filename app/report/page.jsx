'use client'

import { useForm } from "react-hook-form"
import Input from "../components/input"
import Select from "../components/select"
import { fields, options } from "../constants"

const Statistics = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  const language = "english"


  const renderInputs = () => {
    return fields.map((field, index) => {

      switch (field.type) {
        case "select":
          // Get the options based on the name
          return (
            <Select
              key={index}
              {...field}
              register={register}
              label={field.label[language]}
              name={field.name}
              options={options[field.name]}
            >
            </Select>
          )
      
        default:
          return (
            <Input
              key={index}
              {...field}
              register={register}
              label = {field.label[language]}
              name={field.name}
            ></Input>
          )
      }

    }) 
  }
  
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {renderInputs()}

      <input className="bg-primary text-lightgray font-semibold md:w-4/12 py-2.5 px-8 mt-5 rounded-xl" type="submit" />
    </form>
  )
}
export default Statistics