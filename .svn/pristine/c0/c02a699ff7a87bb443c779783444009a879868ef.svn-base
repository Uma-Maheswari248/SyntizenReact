import React, { Component } from 'react'
import Menu from './Menu';
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

export class Panverification extends Component {
  render() {
    return (
      <div>
        <section className="ekyc-head-bg" id="home"> 
         <Menu />
          <div className="container">
            <div className="row ekyc-row">
              <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                <h2 className="def-h2">One can verify the <span className="ekyc-head-p">Permanent Account Number </span>
               using Our APIs, Gateway </h2>
                <p className="ekyc-head-padding">A facility provided to certain eligible entities for verification of PAN details of a Citizen.</p>
                <form className="subscribe_form def-shad" onSubmit={(e)=>{e.preventDefault();window.addrecord()}}>
                  <div className="input-group">
                  <input type="hidden" id="source" value="PAN Verification"/>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Your email address" required/>
                    <span className="input-group-btn">
                     <button className="btn btn-default ekyc-getstarted-btn form-control" type="submit">Get Started
                                    </button>
                    </span>
                  </div>
                </form>
              </div>
              {/* <div className="col-md-6 col-md-offset-1 col-xs-12">
                <img className="kyc-head-img" src="images/ekyc/ekyc-AssetWindow.svg" />
              </div> */}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row text-center">
              <div className="col-xs-12">
                <h2 className="def-h2">Who is Eligible for the Verification</h2>
                <p>The following entities can avail online PAN verification facility</p>
              </div>
            </div>
            <div className="row kyc-trn-row">
              <div className="col-md-11 col-md-offset-1 col-xs-12">
                <div className="row">
                  <div className="col-md-6 trn-left">
                    {/* <h4>Transaction Fee</h4> *
                    <p>Depends on the volume of transaction being performed by the Organization</p>
                    <h5>Features Include</h5>*/}
                    <li>Insurance Web Aggregators</li>
                    <li>Banks</li>
                    <li>Insurance Company</li>
                    <li>Non-Banking Financial Companies approved by RBI</li>
                    <li>Companies and Government deductor (Required to file TDS/TCS return)</li>
                    <li>Insurance Repository</li>
                    <li>Credit card Companies / Institutions</li>
                    <li>Central Recordkeeping Agency of National Pension System</li>
                    <li>Depository Participants</li>
                    <li>Credit information companies approved by RBI</li>
                    <li>DSC issuing Authorities</li>
                    <li>Educational Institutions established by Regulatory Bodies</li>
                    <br />
                  </div>
                  <div className="col-md-6 trn-right pan-trn-right">
                    {/*<h4>One Time Fee</h4>
                     <h2>$20</h2> 
                    <p>Depends on the number of business applications and hardware devices that Aadhaar services need to be integrated.</p>*/}
                    <li>KYC Registration Agency (KRA)/Central KYC Registry</li>
                    <li>Any other entity required to furnish Annual Information Return</li>
                    <li>Companies (Required to furnish Annual Information Return)</li>
                    <li>Mutual Funds</li>
                    <li>Depositories</li>
                    <li>Government Agencies (Central/State)</li>
                    <li>Stock Exchanges/Commodity Exchanges/Clearing Corporations</li>
                    <li>Income Tax Projects</li>
                    <li>Department of Commercial Taxes</li>
                    <li>Goods and Services Tax Network</li>
                    <li>Reserve Bank of India</li>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center" id="features">
              <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn-back-dark-small ">Get Started</button></Link>
            </div>
          </div>
        </section>
        <section className="pan-off-sec" >
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                <h2 className="def-h2">Main features of Syntizen’s PAN verification </h2>
              </div>
            </div>
            <div className="row kyc-off-row">
              <div className="col-md-10 col-md-offset-1 col-xs-12">
                <div className="row text-center">
                  <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="images/PAN-Verification/instant-verification.svg" />
                        <h4>Instant Verification of the Citizen</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                      <img className="kyc-off-img" src="./images/PAN-Verification/id-card.svg" alt=""/>
                        <h4>Name, Date of Birth and Last ITR date details are provided.</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                      <img className="kyc-off-img" src="./images/PAN-Verification/single-bulk.svg" />
                        <h4>Single and Bulk PAN Upload features.</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="./images/PAN-Verification/reports-statistics.svg" />
                        <h4>Reports and Statistics.</h4>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="kyc-att-sec pan-price-sec" id="pricing">
        <div className="container">
                    <div className="row text-center">
                        <div className="col-xs-12">
                            <h2 className="def-h2">Simple and Transparent pricing - No hidden costs</h2>
                        </div>

                    </div>
                    <div className="row kyc-trn-row dig-trn-row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12">
                            <div className="row text-center">

                                <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 trn-right dig-right">
                                    <h4>SOFTWARE DEVELOPMENT COSTS</h4>
                                    <div className="text-left trn-right ">
                                    <h5>PRICE INCLUDES</h5>
                                    <li>Application Processing</li>
                                    <li>Testing</li>
                                    <li>Integration costs</li>
                                    </div>
                                    <br />
                                    <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}} > <button className="btn-back-dark-small " >Get Started</button></Link>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row text-center">

                    </div>
                </div>

        </section>

       
        <section className="pan-help-sec" id="faqs">
          <div className="container">
            <div className="row text-center">
              <h2 className="def-h2">How can we help?</h2>
              <p className="kyc-p-widh">Frequently Asked Questions</p>
            </div>
            <div className="row kyc-help-row">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="col-md-6 col-xs-12">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What all other costs are involved apart from solution costing?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                      Apart from solution costing, the client needs to pay PAN Web service Application Fee To NSDL.

                                </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Are there any AMC charges involved?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                      Yes. For the future developments, we charge on yearly basis.
                                </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Is there any further support provided by Syntizen after solution deployment?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                      Yes, we do provide support for the solution deployed.
                                </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-6 col-xs-12">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Do we need to pay web services cost to syntizen?

                                    </a>
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                      <div className="panel-body">
                      No, you need to pay it directly to NSDL.
                                </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSix">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Do we need any eligibility to use PAN services?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                      <div className="panel-body">
                      Yes, only authorized entities can avail PAN verification services.
                                </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSeven">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        What are the different hosting options available?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                      <div className="panel-body">
                       dsfgad
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      <section className="kyc-que-sec">
        <div className="container">
          <div className="row text-center">
            <h2 className="def-h2">You still have a question</h2>
            <p className="kyc-p-widh">if you can't find the answer in the FAQ section.<br /> You can always contact us. We will get back to you shortly!</p>
            <br />
          </div>
          <div className="row text-center kyc-que-row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="kyc-que-box def-shad">
                    <img src="images/ekyc/ekyc-Asset 17.svg" />
                    <h4>+91-7337494488</h4>
                    <p>We are always happy to help.</p>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="kyc-que-box def-shad">
                    <img src="images/ekyc/ekyc-Asset 18.svg" />
                    <h4>srikrishna.thota@syntizen.com</h4>
                    <p>Quicker way to reach us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div >
    )
  }
}

export default Panverification;
