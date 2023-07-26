export default function Input({ label, name, type = "text", validators, register, errors, placeholder }) {
  return (
    <section className="field">
      <label className="label">{ label }</label>
      <input
        type={type}
        placeholder={placeholder}
        className="input" {...register(name, { ...validators })} />
      {errors && <p className="text-primary text-xs pt-2">{errors.message }</p>}
    </section>
  )
}