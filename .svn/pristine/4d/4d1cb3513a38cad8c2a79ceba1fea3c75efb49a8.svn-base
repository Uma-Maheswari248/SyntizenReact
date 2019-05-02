import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Redirect, Route, HashRouter, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';
import ScrollToTop from 'react-router-scroll-top'
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import About from './components/about/About';
import Ekyc from './components/offline-ekyc/Ekyc';
import Sms from './components/subsidy-management-system/Sms';
import Synzap from './components/synzap/Synzap';
import Digital from './components/digital-affiliation/Digital';
import Ecos from './components/ecos/Ecos';
import Zen_aua from './components/zen-aua/Zen_aua';
import Leadership from './components/leadership/Leadership';
import Partners from './components/partners/Partners';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';
import Notfound from './components/notfound/Notfound';
import Videos from './components/videos/Videos';
import Zen_asa from './components/zen-asa/Zen_asa';
import Panverification from './components/panverification/Panverification';
import Signup from './components/signup/Signup.js';
import Careerslist from './components/careers/Careerslist';
import Careers from './components/careers/Careers'
import Enach from './components/enach/Enach';
import Esign from './components/e-sign/Esign';
import Webinars from './components/webinars/Webinars';
import Lotsms from './components/lot-sms/Lotsms';
import GetKYC from './components/getkyc/GetKYC';
import Boardofdirectors from './components/board-of-directors/Boardofdirectors';
import Investers from './components/investers/Investers';
import AllProducts from './components/all-products/AllProducts';
const routing = (

  <Router history={HashRouter} >
    <ScrollToTop>

      <div>
        <Menu />
        <Switch>
          <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
          <Route exact path="/" component={Home} />
          {/* <Route path="/users/:id" component={Users} /> */}
          <Route path="/about" component={About} />
          
          <Route path="/ekyc" component={Ekyc} />
          <Route path="/sms" component={Sms} />
          <Route path="/synzap" component={Synzap} />
          <Route path="/digital-affiliation" component={Digital} />
          <Route path="/ecos" component={Ecos} />
          <Route path="/zen-aua" component={Zen_aua} />
          <Route path="/leadership" component={Leadership} />
          <Route path="/partners" component={Partners} />
          <Route path="/clients" component={Clients} />
          <Route path="/contact" component={Contact} />
          <Route path="/videos" component={Videos} />
           <Route path="/zen-asa" component={Zen_asa}/> 
           <Route path="/panverification" component={Panverification}/>
          <Route path="/signup" component={Signup} />
          <Route path="/careerslist" component={Careerslist} />
          <Route path="/careers" component={Careers} />  
          <Route path="/enach" component={Enach} /> 
          <Route path="/e-sign" component={Esign} />
          <Route path="/webinars" component={Webinars} />
          <Route path="/getkyc" component={GetKYC} />
          <Route path="/board-of-directors" component={Boardofdirectors} />
           <Route path="/lotsms" component={Lotsms}/> 
           <Route path="/investers" component={Investers}/> 
           <Route path="/allproducts" component={AllProducts}/>
          <Route path='/404' component={Notfound} />
          <Redirect from='*' to='/404' />
          </AnimatedSwitch>     
        </Switch>
        <Footer />
      </div>
    </ScrollToTop>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
