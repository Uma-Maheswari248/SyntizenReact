import React, { Component } from 'react';
import Menu from './Menu';

import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

export class Ekyc extends Component {
    render() {
        return (
            <div>
                <section className="ekyc-head-bg" id="home">
                    <Menu />
                    <div className="container">
                        <div className="row ekyc-row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                                <h2 className="def-h2">Identify a customer instantly using his/her Aadhaar Card in <span className="ekyc-head-p">Multiple Ways</span>
                                </h2>
                                <p className="ekyc-head-padding">Make your customer onboarding process more efficient, cost-effective and hassle-free</p>
                                <form className="subscribe_form def-shad" onSubmit={(e)=>{e.preventDefault();window.addrecord()}}>
                                    <div className="input-group">
                                    <input type="hidden" id="source" value="Offline eKYC (ZENX 2.0)"/>
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Your email address" required/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-default ekyc-getstarted-btn form-control" type="submit">Get Started
                                    {/* <!-- <i className="fas fa-long-arrow-alt-right arrow-right"></i> --> */}
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
                {/* <!-- Header section close --> */}
                {/* <!-- Offline kyc prefer open --> */}
                <section className="kyc-off-sec" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                                <h2 className="def-h2">What makes Syntizen Offline eKYC most preferable?</h2>
                                {/* <!--  <p className="kyc-p-widh">Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam nonummy nos.</p> --> */}
                            </div>
                        </div>
                        <div className="row kyc-off-row">
                            <div className="col-md-10 col-md-offset-1 col-xs-12">
                                <div className="row text-center">
                                    <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                                        <div className="def-shad valign-center">
                                            <div className="kyc-off-box">
                                                <img className="kyc-off-img" src="./images/ekyc/ekyc-Asset 1.svg" />
                                                <h4>Easy to Integrate</h4>
                                                <p>With our APIs, SDKs, Gateway we make the integration process seamless</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                                        <div className="def-shad valign-center">
                                            <div className="kyc-off-box">
                                                <img className="kyc-off-img" src="./images/ekyc/ekyc-Asset 2.svg" />
                                                <h4>Scalable Solution</h4>
                                                <p>Designed in a way that is capable of handling increasing demands</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                                        <div className="def-shad valign-center">
                                            <div className="kyc-off-box">
                                                <img className="kyc-off-img" src="./images/ekyc/ekyc-Asset 3.svg" />
                                                <h4>Supports all Stack</h4>
                                                <p>Support web, windows, & Android</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                                        <div className="def-shad valign-center">
                                            <div className="kyc-off-box">
                                                <img className="kyc-off-img" src="./images/ekyc/synzap-Asset 14.svg" />
                                                <h4>Authenticity of data</h4>
                                                <p>Our algorithms ensure the data generated after the transaction is authentic</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Offline kyc prefer close --> */}
                {/* <!-- Attendance system Opens --> */}
                <section className="kyc-att-sec" id="features">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-10 col-md-offset-1 col-xs-12">
                                <h2 className="def-h2">Here's how Offline e-KYC makes your customer onboarding process seamless</h2>
                                {/* <!-- <p className="kyc-p-widh">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p> --> */}
                            </div>
                        </div>
                        <div className="row kyc-att-row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                        <img src="./images/ekyc/different-ways.svg" />
                                        <h3>Different ways of collecting KYC</h3>
                                        <p> M-Aadhaar, e-Aadhaar & Regular Aadhaar can be used to collect KYC either by Scanning QR Core or by sharing XML’s.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box   ">
                                        <img src="./images/ekyc/ekyc-Asset 6.svg" />
                                        <h3>Drastically decreases customer onboarding process time.</h3>
                                        <p>Bring down the time of onboarding a customer from hours to minutes and that too in an authentic way.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box   ">
                                        <img src="./images/ekyc/ekyc-Asset 7.svg" />
                                        <h3>Reduction in operational costs</h3>
                                        <p>No need to spend in Stationary, Courier & other operational costs.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box   ">
                                        <img src="./images/ekyc/ekyc-Asset 8.svg" />
                                        <h3>End to End paperless process</h3>
                                        <p>KYC Details , Customer Application Form & Signing of Application Form is now just a click away and does not contain paper.</p>
                                    </div>
                                    {/* <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> --> */}
                                    <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box   ">
                                        <img src="./images/ekyc/ekyc-Asset 9.svg" />
                                        <h3>No huge investment required</h3>
                                        <p> Dont invest in Aadhaar Licenses and Hardware like Servers, HSM etc. Just Sign up and start using Offline KYC.</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box   ">
                                        <img src="./images/ekyc/ekyc-Asset 10.svg" />
                                        <h3>No need to be an AUA/KUA</h3>
                                        <p>No Aadhaar License is involved which means any organization/individual can now use Offline KYC.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Offline Kyc close --> */}
                {/* <!-- simple transaction Open --> */}

