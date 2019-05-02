import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default prod-navbar hidden-xs" id="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <AnchorLink className="navbar-brand prod-nav-logo" offset='113' href='#home'>
                                LOTSMS</AnchorLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right  p-navbar-nav">

                                <li><AnchorLink offset='113' href='#features'>Features</AnchorLink></li>
                                {/*<li><AnchorLink offset='113' href='#use-cases'>Use Cases</AnchorLink></li>*/}
                                <li><AnchorLink offset='113' href='#pricing'>Pricing</AnchorLink></li>
                                <li><AnchorLink offset='40' href='#faqs'>FAQ's</AnchorLink></li>
                               {/* <li><a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Coming Soon">Login</a></li>*/}
                                <li><a href="javascript:void(0)" className="cus-nav-m"><button className="btn-back-dark-small ">Sign Up</button></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu
