const Survey = () => {
  return (
    <form action="" method="post">

      <div className="mx-4">
        <div className="flex flex-col">
          <label className="label" htmlFor="office">Which government office did it happen?</label>
          <select className="input" id="office" name="office">
            <option value="huduma">Huduma center</option>
            <option value="kra">KRA</option>
            <option value="nhif">NHIF</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="label" htmlFor="amount">How much did you pay?</label>
          <input className="input" type="number" id="amount" name="amount"/>
        </div>
        

        <div className="flex flex-col">
          <label className="label" htmlFor="county">Location</label>
          <select className="input" id="county" name="county">
            <option value="nairobi">Nairobi</option>
            <option value="kisumu">Kisumu</option>
            <option value="mombasa">Mombasa</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="label" htmlFor="date">When did it happen?</label>
          <input className="input" type="date" id="amount" name="amount"/>
        </div>

        <div className="flex flex-col">
          <label className="label">Did it work?</label>
          <div className="flex items-center">
            <div className="mr-7">
              <input type="radio" id="success" name="success" value="true"></input>
              <label className="pl-4" htmlFor="success">Yes</label>
            </div>

            <div>
              <input type="radio" id="fail" name="success" value="false"></input>
              <label className="pl-4" htmlFor="fail">No</label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="button" type="submit">Report</button>
        </div>
        
      </div>
    </form>
  )
}

export default Survey