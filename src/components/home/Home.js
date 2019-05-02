import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
export class Home extends Component {
  
  render() {
    return (
      <div>
        <section className="hm-header-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 col hm-header-div">
                <h2 className="def-h2">Seamless identity check</h2>
                <h2 className="def-h2">Delightful customer onboarding for corporates</h2>
                <h2 className="def-h2">Efficient service delivery for governments</h2>
                <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> <button className="def-shad btn-back-dark hm-header-btn">GET STARTED</button> </Link>
              </div>
              <div className="col-xs-12 col-md-6 text-center">
                <img className="hm-header-img" data-toggle="modal" data-target="#myModal" src="images/home/Asset 3.svg" />
              </div>
            </div>
          </div>
        </section>
        <section className="hm-sol-bg" id="solutions">
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
              <div className="col-xs-12">
                <div className="text-center">
                  <Link to="/allproducts"><button className="btn btn-back-dark hm-sol-viewbtn ">VIEW ALL PRODUCTS</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hm-com-sec">
          <div className="container">
            <div className="text-center">
              <h2 className="def-h2">You're in good company </h2>
              <p></p>
            </div>
            <div className="row hm-com-row" style={{ backgroundColor: '#e6f5f2' }}>
              <div className="col-md-3 col-xs-12 hm-com-bdiv">
                <h2 className="hm-com-h2">Our&nbsp;</h2>
                <h2 className="hm-com-h2">Clients</h2>
                <Link to="/clients">
                  <h4>See all <i class="fas fa-angle-right hm-com-icon"></i></h4>
                  </Link>
              </div>
              <div className="col-md-9 col-xs-12 hm-com-sp hm-com-border">
                <div className="hm-com-div">
                  <img src="images/clients/Muthoot.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Manappuram.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Videocon.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Piramal.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Angel.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Shriram.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/TSTS.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Joyalukkas.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Hydpolice.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/AP.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/GMR Airport.svg" />
                </div>
                <div className="hm-com-div">
                  <img src="images/clients/Motilal.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container hm-partners-sec">
            <div className="text-center">
              <h2 className="def-h2"> Our Partners</h2>
              <p></p>
            </div>
            <div className="col-xs-12 col-md-10 col-md-offset-1  hm-partners-border">
              <div className="hm-partners-div">
                <img src="images/partners/Mastercard.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/Samsung.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/ctrls.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/emudhra.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/NSDL.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/visiontek.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/Accel.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/ACPL.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/Analogics.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/CSDL.svg" />
              </div>
              <div className="hm-partners-div">
                <img src="images/partners/Precision.svg" />
              </div>
              <div className="hm-partners-div">
                <Link to="/partners">
                  <h4>See All</h4>
                  </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Modal --> */}
    <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/o2gFAEatfuA" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
