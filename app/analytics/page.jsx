import Illustration from "../components/illustration"

const Analytics = () => {
  return (
    <div className="flex flex-col items-center mt-7">
      <Illustration></Illustration>

      <article className="text-lightgray w-9/12 mt-7 text-center">
        <h2 className="font-semibold text-5xl">Thank You For Reporting</h2>
        <p className="mt-5 w-3/4 m-auto">Your contribution is highly valued. Your information is vital in helping us paint a clearer picture of corruption incidents, which will be displayed on our analytics page.</p>
        <p className="mt-4">But why stop here? You can encourage your friends, family, and colleagues to add their voice.</p>
      </article>

      <button className="submit-btn">Share</button>
    </div>
  )
}
export default Analytics