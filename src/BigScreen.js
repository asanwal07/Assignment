
// import { useState } from "react";

import "./index.css";
import icon from "./icons/arrow-icon.png"
import icon2 from "./icons/plus-icon.png"







const BigScreen = () => {
      return (
            <div className="BigScreen">

                  <div className="CreateWork">
                        <div className="arrow">
                              <div className="arrowcontainer">
                                    <img src={icon} alt="arrow_here" />
                              </div>
                              <div className="heading">
                                    <h5>Create Workfolder</h5>
                              </div>
                        </div>
                        <div className="save">
                              <button>Save</button>
                        </div>
                  </div>

                  <div className="selector">
                        <div className="overview"  >Overview</div>
                        <div className="other" >Other</div>
                  </div>


                  <div className="Container">
                        <div className="one">
                              <div className="packages">
                                    <div className="checkbox">
                                          <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="content">
                                          Packages
                                    </div>
                              </div>
                              <div className="rate">Rate <em>(in sqft)</em></div>
                              <div className="total">Total</div>
                        </div>
                        <div className="two">
                              <div className="packages">
                                    <div className="checkbox">
                                          <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="content">
                                          Civil1
                                    </div>
                              </div>
                              <div className="rate">567.80</div>
                              <div className="totalplus">
                                    <div className="total">2,98,6792</div>
                                    <div className="plus"><img src={icon2} alt="" /></div>
                              </div>

                        </div>
                        <div className="two">
                              <div className="packages">
                                    <div className="checkbox">
                                          <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="content">
                                          Civil1
                                    </div>
                              </div>
                              <div className="rate">567.80</div>
                              <div className="totalplus">
                                    <div className="total">2,98,6792</div>
                                    <div className="plus"><img src={icon2} alt="" /></div>
                              </div>

                        </div>
                        <div className="two">
                              <div className="packages">
                                    <div className="checkbox">
                                          <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="content">
                                          Civil1
                                    </div>
                              </div>
                              <div className="rate">567.80</div>
                              <div className="totalplus">
                                    <div className="total">2,98,6792</div>
                                    <div className="plus"><img src={icon2} alt="" /></div>
                              </div>

                        </div>
                        <div className="two">
                              <div className="packages">
                                    <div className="checkbox">
                                          <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="content">
                                          Civil1
                                    </div>
                              </div>
                              <div className="rate">567.80</div>
                              <div className="totalplus">
                                    <div className="total">2,98,6792</div>
                                    <div className="plus"><img src={icon2} alt="" /></div>
                              </div>

                        </div>
                        <div className="two">
                              <div className="packages">
                                    <div className="checkbox">
                                          <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="content">
                                          Civil1
                                    </div>
                              </div>
                              <div className="rate">567.80</div>
                              <div className="totalplus">
                                    <div className="total">2,98,6792</div>
                                    <div className="plus"><img src={icon2} alt="" /></div>
                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default BigScreen;