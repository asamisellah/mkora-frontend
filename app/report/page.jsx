'use client'

import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../components/input"
import Select from "../components/select"
import { fields } from "../constants"
import { getOptions, postReport } from "../api/route"
import { useRouter } from "next/navigation"
import { LanguageContext } from "../providers/LanguageProvider"


const Report = () => {
  const { language } = useContext(LanguageContext)
  const [options, setOptions] = useState({})
  const [isSubmitFailed, setIsSubmitFailed] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitted }, } = useForm()

  useEffect(() => {
    const fetchOptions = async () => {
      const options = await getOptions()
      setOptions(options)
    }
    fetchOptions()
  }, [])




  const onSubmit = async (data) => { 
    const response = await postReport(data)
    switch (response) {
      case 'Success':
        router.push('/analytics')
        break
      default:
        setIsSubmitFailed(true)
        break
      
    }
  }

  const onError = () => {}

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
              max={field.max}
            ></Input>
          )
      }
    }) 
  }
  
  return (
    <>
      {isSubmitFailed && <p className="text-primary">Unable to send your report at the moment. Please try again.</p>}
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit, onError)}>
        {renderInputs()}
        {isSubmitting ? (<div className="submit-btn">sending...</div>)
          : (
            <input
              className={`submit-btn ${isSubmitted? "disabled": ""}`}
              value={language === 'swahili'? 'Ripoti':'Report'}
              type="submit" />
          )}
      </form>
    </>
  )
}
export default Report