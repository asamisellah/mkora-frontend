export default function Input ({label, name, type="text", validators, register}) {
  return (
    <section className="field">
      <label className="label">{ label }</label>
      <input type={type} className="input" {...register(name, {...validators})} />
    </section>
    
  )
}