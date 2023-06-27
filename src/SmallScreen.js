
import icon3 from "./icons/cross-icon.png"

const SmallScreen = () => {
      return (
            <div className="SmallScreen">
                  <div className="container2">
                        <div className="Content">
                              <div className="start">Workorder</div>
                              <div className="cross"><img src={icon3} alt="" /></div>
                        </div>
                        <div className="Client One">
                              <label htmlFor="Client">Client</label>
                              <select for="client" >
                                    <option value="">Client Name</option>
                              </select>
                        </div>
                        <div className="Client">
                              <label htmlFor="Client">Date of Commencement</label>
                              <input type="input"
                                    placeholder="dd/mm/yyyy" />
                        </div>
                        <div className="Client">
                              <label htmlFor="Client">Date of Completion</label>
                              <input type="input"
                                    placeholder="dd/mm/yyyy" />
                        </div>
                        <div className="Client">
                              <label htmlFor="Client">RFQ code</label>
                              <input type="input" placeholder="RFQ Code" />
                        </div>

                        <button>Done</button>

                  </div>
            </div>
      )
}

export default SmallScreen;