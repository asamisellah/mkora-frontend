export default function Select({ label, name, validators, options = [], register }) {
  
  return (
    <section className="field">
      <label className="label">{ label }</label>
      
      <select className="input" {...register(name, { ...validators })}>
        {options.length && options.map(option => {
          return (
            <option key={option.value} value={option.value}>{option.name["english"] ? option.name["english"] : option.name }</option>
          )
        }
        )}
        
      </select>
    </section>
    
  )
}