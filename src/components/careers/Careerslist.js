import React, { Component } from 'react'
import Menu from './Menu';
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export class Careerslist extends Component {
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
      alert("form submitted");
      
    } else {
      console.log("captcha required")
      this.setState({captcha_required:true})
    }
  }

  

  render() {  
    const capt = this.state.captcha_required !== true;
    return (
      <div>
        <section className="careerslist-sec" id="working-with-us"> 
         <Menu />
          <div className="container">
            <div className="row careerslist-pad">
              <div className="col-md-7 col-xs-12">
                <h2 className="def-h2">Microsoft .Net Developer
                </h2>
                <p className="ekyc-head-padding">.NET Framework is a software framework developed by Microsoft.It is powerful,flexible,and can be adapted to a broad range of uses.Every .NET developer should be at least proficient either in using VB.NET or C#,or even better,both languages.The great.NET developer should be capable of handling many aspects of the application,including but not limited to performance,scalability,security,and testing.</p>
                <p className="ekyc-head-padding">A fully knolwledgeable .NET developer can use .NET to build a highly distributed web application,a sophisticated desktop application,or even a modern mobile application.Additional knowledge about Mono is a plus,as the combination of .NET and Mono allows for an even a wider range of platforms to be targeted.</p>
                <p className="ekyc-head-padding">Your day in the role will include...</p>
                <p className="ekyc-head-padding">
                1.Mentor or coach for scrum teams<br />
                2.Expert into Agile Scrum principals,Task meeting/Retrospective<br />
                3.Proven in Relative estimation,Story-based development<br />
                4.Proficient in leading Iteration/spring planning meeting,Conflict Resolution<br />
                5.Strong into Business Analysis planning and monitoring,Enterprise Analysis,Requirement management<br />
                6.Provide objective guidance without personal or political considerations<br/>
                7.Experienced in implementing agile techniques in different cultured and environments
                </p>
                <p className="ekyc-head-padding">You will come with</p>
                <p className="ekyc-head-padding">
                1.Focus on people and Improvement by providing team a platform for improvement.<br />
                2.Experience to provide training to the team on the agile methodologies<br />
                3.Implement the winning strategy according as per the ground conditions.<br />
                4.Agile processes in each sprint at user story level as per the Definition of Done(DoD).<br />
                5.Successfully run agile projects of varying size and complexity<br />
                6.Identify project risks and raise them dedicatedly<br />
                7.Agile process during the project execution;(on the ground to answer all the questions immediately).
                </p>
                <p className="ekyc-head-padding">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of the and srambled it to make a type specimen book.It jas survived not only five centuries,but also the leap into electronic typesetting,remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
               
              </div>
              <div className="col-md-5 col-xs-12">
                <div className="def-shad col-md-12 col-xs-12">
                    <h3 className="def-h3">Developer Support Engineering Manager</h3>
                    <p className="ekyc-head-padding">The Developer support Engineering manager will grow and inspire the team responsible for the success of developers integrating with Stripe's products.</p>
                    <div className="col-md-6">
                  <h4 className="def-h4"><img className="dummy-img" src="images/zenx-aua-kua/zenx-Asset7.svg"/>
                    HYDERABAD</h4>

                  </div>
                  <div className="col-md-6">
                  <h4 className="def-h4"><img className="dummy-img" src="images/zenx-aua-kua/zenx-Asset7.svg"/>
                    FULL TIME</h4>
                  </div>
                  <div className="col-md-12">
                 < h4 className="def-h4"><img className="dummy-img" src="images/zenx-aua-kua/zenx-Asset7.svg"/>
                    3-5 YEARS EXPERIENCE</h4>
                  </div>
                 <div className="col-md-12 cr-fi-btn">
                    <button className="btn-back-dark-small ">APPLY NOW</button>
                 </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
        <section className="careerslist-sec2" id="about-us" >
          <div className="container">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-xs-12 careerslist-marg">
                    <div className="row">
                        
                        <div className="col-md-12 def-shad careerslist-r-box">
                            <h4>APPLY FOR THIS ROLE</h4>
                            <p>Please fill the below details to apply</p>
                            <form onSubmit={this.formSubmit}>
                                <label>YOUR NAME</label>
                                <input type="text" className="form-control" placeholder="First Name" name="" required />
                                <input type="text" className="form-control" placeholder="Last Name" name="" required/>
                                <label>Contact Details</label>
                                <input type="email" className="form-control" placeholder="Company Email" name="" required/>
                                <input  type="tel"   className="form-control" placeholder="Phone Number" name="" required minLength={10}/>
                                <input type="text" className="form-control" placeholder="Location" name="" required/>
                                <label>RESUME</label>
                                <input type="file" className="form-control" placeholder="Select file < 2MB" name="" required/>
                                <div className="captcha-div">
                                <ReCAPTCHA
                                sitekey="6LeJbp4UAAAAAC4yMnD9u1IR2vlPSaiETQZkD_J3"
                                render="explicit"
                                onChange={this.handleCaptchaResponseChange}
                              
                                />
                              {capt ? null : ( <p className="cap-color">Captcha required</p> )}
                              </div>
                                <input type="submit" value="SUBMIT APPLICATION" className="btn-back-dark btn"></input>
                               
                                <p>By clicking on Sign up. you acknowledge having read our <span className="privacy-padding"><a href="javascript:void(0)">Privacy notice</a></span></p>
                            </form>
                        </div>
                    {/* <div className="signup-marg-div text-center">
                        <li className="signup-li"><a className="cont-signup-p" href="#" target="_blank">Privacy Policy.</a></li>
                        <li className="signup-li1"><a className="cont-signup-p" href="#" target="_blank">Terms of use</a></li>
                    </div> */}
                    </div>
                </div>
            </div>



          </div>
        </section>
      </div >
    )
  }
}

export default Careerslist;
