import React, { Component } from 'react'
import Menu from './Menu';
const $ = window.$;

export class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPositions : 10
    }
    this.handleDepartmetsSelectChange = this.handleDepartmetsSelectChange.bind(this);
    this.handleExperienceSelectChange = this.handleExperienceSelectChange.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
  componentDidMount() {
     $(".nojobs").each(function() {
       $(this).hide();
     });
  }
  //handle depatment dropdown change in browse all jobs section
  handleDepartmetsSelectChange() {
    if($(".cr-filter-options").val() != 0){
      $(".cr-bwj-mainrow").each(function () {
        $(this).hide();
      });
      $("#cr-bwj-"+$(".select_departments").val()).show();
    }
    else {
      $(".cr-bwj-mainrow").each(function () {
        $(this).show();
      });
    }
  }
  //hanndle experience dropdown change in browse all jobs section
  handleExperienceSelectChange() {
    var searchkey = $(".select_experience :selected").text();
    $(".experience").each(function () {
      $(this).show();
    });
    $(".nojobs").each(function() {
       $(this).hide();
    });
    if(searchkey == "Experience - All"){
      $(".experience").each(function () {
        $(this).show();
      });
    }
    else if(searchkey == "Experienced"){
      searchkey = "Fresher";
    }  
    else {
      searchkey="experience";
    }
    $( ".experience:contains('"+searchkey+"')" ).hide();
    //To display No openings message if no opening available
    for(var i = 1; i <= 3;i++) {
      var flag = 1;
        $('div', $("#cr-bwj-"+i)).each(function () {
          if($(this).hasClass('experience') && $(this).css("display")=="block" ) {
            flag = 0;
          }
        });
        if(flag == 1)
          $("#nojobs"+i).show();

    }
  }
  handleSearchInput() {
      // $(".experience").each(function() {
      //   $(this)
      // });
  }
  render() {
    return (
      <div>
        <section className="client-sec1 cr-sec1">
          <Menu />
          <div className="container">
            <div className="row text-center">
                <h2 className="def-h2 cr-def-h2">Work at Syntizen</h2>
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

                  <div className="col-md-8 col-sm-10 col-sm-offset-1 col-md-offset-2 col-xs-12 def-shad web-main-box">
                    <div className="row ">
                        <div className="col-md-5 col-sm-5 col-xs-12">
                            <img src="images/webinars/Asset1.svg" />
                        </div>
                       <div className="col-md-7 col-sm-7 col-xs-12"> 
                                <h4 className="def-h4 cr-def-h4">Developer Support Engineering Manager</h4>
                                <p className="web-sri-p cr-dev-p">Developer Support Engineering Manager will grow and inspire the team responsible for success of developers integrating with Stripe's products.</p>
                                <div className="web-date web-date-div">
                                    <p className="web-date-p"><i className="fa fa-calendar web-date-img" aria-hidden="true"></i> HYDERABAD</p>
                                </div>
                                <div className="web-date web-date-div">
                                    <p className="web-date-p"><i className="fa fa-calendar web-date-img" aria-hidden="true"></i> FULL TIME</p>
                                </div>
                                <div className="web-date web-date-div">
                                <p className="web-date-p web-date-div "><i className="fa fa-calendar web-date-img" aria-hidden="true"></i> 3-5 YEARS EXPERIENCE</p>
                                </div>
                                <div className="web-reg-btn cr-apply-btn ">
                                    <button className="btn-back-dark-small ">Apply for role</button>
                                </div>
                        </div> 
                        
                    </div>
                </div>    

            </div>
        </div>
    </section>
        <section>
            <div className="container"> 
                <div className="row text-center cr-sec-1">
                    <h2 className="def-h2 cr-def-h2 cr-def-h2-marg">Syntizen is for everyone</h2>
                </div>
                <div className="row ">
                    <div className="col-md-5 col-sm-5 col-md-offset-1 col-xs-12">
                        <p>
                          Joining Syntizen is about joining a culture of openness, collaboration, trust, and the invitation to new life. 
                        </p>
                        <p className="cr-sec2-p">Syntizen wishes to caution for job seekers and educational institutions at large that Syntizen as a policy, does not authorize external parties to conduct Employment Drives or extend Offers of Employment on its behalf.</p>
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12 text-center">
                      <img className="cr-every-img" src="images/careers/Asset6.svg"  />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
            <div className="row text-center">
                <h2 className="def-h2 cr-def-h2 cr-def-h2-marg">Hot jobs</h2>
                <p className="kyc-p-widh">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            </div>
            <div className="row vid-row2">
                <div className="col-md-4 col-sm-4 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">INTERNSHIP</h4>
                        <div className="row text-center">
                          <button className="btn-back-dark-small cr-hot-btn ">SEARCH JOBS</button>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">FRESHER</h4>
                        <div className="row text-center">
                          <button className="btn-back-dark-small cr-hot-btn ">SEARCH JOBS</button>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 " >
                    <div className="def-shad vid-off-box vid-off-box1">
                        <img src="images/videos/Asset1.svg" data-toggle="modal" data-target="#video-modal" onClick={() => {this.setState({video_src: 'https://www.youtube.com/embed/9CXtZIyVzdU'})}} />
                        <h4 className="">EXPERIENCED</h4>
                        <div className="row text-center">
                          <button className="btn-back-dark-small cr-hot-btn ">SEARCH JOBS</button>
                        </div>
                    </div>
                    
                </div>                                             
            </div>            
            </div>

        </section>
        <section>
        <div id="cr-bwj-cnt" className="container cr-bwj-cnt">
            <div className="row text-center">
                <h2 className="def-h2 cr-def-h2 cr-def-h2-marg">Browse all jobs</h2>
                <p className="kyc-p-widh">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            </div>
            <div className="row cr-bwj-searchbox" >
              <div className="col-md-8 col-sm-8 col-xs-12 col-md-offset-2 col-sm-offset-2 ">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-12">
                      <input type="text" className="form-control cr-bwj-searchbox" aria-hidden="true" placeholder="Search" disabled="true" onChange={this.handleSearchInput}/>
                      <i className="fas fa-search cr-bwj-search"></i>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12">
                      <select className="form-control cr-filter-options select_departments" onChange={this.handleDepartmetsSelectChange}>
                        <option value="0">All Departments</option>
                        <option value="1">Development</option>
                        <option value="2">Business Developmenet</option>
                        <option value="3">Business Technology</option>
                      </select>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12">
                    <select className="form-control cr-filter-options select_experience" onChange={this.handleExperienceSelectChange}>
                      <option value="0">Experience - All</option>
                      <option value="1">Fresher</option>
                      <option value="2">Experienced</option>
                    </select>                    
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12">
                    <p className="cr-filter-options">{this.state.openPositions} open positions</p>
                  </div>
                </div>
              </div>     
            </div>
        
        <div id="cr-bwj-1" className="row cr-bwj-mainrow">
         <div className="col-md-10 col-sm-10 col-xs-12 col-md-offset-1 col-sm-offset-1 cr-bwj-div def-shad">
            <div className="row text-center ">
              <p className="cr-bwj-p cr-bwj-phead">Development</p>
            </div>
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Microsoft .Net Developer</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">3-5 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
                  <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>         
              </div>
            </div>
            <hr className="hr" />
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Angular Developer</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">Fresher</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
                <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>
            <div id="nojobs1" className="row cr-bwj-row text-center nojobs">
                <p className="cr-bwj-p">No openings available</p>
            </div>             
         </div>
        </div>
        <div id="cr-bwj-2" className="row cr-bwj-mainrow ">
         <div className="col-md-10 col-sm-10 col-xs-12 col-md-offset-1 col-sm-offset-1 cr-bwj-div def-shad">
            <div className="row text-center ">
              <p className="cr-bwj-p cr-bwj-phead">Business Development</p>
            </div>
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Manager, Partner Marketing Programs</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">3-5 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
              <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>
            <hr className="hr" />
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Sr. Business Developmenet Manager, Platform</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">6-7 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
                <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>
            <hr className="hr" />
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Partner Manager, Systems Integrator Alliances</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">6-7 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
              <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>
            <div id="nojobs2" className="row cr-bwj-row text-center nojobs">
                <p className="cr-bwj-p">No openings available</p>
            </div>              
         </div>
        </div>
        <div id="cr-bwj-3" className="row cr-bwj-mainrow">
         <div className="col-md-10 col-sm-10 col-xs-12 col-md-offset-1 col-sm-offset-1 cr-bwj-div cr-bwj-marg def-shad">
            <div className="row text-center ">
              <p className="cr-bwj-p cr-bwj-phead">Business Technology</p>
            </div>
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Senior Data Engineer</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">3-5 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
              <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>
            <hr className="hr" />
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Sr. Manager, Core IT Engineering</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">6-7 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
                <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>
            <hr className="hr" />
            <div className="row cr-bwj-row experience">
              <div className="col-md-5 col-sm-5 text-left col-xs-4 ">                
                  <p className="cr-bwj-p">Sr. Business Systems Analyst</p>      
              </div>
              <div className="col-md-3 col-sm-3 text-left col-xs-4 ">
                  <p className="cr-bwj-p">6-7 years experience</p>          
              </div>
              <div className="col-md-4 col-sm-4 text-right col-xs-4 ">
                <p className="cr-bwj-p"><a href="#">Apply <i className="fas fa-arrow-right"> </i></a></p>
              </div>
            </div>              
            <div id="nojobs3" className="row cr-bwj-row text-center nojobs">
                <p className="cr-bwj-p">No openings available</p>
            </div>              
         </div>
        </div>
        </div>
        </section>
        
      </div>
    )
  }
}

export default Careers