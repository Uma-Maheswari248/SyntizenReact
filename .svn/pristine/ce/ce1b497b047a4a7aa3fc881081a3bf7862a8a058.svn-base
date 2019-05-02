import React, { Component } from 'react'
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
const $ = window.$;
export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          reCaptchaResponse: null,
          btnDisabled: true,
          captcha_required:false
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
      }
      handleCaptchaResponseChange(response) {
        console.log("Captcha value:", response);
        console.log(this.state.reCaptchaResponse)
        this.setState({
          reCaptchaResponse: response,
          captcha_required:false
        });
      }
  
      formSubmit = (event) => {
        event.preventDefault();
        if (this.state.reCaptchaResponse) {
          console.log("Captcha Success");
          axios.post('http://192.168.0.125:3200/contact-form', {
            full_name: event.target[0].value,
            email: event.target[1].value,
            phone : event.target[2].value,
            product: event.target[3].value,
            message: event.target[4].value
          })
          .then(function (response) {
            console.log(response);
            alert("form submitted");
          })
          .catch(function (error) {
            console.log(error);
          });
          
          
        } else {
          console.log("captcha required")
          this.setState({captcha_required:true})
        }
      }  
      componentDidMount() {
        if(this.props.location.state != undefined ){
            console.log(this.props.location.state.prevPath);
            var path = this.props.location.state.prevPath;
            path = path.substr(1);
            $("#select_products").val(path);
            if($("#select_products").val() == null) {
                $("#select_products").val("choose");
            }
        }
      }  

    render() {
        
        const capt = this.state.captcha_required !== true;
        return (
            <div>
                <section className="cont-sec">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="def-h2">Contact Us</h2>
                            <p className="kyc-p-widh">Out team is happy to answer your sales questions. Fill out the form and we'll be in touch as soon as possible</p>
                        </div>
                        <div className="row cont-row">
                            <div className="col-md-8 col-md-offset-2 col-xs-12">
                                <div className="row">
                                    <div className="col-md-6" style={{ padding: '0px' }}>
                                        <div className="cont-l-box1 ">
                                            <h4>For corporate front office</h4>
                                            <p><i className="fas fa-phone cont-fa1"></i> +91-7337393223</p>
                                            <p><i className="fas fa-envelope cont-fa2"></i> <a href="mailto:myla.priyanka@syntizen.com"> myla.priyanka@syntizen.com</a>
                                                <br />
                                                <span><a href="mailto:admin@syntizen.com"> admin@syntizen.com</a></span>
                                                <br />
                                                <span><a href="mailto:raghu@syntizen.com"> raghu@syntizen.com</a></span></p>
                                        </div>
                                        <div className="cont-l-box2">
                                            <h4>For Sales and Product Enquiries</h4>
                                            <p><i className="fas fa-phone cont-fa1"></i> +91-7337494488</p>
                                            <p><i className="fas fa-envelope cont-fa2"></i> <a href="mailto:srikrishna.thota@syntizen.com"> srikrishna.thota@syntizen.com</a>
                                            </p>
                                            <br />
                                            <h4>For Ops Support</h4>
                                            <p><i className="fas fa-phone cont-fa1"></i> +91-7337364378</p>
                                            <p><i className="fas fa-envelope cont-fa2"></i> <a href="mailto:opsteam@syntizen.com"> opsteam@syntizen.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 def-shad cont-r-box">
                                        <h4>Get in Touch</h4>
                                        <p>Message us your details. we will get back to you</p>

                                        <form onSubmit={this.formSubmit}>
                                            <label>Your Name</label>
                                            <input type="text" className="form-control" placeholder="Full Name" name="MERGE1" required />
                                            <label>Contact Details</label>
                                            <input type="email" className="form-control" placeholder="Company Email" name="MERGE0" required/>
                                            <input  type="tel" className="form-control" placeholder="Phone Number" name="MERGE2" required/>
                                            <label>I'd like to discuss</label>
                                            <select id="select_products" name="MERGE3" required>
                                                <option value="choose" selected >Choose here</option>
                                                <option value="zen-aua">ZEN AUA/KUA Platform</option>
                                                <option value="zen-asa">ZEN ASA Platform</option>
                                                <option value="sms">Subsidy Management System (SMS)</option>
                                                <option value="synzap">SYNZAP</option>
                                                <option value="ekyc">Offline e-KYC</option>
                                                <option value="e-sign">e-Sign</option>
                                                <option value="digital-affiliation">Digital Affiliation</option>
                                                <option value="enach">e-Nach</option>
                                                <option value="getkyc">GetKYC</option>
                                                <option value="ecos">e-COS</option>
                                            </select>
                                            <textarea name="MERGE4" className="form-control" required></textarea>
                                            <div className="captcha-div">
                                            <ReCAPTCHA
                                                sitekey="6LeJbp4UAAAAAC4yMnD9u1IR2vlPSaiETQZkD_J3"
                                                render="explicit"
                                                onChange={this.handleCaptchaResponseChange}
                              
                                                />
                                                {capt ? null : ( <p className="cap-color">Captcha required</p> )}
                                                </div>
                                            <p>By clicking on Sign up. you acknowledge having read our <a href="javascript:void(0)">Privacy notice</a></p>
                                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                            <input type="text" name="b_debe08ad72138c42e096d172f_bc97249192" tabindex="-1" value="" /></div>
                            <a>
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe"  className="btn-back-dark" >Submit</button>
                            </a>
                            <div id="subscribe-result">
                            </div>
                                        </form>
                                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 col-xs-12 cont-row">
                                <h2 className="def-h2">Corporate Address</h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-6 col-md-offset-3 col-xs-12 ">
                                <p>Road Number 45, Masthan Nagar, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-6 col-md-offset-3 col-xs-12 ">
                                <a className="def-h2 cont-ca-p" href="https://www.google.com/maps/place/Syntizen+Technologies+Pvt+Ltd/@17.4298172,78.400325,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb912797925125:0xa0226c6d6ed301dc!8m2!3d17.4298172!4d78.4025137" target="_blank">View on maps <i className="fas fa-long-arrow-alt-right hm-com-icon"></i></a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
       
    }
   
}

export default Contact
