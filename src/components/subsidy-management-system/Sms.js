import React, { Component } from 'react';
import Menu from './Menu';
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

export class Sms extends Component {
 
  render() {
    return (
      <div>
        <section className="ekyc-head-bg" id="home">
        <Menu />
        <div className="container">
            <div className="row ekyc-row">
                <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                    <h2 className="def-h2">A complete Robust and Tamper-proof platform to control leaks in subsidy disbursement
                    </h2> 
                    <p className="ekyc-head-padding dig-pad">Right system in place to identify the right beneficiary.
                    </p>
                    
                    <form className="subscribe_form def-shad " id="sms" onSubmit={(e)=>{e.preventDefault();window.addrecord()}}>
                        <div className="input-group">
                            <input type="hidden" id="source" className="source" value="SMS (Subsidy Management System)"/>
                            <input type="email" name="email" id="email" className="form-control email" placeholder="Your email address" required/>
                            <span className="input-group-btn">
                            <button className="btn btn-default ekyc-getstarted-btn form-control" type="submit" >Get Started
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

    <section className="kyc-off-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                    <h2 className="def-h2">SMS is so simple and easy to use, how?
                    </h2>
                </div>
            </div>
            <div className="row kyc-off-row">
                <div className="col-md-10 col-md-offset-1 col-xs-12">
                    <div className="row text-center">
                        <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                    <img className="kyc-off-img" src="./images/sms/easy-integrate.svg" />
                                    <h4>Easy to integrate</h4>
                                    <p>With our APIs, SDKs, Gateway we make the integration process so simple</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                    <img className="kyc-off-img" src="./images/sms/scalable.svg" />
                                    <h4>Scalable solution </h4>
                                    <p> Designed in a way that is capable of handling increasing demands.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                    <img className="kyc-off-img" src="./images/sms/stack.svg" />
                                    <h4>Supports all means of the stack</h4>
                                    <p>Support web, windows, Linux (POS Terminals) & Android
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                    <img className="kyc-off-img" src="./images/sms/authencity.svg" />
                                    <h4>Tamper-proof system</h4>
                                    <p>Difficult to break the system which ensures authentic data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="kyc-att-sec"  id="features">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-10 col-md-offset-1 col-xs-12">
                    <h2 className="def-h2">How efficient is Subsidy Management system(SMS)?
                    </h2>
                </div>
            </div>
            <div className="row kyc-att-row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box ">
                            <img src="./images/sms/synzap-Asset 5.svg" />
                            <h3>Geo location tagging</h3>
                            <p>Monitoring Transactions based on Location as decided by the entity/organization.</p> 
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box ">
                            <img src="./images/sms/synzap-Asset 6.svg" />
                            <h3>Real time monitoring</h3>
                            <p> Keeping track of all transactions happening on any connected on a real time basis.</p> 
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box" >
                            <img src="./images/sms/synzap-Asset 7.svg" />
                            <h3>Structured Shift Management</h3>
                            <p>Dynamic shift creation and management service customized to any entity/organization.</p> 
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box ">
                            <img src="./images/sms/synzap-Asset 8.svg" />
                            <h3>Instant report generation</h3>
                             <p>Select from a different variety of 18 reports available in-built in the system.</p> 
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box ">
                            <img src="./images/sms/dynamic.svg" />
                            <h3>Dynamic Hierarchy & Punches</h3>
                             <p>Pick the number of punches per day & number of reporting levels at the time of sign-up.</p> 
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box ">
                            <img src="./images/sms/synzap-monitor.svg" />
                            <h3>Fraud monitoring through our NOC</h3>
                             <p>State of the Art Network Monitoring Center for dynamically monitoring the transactions.</p> 
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
                            <p> Depends on the volume of transactions.</p>
                            
                            <br />
                            
                        </div>
                        <div className="col-md-6 trn-right ecos-right">
                            <h4>One time setup cost </h4>
                            {/* <h2>$20</h2> */}
                            <p>Depends on the number of business applications and hardware devices that Aadhaar services to be integrated.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
               <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}><button className="btn-back-dark-small ">Get Started</button></Link> 
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
                                      Apart from solution costing, a client needs to pay directly to UIDAI for a license fee, bank guarantee, Hardware for hosting the solution, that is DSC, SSL certificates. ASA transaction cost to concern ASA. 
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
                                        Is there any further support provided by Syntizen after solution deployment?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                     Yes, we do provide support for the solution deployed.

                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFour">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Do we need to pay ASP cost to syntizen?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div className="panel-body">
                                    No, you need to pay it to the concern ESPASA.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingNine">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        Do we get any assistance from you at the time of Audits? If yes, will there be any separate charge involved?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
                                <div className="panel-body">
                                   Yes, we do assist at the time of Audits.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                          <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTen">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          Do you charge any, for the future upgrades?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div className="panel-body">
                                  No, We don’t charge any cost for future upgrades if you choose per transaction model.

                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFive">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                         Is there any limit in number for integration of hardware devices?

                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div className="panel-body">
                                    Yes, a  there is a limit on the number of integrations.

                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingSix">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                       Do we need a license to use Syntizen’s SYNZAP?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                <div className="panel-body">
                                    Yes, you need an AUA/KUA license which can be procured from UIDAI. We also facilitate the process of making the organization AUA/KUA.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingSeven">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                         Once we get the approval from UIDAI(i.e license from UIDAI), How long it will take to onboard us as AUA/KUA?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                <div className="panel-body">
                                     It will take 10 to 15 days to onboard you as AUA/KUA.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingEight">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                         Which platforms will SYNZAP solution support?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                <div className="panel-body">
                                   Windows, Web,  Linux, Android
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingEleven">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        What will you provide for Integration?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseEleven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEleven">
                                <div className="panel-body">
                                   We will provide SDKs, APIs, Web gateway depending on the requirement.
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

      </div>
    )
  }
}

export default Sms
