import { useContext } from "react"
import { LanguageContext } from "../providers/LanguageProvider"

export default function Select({ label, name, validators, options = [], register, optionKeys, errors }) {
  const { language } = useContext(LanguageContext)
  
  return (
    <section className="field">
      <label className="label">{ label }</label>
      
      <select className="input" {...register(name, { ...validators })}>
        <option value="">{ language === 'swahili' ? 'Chagua...' : 'Select...'}</option>
        {options.length && options.map(option => {
          return (
            <option
              key={option[optionKeys.value]}
              value={option[optionKeys.value]}>
              {option[optionKeys.name][language] ? option[optionKeys.name][language] : option[optionKeys.name]}
            </option>
          )}
        )}
      </select>
      {errors && <p className="text-primary text-xs pt-2">{errors.message }</p>}
    </section>
    
  )
}