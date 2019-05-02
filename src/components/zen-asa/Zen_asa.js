import React, { Component } from 'react'
import Menu from './Menu';
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

export class Zen_asa extends Component {
  render() {
    return (
      <div>
        <section className="ekyc-head-bg" id="home"> 
         <Menu />
          <div className="container">
            <div className="row ekyc-row">
              <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                <h2 className="def-h2">Extend Authentication & e-KYC Services to any AUA/KUA's using your ASA
                </h2>
                <p className="ekyc-head-padding">Empower Organizations with ZEN ASA Platforms to avail UIDAI Services.</p>
                <form className="subscribe_form def-shad" onSubmit={(e)=>{e.preventDefault();window.addrecord()}}>
                  <div className="input-group">
                  <input type="hidden" id="source" value="ZEN ASA"/>
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
        <section className="kyc-off-sec" id="features" >
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                <h2 className="def-h2">Features</h2>
              </div>
            </div>
            <div className="row kyc-off-row">
              <div className="col-md-10 col-md-offset-1 col-xs-12">
                <div className="row text-center">
                  <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="images/zen-asa/Asset1.svg" />
                        <h4>UIDAI Compliant Core Engine</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="images/zen-asa/simple.svg" />
                        <h4>Simple & easy to integrate API’s for AUA/KUA’s</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="images/zen-asa/help.svg" />
                        <h4>Help in AUA/KUA Integration</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-md-offset-2 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="images/zen-asa/mis.svg" />
                        <h4>MIS Reports</h4>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                    <div className="def-shad valign-center">
                      <div className="asa-off-box">
                        <img className="kyc-off-img" src="images/zen-asa/analytics.svg" />
                        <h4>Analytics & Dashboards for Transaction Monitoring</h4>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>



          </div>
        </section>
      
        <section id="pricing">
        <div className="container">
            <div className="row text-center">
                <div className="col-xs-12">
                    <h2 className="def-h2">Simple and Transparent pricing - No hidden costs</h2>
                </div>
                
            </div>
            <div className="row kyc-trn-row dig-trn-row">
                <div className="col-md-6 col-md-offset-3 col-xs-12">
                    <div className="row">
                        <div className="col-md-6 trn-left ecos-left">
                            <h4>Transaction Fee</h4>
                            <p>Depends on the volume of transactions</p>
                            
                            <br />
                            
                        </div>
                        <div className="col-md-6 trn-right ecos-right">
                            <h4>One time setup cost</h4>
                            {/* <h2>$20</h2> */}
                            <p>Depends on the technology stack.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
                <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn-back-dark-small ">Get Started</button></Link>
            </div> 
        </div>
    </section>
        <section className="kyc-help-sec" id="faqs">
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
                        Apart from solution costing, a client needs to pay directly to UIDAI the AUA/KUA license fee, bank guarantee, procure Hardware (Servers, HSM, DSC, SSL, etc) for hosting the solution, ASA transaction cost to the concerned ASA.
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
                        No.
                                </div>
                    </div>
                  </div>
                 
                  <div className="panel panel-default def-shad">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          Do we need to pay ASP cost to syntizen?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        No, you need to pay it to the concerned ASA.
                                </div>
                    </div>
                  </div>
                 </div>
                <div className="col-md-6 col-xs-12">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Do we get any assistance from you at the time Audits?
                          if yes,will there be any separate charge involved?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                      <div className="panel-body">
                        Yes, we do assist at the time of Audits. The Audit costs have to be beared by the client.
                                </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSix">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          Do you charge any,for the future upgrades?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                      <div className="panel-body">
                        No, We don’t charge any cost for future upgrades.
                                </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSeven">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          Is there any limit in number of integration of hardware devices?
                                    </a>
                      </h4>
                    </div>
                    <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                      <div className="panel-body">
                        Yes,there is a limit on the number of integrations.Integration to any your first 3 applications is free and attracts charges from thereon.
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

export default Zen_asa;
