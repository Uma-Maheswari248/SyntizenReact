import React, { Component } from 'react'

export class Webinars extends Component {
  render() {
    return (
      <div>
        <section className="client-sec1">
        <div className="container">
            <div className="row text-center">
                <h2 className="def-h2">Webinars</h2>
                <p className="kyc-p-widh">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row web-main-box-row">
                {/* <div className="col-md-6 col-md-offset-3 def-shad client-vid-box text-center">
                    <div className="text-center" style={{margin:'0 auto'}}>
                        <img className="client-vid-icon" data-toggle="modal" data-target="#client-modal" src="images/clients/playicon.svg" />
                    </div>
                </div> */}

                  <div className="col-md-8 col-sm-8 col-md-offset-2 col-xs-12 def-shad web-main-box">
                    <div className="row ">
                        <div className="col-md-5 col-sm-5 col-xs-12">
                            <img src="images/webinars/Asset1.svg" />
                        </div>
                       <div className="col-md-7 col-sm-7 col-xs-12"> 
                                <h4 className="def-h4">Syntizen Technologies Comprehensive UID Suite Webinar</h4>
                                <h4 className="def-h4 web-sri-h2">Srikrishna Tota</h4>
                                <p className="web-sri-p">Bussiness Development Manager</p>

                                <div className="web-date">
                                    <p className="web-date-p"><i className="fa fa-calendar web-date-img" aria-hidden="true"></i> Apr, 9, 2019</p>
                                </div>
                                <div className="web-date">
                                    <p className="web-date-p"><i className="fa fa-calendar web-date-img" aria-hidden="true"></i> 3:00 PM IST</p>
                                </div>
                                <div className="web-reg-btn">
                                    <button className="btn-back-dark-small">Register</button>
                                </div>
                        </div> 
                        
                    </div>
                </div>    

            </div>
        </div>
    </section>
    <section >
        <div className="container" >
            <div className="row">
                <div className="col-md-5 col-sm-4 col-xs-12 col-md-offset-1">
                    <h3 className="web-head-p ">Dont want to miss a webinar?</h3>
                    <p className="web-notify"> Get notified when we host webinars </p>
                </div>
                <div className="col-md-5 col-sm-4 col-xs-12 web-sub-div">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12" >
                            <form className="subscribe_form def-shad" style={{ width: '100%' }}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your email address" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default ekyc-getstarted-btn web-regbtn-hover form-control btn-back-dark-small btn-web" type="button">Subscribe</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="row">
                        <p className="web-pp-p">By clicking on Subscribe, you acknowledge having read our <a href="" className="ekyc-head-p">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="client-sec">
        <div className="container">
            <div className="row text-center ">
                <h2 className="def-h2">Watch recorded webinars</h2>
                {/* <p className="kyc-p-widh">The following are some of our prestigious clients which have availed one or many of our solutions. We are proud to be serving them.</p> */}
            </div>
            <div className="row vid-row2">
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">ZEN AUA/KUA</h4>
                        <p>A comprehensive AUA / KUA suite which is compliant with all UIDAI Regulations </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">ZEN ASA</h4>
                        <p>Empower Organizations with ZEN ASA Platform to avail UIDAI Serivces </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">Subsidy Management System</h4>
                        <p>Right system in place to identify the right beneficiary. </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">SYNZAP</h4>
                        <p>Tamper-proof,Authentic & Easy to Integrate Attendance Solution. </p>    
                    </div>
                    
                </div>
            </div>
            <div className="row vid-row2">
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">ZEN AUA/KUA</h4>
                        <p>A comprehensive AUA / KUA suite which is compliant with all UIDAI Regulations </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">ZEN ASA</h4>
                        <p>Empower Organizations with ZEN ASA Platform to avail UIDAI Serivces </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">Subsidy Management System</h4>
                        <p>Right system in place to identify the right beneficiary. </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">SYNZAP</h4>
                        <p>Tamper-proof,Authentic & Easy to Integrate Attendance Solution. </p>    
                    </div>
                    
                </div>
            </div>
            <div className="row text-center">
                {/* <div className="col-md-11 col-xs-11 col-sm-11 col-xs-11 col-md-offset-1 text-center"> */}
                    <button className="btn-back-dark-small">MORE WEBINARS</button>
                {/* </div> */}
            </div>
            {/* <div className="row text-center">
                <br />
                <a href="javascript:void(0)"><button className="btn-back-dark">Load More</button></a>
            </div> */}
        </div>
    </section>
    <div id="client-modal" className="modal fade" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/qtD1nhBhuJE" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Webinars
