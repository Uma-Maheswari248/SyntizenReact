import React, { Component } from 'react'
import { NONAME } from 'dns';

export class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video_src : '',
            display : 'none',
            btn_loadmore : 'MORE WEBINARS',
            btn_loadmore_state : '1'
        }
        this.loadmore = this.loadmore.bind(this);
    }

    loadmore() {
        if(this.state.btn_loadmore_state == 1){
            this.setState({ 
                display:'block', 
                btn_loadmore:'LESS WEBINARS',
                btn_loadmore_state : !this.state.btn_loadmore_state 
            })
        }
        else {
            this.setState({ 
                display:'none', 
                btn_loadmore:'MORE WEBINARS',
                btn_loadmore_state : !this.state.btn_loadmore_state  
            })
        } 
    }

  render() {
    var style = {
        display:this.state.display
    }
    return (
      <div>
        <section className="client-sec1">
        <div className="container">
            <div className="row text-center">
                <h2 className="def-h2">Videos</h2>
                <p className="kyc-p-widh">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 def-shad client-vid-box text-center">
                    <div className="text-center" style={{margin:'0 auto'}}>
                        <img className="client-vid-icon"  data-toggle="modal" data-target="#video-modal" src="images/clients/playicon.svg" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/qtD1nhBhuJE'})}} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="client-sec">
        <div className="container">
            <div className="row text-center ">
                <h2 className="def-h2">Watch other product videos</h2>
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
            <div className="row vid-row3">
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">Offline-eKYC</h4>
                        <p>Identify a customer instantly using his/her Aadhaar Card in Multiple Ways </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/fVTJhNI7tDg'})}} />
                        <h4 className="">e-COS</h4>
                        <p>Ease your business process beginning from customer onboarding till Automated Payments. </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">Digital Affiliation</h4>
                        <p>An easy, quick and foolproof solution for any Government University/Board. </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">e-Nach</h4>
                        <p>Stepping towards a new digital payment mechanism. </p>    
                    </div>
                    
                </div>
                
                
            </div>
            <div className="row vid-row3" style={style}>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">TEST WEBINAR</h4>
                        <p>Identify a customer instantly using his/her Aadhaar Card in Multiple Ways </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/fVTJhNI7tDg'})}} />
                        <h4 className="">TEST WEBINAR</h4>
                        <p>Ease your business process beginning from customer onboarding till Automated Payments. </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">TEST WEBINAR</h4>
                        <p>An easy, quick and foolproof solution for any Government University/Board. </p>    
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">TEST WEBINAR</h4>
                        <p>Stepping towards a new digital payment mechanism. </p>    
                    </div>
                    
                </div>
                
                
            </div>
            <div className="row text-center">
                {/* <div className="col-md-11 col-xs-11 col-sm-11 col-xs-11 col-md-offset-1 text-center"> */}
                    <button className="btn-back-dark-small" onClick={this.loadmore}>{this.state.btn_loadmore}</button>
                {/* </div> */}
            </div>
            {/* <div className="row text-center">
                <br />
                <a href="javascript:void(0)"><button className="btn-back-dark">Load More</button></a>
            </div> */}
        </div>
    </section>
    <div id="video-modal" className="modal fade" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={this.state.video_src} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Videos
