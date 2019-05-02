import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AllProducts extends Component {
    
    
  render() {
    return (
      <div>
        <section className="about-sec1">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-10 col-md-offset-1">
                    <h2 className="def-h2">Products</h2>
                <p >Product suite to manage the entire flow of identity for your business. </p>    
                </div>
                
            </div>
        </div>
    </section>
    {/* <!-- About us Open --> */}
    
    <section className="hm-sol-bg about-sec" id="solutions">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h2 className="def-h2">Solutions for all your company needs</h2>
                <p>All of our products are ready to go, easy to use and offer great value to any kind of business</p>
              </div>
            </div>
            <div className="row hm-sol-row">
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp">
                <div className="box def-shad">
                  <h4>ZEN AUA/KUA Platform</h4>
                  <p>A comprehensive AUA / KUA suite which is compliant with all UIDAI regulations.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                   <Link to="/zen-aua"><span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>Digital affiliation</h4>
                  <p>An easy, quick and foolproof solution for any Government University/Board.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/digital-affiliation"><span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>Subsidy management system</h4>
                  <p className="hm-offbox-p">Right system in place to identify the right beneficiary.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/sms"><span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>SYNZAP</h4>
                  <p>Tamper-proof, Authentic & Easy to Integrate Attendance Solution.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/synzap"> <span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>Offline e-KYC</h4>
                  <p>Identify a customer instantly using his/her Aadhaar Card in Multiple Ways.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/ekyc"> <span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>e-COS</h4>
                  <p>Ease your business process beginning from customer onboarding till Automated Payments.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/ecos"> <span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp">
                <div className="box def-shad">
                  <h4>ZEN ASA Platform </h4>
                  <p>Empower Organizations with ZEN ASA Platforms to avail UIDAI Services.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                   <Link to="/zen-asa"><span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>e-Sign </h4>
                  <p>Enabling Organizations to Digitally Sign Documents.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/e-sign"><span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>e-Nach </h4>
                  <p className="hm-offbox-p">Stepping towards a new digital payment mechanism.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/enach"><span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>GetKYC</h4>
                  <p>India's first customer on-boarding gateway.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/getkyc"> <span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>Lot SMS</h4>
                  <p>Right tool for an Organization to reach more people.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/lotsms"> <span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 hm-sol-sp ">
                <div className="box def-shad">
                  <h4>PAN Verification </h4>
                  <p>A facility provided to certain eligible entities for verification of PAN details of a Citizen.</p>
                  <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="btn btn-back-white-small hm-sol-btn">START ENQUIRY</button> </Link>
                  <Link to="/panverification"> <span> Learn more <i class="fas fa-angle-right hm-com-icon"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AllProducts
