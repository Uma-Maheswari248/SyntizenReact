import React, { Component } from 'react'
import Menu from './Menu';
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

export class Ecos extends Component {
  render() {
    return (
      <div>
        <section className="ekyc-head-bg" id="home">
        <Menu />
        <div className="container">
            <div className="row ekyc-row">
                <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                    <h2 className="def-h2">Ease your business process beginning from customer onboarding till <span className="ekyc-head-p">Automated Payments</span>
                    </h2>
                    <p className="ekyc-head-padding">Bundling together the Aadhaar eKYC, electronic NACH mandate, Digital signature and bringing them on a single platform.</p>
                    <form className="subscribe_form def-shad" onSubmit={(e)=>{e.preventDefault();window.addrecord()}}>
                        <div className="input-group">
                        <input type="hidden" id="source" value="e-COS"/>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Your email address" required />
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
    <section className="kyc-off-sec" >
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                    <h2 className="def-h2">What benefits the organization by bringing them altogether?</h2>
                </div>
            </div>
            <div className="row kyc-off-row">
                <div className="col-md-10 col-md-offset-1 col-xs-12">
                    <div className="row text-center">
                        
                        <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                <img className="kyc-off-img" src="./images/ecos/ecos-paperless.svg" />
                                <h4>End to  End paperless process</h4>
                                <p>A completely online and instant process involving no paper for on-boarding a customer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                <img className="kyc-off-img" src="./images/ecos/ecos-cost.svg" />
                                <h4>Reduction in operational costs</h4>
                                <p>Drastic reduction in costing like courier, storage, stationary etc for on-boarding a customer.</p>
                                </div>
                            </div>
                        </div>

                         <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                <img className="kyc-off-img" src="./images/ecos/ecos-like.svg" />
                                <h4>Delightful Customer Experience</h4>
                                <p>Simple process coupled with technology enabling a superb customer experience and delight.</p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-3 col-sm-6 kyc-off-box-sp">
                            <div className="def-shad valign-center">
                                <div className="kyc-off-box">
                                <img className="kyc-off-img" src="./images/ecos/ecos-time.svg" />
                                <h4>Great reduction in process time</h4>
                                <p>On-board a customer within minutes and in an transparent and authentic method.</p>
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
                    <h2 className="def-h2">Product Highlights</h2>
                </div>
            </div>
            <div className="row kyc-att-row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12 pr-sol-sp kyc-att-box ecos-att-box">
                            <img src="./images/ecos/ecos-integrate.svg" />
                            <h3>Easy to integrate</h3>
                            <p>With our APIs, SDKs & Gateway we make the integration process seamless</p>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 pr-sol-sp kyc-att-box ecos-att-box">
                            <img src="./images/ecos/ecos-scalable.svg" />
                            <h3>Scalable solution</h3>
                            <p>Designed in way that is capable of handling increasing demands</p>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 pr-sol-sp kyc-att-box ecos-att-box">
                            <img src="./images/ecos/ecos-stack.svg" />
                            <h3>Supports all stack</h3>
                            <p>Supports all known stacks like Web, Windows, & Android</p>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 pr-sol-sp kyc-att-box ecos-att-box">
                            <img src="./images/ecos/ecos-auth.svg" />
                            <h3>Ensures the Authenticity of data</h3>
                            <p>Out algorithms ensure the data generated after the transaction is authentic</p>
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
            <div className="row kyc-trn-row">
                <div className="col-md-6 col-md-offset-3 col-xs-12">
                    <div className="row">
                        <div className="col-md-6 trn-left ecos-left">
                            <h4>Transaction Fee</h4>
                            <p>Depends on the volume of transactions being performed by the Organization.</p>
                            
                            <br />
                            
                        </div>
                        <div className="col-md-6 trn-right ecos-right">
                            <h4>One Time Fee</h4>
                            {/* <h2>$20</h2> */}
                            <p>Depends on the number of the business of applications and hardware that are to be integrated.</p>
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
                                     Apart from solution costing, a client needs to pay directly to UIDAI the AUA/KUA license fee, bank guarantee, procure Hardware (Servers, HSM, DSC, SSL, etc) for hosting the solution, ASA transaction cost to the concerned ASA. Need to buy eSign transaction on a prepaid basis from ESP. 
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
                            <div id="collapseOne" className="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                    No, you need to pay it to the concerned ASA.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFour">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Are there any charges involved?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div className="panel-body">
                                       No.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingNine">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        Once we get the approval from UIDAI(i.e license from UIDAI), How long it will take to onboard us as AUA/KUA?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
                                <div className="panel-body">
                                    It will take 10 to 15 days to onboard you as AUA/KUA.
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
                         <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThirteen">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                        What are the steps involved in the process of AUA/KUA license procurement?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThirteen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThirteen">
                                <div className="panel-body">
                                
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFifteen">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                        Do syntizen facilitate in hosting the AUA/KUA solution?

                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFifteen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFifteen">
                                <div className="panel-body">
                                
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
                                         if yes, will there be any separate charge involved?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div className="panel-body">
                                    Yes, we do assist at the time of Audits.
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
                                    No, We don’t charge any cost for future upgrades if you choose per transaction model.
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
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingEight">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Do we need a license to use Syntizen’s AUA/KUA services?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                <div className="panel-body">
                                    Yes, you need an AUA/KUA license which can be procured from UIDAI. We also facilitate the process of making the organization AUA/KUA.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTen">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Which platforms will AUA/KUA solution support?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
                                <div className="panel-body">
                                    Windows, Linux, Android
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwelve">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                        Who all are allowed to be an AUA/KUA after Supreme court verdict on Aadhaar?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwelve" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwelve">
                                <div className="panel-body">
                                    Any organization who need an Aadhaar based KYC from their customer.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFourteen">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                        What are the prerequisites needed to be an AUA/KUA?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFourteen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFourteen">
                                <div className="panel-body">
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingSixteen">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                        What are the different hosting options available?
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseSixteen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSixteen">
                                <div className="panel-body">
                                    On your own premises or on a private cloud.
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
      </div>
    )
  }
}

export default Ecos
