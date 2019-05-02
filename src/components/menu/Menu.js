import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'



export class Menu extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/"> <img className="navbar-brand cus-nav-logo" src="images/logo.svg" /></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Products <span className="caret"></span></a>
                                    <ul className="dropdown-menu cus-drop-menu" role="menu">
                                        <div className="prod-men-col1">
                                            <h5>Products</h5>
                                            <p>Product suite to manage the entire flow of identity for your business</p>
                                        </div>
                                        <div className="prod-men-col2">
                                            <Link to="/zen-aua">
                                                <li>ZEN AUA/KUA Platform <br />
                                                    <span className="un-bold">A comprehensive AUA / KUA suite which is compliant with all UIDAI regulations.</span>
                                                </li>
                                            </Link>
                                            <Link to="/zen-asa">
                                                <li>ZEN ASA Platform <br />
                                                    <span className="un-bold">Empower Organizations with ZEN ASA Platforms to avail UIDAI Services</span>
                                                </li>
                                            </Link>
                                            <Link to="/sms">
                                                <li>Subsidy Management System <br />
                                                    <span className="un-bold">Right system in place to identify the right beneficiary.</span>
                                                </li>
                                            </Link>
                                            <Link to="/synzap">
                                                <li>SYNZAP <br />
                                                    <span className="un-bold">Tamper-proof, Authentic & Easy to Integrate Attendance Solution.</span>
                                                </li>
                                            </Link>
                                            <Link to="/ekyc">
                                                <li>Offline e-KYC <br />
                                                    <span className="un-bold">Identify a customer instantly using his/her Aadhaar Card in Multiple Ways.</span>
                                                </li>
                                            </Link>
                                            <Link to="/e-sign">
                                                <li>e-Sign <br />
                                                    <span className="un-bold">Enabling Organizations to Digitally Sign Documents</span>
                                                </li>
                                            </Link>
                                        </div>
                                        <div className="prod-men-col3">
                                        <Link to="/digital-affiliation">
                                                <li>Digital Affilation<br />
                                                    <span className="un-bold">An easy, quick and foolproof solution for any Government University/Board.</span>
                                                </li>
                                            </Link>
                                                <Link to="/enach">
                                                 <li>e-Nach <br />
                                                     <span className="un-bold">Stepping towards a new digital payment mechanism</span>
                                                 </li>
                                                 </Link>
                                                 <Link to="/getkyc">
                                                <li>GetKYC <br />
                                                    <span className="un-bold">India's first customer on-boarding gateway</span>
                                                </li>
                                                </Link>
                                            <h6>Enterprise Suite</h6>
                                            <Link to="/ecos">
                                                <li>e-COS <br />
                                                    <span className="un-bold">Ease your business process beginning from customer onboarding till Automated Payments.</span>
                                                </li>
                                            </Link>
                                            <h6>Tools(Paas - Platform as a Service</h6>
                                            <Link to="/lotsms">
                                                <li>Lot SMS <br />
                                                    <span className="un-bold">Right tool for an Organization to reach more people</span>
                                                </li>
                                           </Link>
                                            <Link to="/panverification">
                                                <li>PAN Verification <br />
                                                    <span className="un-bold">A facility provided to certain eligible entities for verification of PAN details of a Citizen.</span>
                                                </li>
                                                </Link>
                                        </div>
                                    </ul>
                                </li>
                                {/* <li><a href="javascript:void(0)" >Solutions</a></li> */}
                                <li><Link to="/about"> About</Link></li>


                                <li className="dropdown">
                                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Company <span className="caret"></span></a>
                                    <ul className="dropdown-menu cus-drop-menu m-w" role="menu">
                                        <div className="prod-men-col1 m-w1">
                                            <h5>Company</h5>
                                            <p>Global Identification Solutions.</p>
                                        </div>
                                        <div className="prod-men-col2 m-w2">
                                            
                                            <Link to="/leadership">

                                                <li>Leadership</li>
                                            </Link>
                                            
                                            <Link to="/partners">
                                                <li>Partners</li>
                                            </Link>
                                            <Link to="/clients">
                                                <li>Clients</li>
                                            </Link>
                                            
                                            <Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}>
                                                <li>Contact</li>
                                            </Link>
                                            <Link to="/investers">
                                            <li>Investers</li>
                                            </Link>
                                            <Link to="/board-of-directors">
                                            <li>Board Of Directors</li>
                                            </Link>
                                           

                                        </div>
                                    </ul>
                                </li>
                                <li><Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}}> Log In</Link></li>
                                <li><Link to={{pathname: '/contact', state: { prevPath: window.location.pathname }}} className="cus-nav-m">  <button className="btn-back-dark-small ">Get Started</button></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Menu
