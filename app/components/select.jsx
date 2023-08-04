export default function Select({ label, name, validators, options = [], register, optionKeys, errors }) {
  
  return (
    <section className="field">
      <label className="label">{ label }</label>
      
      <select className="input" {...register(name, { ...validators })}>
        <option value="">Select...</option>
        {options.length && options.map(option => {
          return (
            <option
              key={option[optionKeys.value]}
              value={option[optionKeys.value]}>
              {option[optionKeys.name]["english"] ? option[optionKeys.name]["english"] : option[optionKeys.name]}
            </option>
          )}
        )}
      </select>
      {errors && <p className="text-primary text-xs pt-2">{errors.message }</p>}
    </section>
    
  )
}