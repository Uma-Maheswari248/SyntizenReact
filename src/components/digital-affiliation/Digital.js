import React, { Component } from 'react'
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

import Menu from './Menu';
export class Digital extends Component {
  
    render() {
       
        return (
            <div>
                <section className="ekyc-head-bg" id="home">
                    <Menu />
                    <div className="container">
                        <div className="row ekyc-row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                                <h2 className="def-h2">An easy, quick and foolproof solution for any Government <span className="ekyc-head-p">University/Board</span>
                                </h2>
                                <p className="ekyc-head-padding dig-pad">Next step in the transformation of the affiliation process</p>
                                <form className="subscribe_form def-shad" onSubmit={(e)=>{e.preventDefault();window.addrecord()}}>
                                <div className="input-group">
                                <input type="hidden" id="source" value="Digital Affiliation"/>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Your email address" required/>
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
    </section >
            <section className="kyc-off-sec" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                            <h2 className="def-h2">Addressing the issues in a manual process</h2>
                        </div>
                    </div>
                    <div className="row kyc-off-row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12">
                            <div className="row text-center">
                                <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                                    <div className="def-shad valign-center">
                                        <div className="kyc-off-box">
                                            <img className="kyc-off-img" src="./images/digital-affiliation/da-1-01.svg" />
                                            <p>Papers documents which can be misplaced.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                                    <div className="def-shad valign-center">
                                        <div className="kyc-off-box">
                                            <img className="kyc-off-img" src="./images/digital-affiliation/da-2-01.svg" />
                                            <p>No proper monitoring of student/faculty attendance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                                    <div className="def-shad valign-center">
                                        <div className="kyc-off-box">
                                            <img className="kyc-off-img" src="./images/digital-affiliation/da-3-01.svg" />
                                            <p>No way that ensures the right faculty with right qualification is on the job.</p>
                                        </div>
                                    </div>
                                </div>
                           
                           
                                <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                                    <div className="def-shad valign-center">
                                        <div className="kyc-off-box">
                                            <img className="kyc-off-img" src="./images/digital-affiliation/da-4-01.svg" />
                                            <p>No mechanism to keep an eye on the facilities like labs, playground, computers and other infra needed for students.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                                    <div className="def-shad valign-center">
                                        <div className="kyc-off-box">
                                            <img className="kyc-off-img" src="./images/digital-affiliation/da-5-01.svg" />
                                            <p>No defined procedures to ensure AICTE/Governing Body guidelines are followed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 kyc-off-box-sp">
                                    <div className="def-shad valign-center">
                                        <div className="kyc-off-box">
                                            <img className="kyc-off-img" src="./images/digital-affiliation/da-6-01.svg" />
                                            <p>No non-cash payment mechanism available in the old process.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="kyc-att-sec" id="features">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-10 col-md-offset-1 col-xs-12">
                            <h2 className="def-h2">Granting an Affiliation can be made digital,how?</h2>
                        </div>
                    </div>
                    <div className="row kyc-att-row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                    <img src="./images/digital-affiliation/da-7-01.svg" />
                                    <h3>Individual access to Colleges or Schools,Faculty,University or Board.</h3>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                    <img src="./images/digital-affiliation/da-8-01.svg" />
                                    <h3>PAN & Aadhaar verification to faculty.</h3>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                    <img src="./images/digital-affiliation/da-9-01.svg" />
                                    <h3>Students attendance monitoring</h3>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                    <img src="./images/digital-affiliation/da-10-01.svg" />
                                    <h3>Payment gateway integrated for Fee Collection</h3>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                    <img src="./images/digital-affiliation/da-11-01.svg" />
                                    <h3>Deficiency reports as per University or Board norms</h3>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 pr-sol-sp kyc-att-box">
                                    <img src="./images/digital-affiliation/da-12-01.svg" />
                                    <h3>Convenient Dashboard for Reports & Analytics</h3>
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
                        <div className="col-md-10 col-md-offset-1 col-xs-12">
                            <div className="row text-center">

                                <div className="col-md-4 col-md-offset-4 trn-right dig-right">
                                    <h4>PER YEAR PER AFFILIATION CHARGES</h4>
                                    <img src="images/ekyc/ekyc-Asset 15.svg" />
                                    <p>Depends on the number of colleges/schools under a university/board</p><br />
                                    <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}} > <button className="btn-back-dark-small " >Get Started</button></Link>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row text-center">

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
                            <div className="col-md-6  col-xs-12">
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
                                            Apart from solution costing, a client needs to pay to Hardware for hosting the solution, that   SSL certificates.
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
                                <div className="panel panel-default ">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Is there any further support provided by Syntizen after solution deployment?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            Yes, we do provide support for the solution deployed.
                                </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFour">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Do you charge any, for the future upgrades?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                        <div className="panel-body">
                                            No, We don’t charge any cost for future upgrades if you choose per transaction model.
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingNine">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                Can you customize the solution?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
                                        <div className="panel-body">
                                            Yes, we can customize according to your requirements but it is chargeable.
        
                                </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFive">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Which platforms will Affiliation solution support?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                        <div className="panel-body">
                                            Web platform
                                </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingSix">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Can we integrate payment into it?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                        <div className="panel-body">
                                            A payment gateway is already a part of the solution.
                                </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingSeven">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                What are the prerequisites needed?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                        <div className="panel-body">
                                            Hardware setup to host the solution.
         
                                </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingEight">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                What are the different hosting options available?
                                    </a>
                                        </h4>
                                    </div>
                                    <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                        <div className="panel-body">
                                            We can host the solution in your premises or in a private cloud managed by a DC.
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

export default Digital
