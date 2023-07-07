const Survey = () => {
  return (
    <form action="" method="post">

      <div className="mx-4">
        <div className="flex flex-col">
          <label htmlFor="office">Which government office did it happen?</label>
          <select id="office" name="office">
            <option value="huduma">Huduma center</option>
            <option value="kra">KRA</option>
            <option value="nhif">NHIF</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount">How much did you pay?</label>
          <input type="number" id="amount" name="amount"/>
        </div>
        

        <div className="flex flex-col">
          <label htmlFor="county">Location</label>
          <select id="county" name="county">
            <option value="nairobi">Nairobi</option>
            <option value="kisumu">Kisumu</option>
            <option value="mombasa">Mombasa</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date">When did it happen?</label>
          <input type="number" id="amount" name="amount"/>
        </div>

        <div className="flex flex-col">
          <label>Did it work?</label>
          <div className="flex">
            <div>
              <input type="radio" id="success" name="success" value="true"></input>
              <label htmlFor="success">Yes</label>
            </div>

            <div>
              <input type="radio" id="fail" name="success" value="false"></input>
              <label htmlFor="fail">No</label>
            </div>
          </div>
        </div>
          
        <button type="submit">Report</button>

      </div>
    </form>
  )
}

export default Survey