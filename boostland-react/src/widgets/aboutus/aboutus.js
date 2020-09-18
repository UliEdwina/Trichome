import React, { Component } from 'react';


class Memberaboutus extends Component {
    render() {
        return (
              <div className="container">
                  <div className="row align-items-center justify-content-between">
                  <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                  <div className="row align-items-center pic">
                    <div className="col-6 ">
                      <img src={require(`../../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                    </div>
                    <div className="col-6">
                      <img src={require(`../../assets/images/about/12.jpg`)} className="img-fluid rounded shadow-lg mt-10" alt="..." />
                    </div>
                    <div className="col-10 ml-auto mr-auto mt-n11">
                      <img src={require(`../../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                    </div>
                  </div>
                </div>
                    
                
                <div className="col-12 col-lg-6 col-xl-5 widerbox">
                  
                    <div className="boxtext">
                    <h2 className="mt-3 font-w-5 ">Mission</h2>
                    <p className="lead font-w-5"> To join forces with socially responsible agencies who need things yesterday. Whether it is updating an older site, create a new one, or help with an existing project. Let us evaluate your needs so that we can see what you see and we will work diligently to make your exprience seemless and worth it! We are not you're typical hoyty-toyty wonky tech types. We're hard working, humble, and kind because these are our values. Can't wait to hear from you!  </p>
                    <h2 className="mt-3 font-w-5">Vision </h2>
                  <p className="lead font-w-5">To grow into a full-service digital media agency. Together we can collaborate and develop dynamic web applications, create outstanding mind blowing graphics, and deliver media for speedy consumption for your users or visitors, as well as give you counsel on project-managment or business start-up tips. </p>
                  </div>
                </div>
              </div>
              </div>
              
        );
    }
}

export default Memberaboutus;