                {/* <!-- Simple Transaction two open --> */}
                <section id="pricing">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-xs-12">
                                <h2 className="def-h2">Simple and Transparent pricing - No hidden costs</h2>
                                {/* <!-- <p className="kyc-p-widh">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p> --> */}
                            </div>
                        </div>
                        <div className="row kyc-trn-row">
                            <div className="col-md-10 col-md-offset-1 col-xs-12">
                                <div className="row">
                                    <div className="col-md-8 trn-left">
                                        <h4>Transaction Fee</h4>
                                        <p>Depends on the volume of transaction being performed by the Organization</p>
                                        <h5>Features Include</h5>
                                        <li>Integration support for clients business applications.</li>
                                        <li>Standalone application.</li>
                                        <li>Portal for transaction metering and to manage various services from syntizen.</li>
                                        <li>Provide updates without any AMC charges till the end of the agreement period.</li>
                                        <li>Support while performing audits(if any).</li>
                                        <li>Provide gateway page for integration in 3rd party applications.
                            </li>
                                        <br />
                                    </div>
                                    <div className="col-md-4 trn-right">
                                        <h4>One Time Fee</h4>
                                        {/* <h2>$20</h2> */}
                                        <p>Depends on the volume of transaction being performed by the Organization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                           <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn-back-dark-small ">Get Started</button></Link>
                        </div>
                    </div>
                </section>
                {/* <!-- Simple Transaction two close --> */}
                {/* <!-- How can we help  Opens--> */}
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
                                                Apart from the solution cost, the other costs involved are hardware (servers) costs.
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Is there any AMC charge involved?
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
                                                    Is there a trial version available to try Offline eKYC?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                Yes.
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingNine">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseFour">
                                                    What will you provide for Integration?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
                                            <div className="panel-body">
                                                We will provide SDKs, APIs, Web gateway depending on the requirement.
                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTen">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                    Is your application capable of handling large volumes of transactions?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
                                            <div className="panel-body">
                                                Yes, we have built our core engine which is capable of handling large transactions.
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Do we need a license to use your UID suite?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div className="panel-body">
                                                No, not required for Offline eKYC
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingSix">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    Who all are allowed to use Offline eKYC after Supreme court verdict on Aadhaar?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                            <div className="panel-body">
                                                Any organization who need an Aadhaar based KYC from their customer.
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingSeven">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    What are the prerequisites needed to use UID suite?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                            <div className="panel-body">
                                                No other prerequisites except hardware to host the solution.
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingEight">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    Which platforms will Offline eKYC support?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                            <div className="panel-body">
                                                Windows, Android.
                                </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingEleven">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                    What are the different hosting options available?
                                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseEleven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEleven">
                                            <div className="panel-body">
                                                On your own premises or on a private cloud
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- How can we help  Close--> */}
                {/* <!-- Questions Open --> */}
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
            </div>
        )
    }
}

export default Ekyc
