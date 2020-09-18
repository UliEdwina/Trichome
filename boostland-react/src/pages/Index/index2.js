import React, { Component } from 'react';
import Header3 from '../../layout/header/header3';
import Herosection1 from '../../widgets/herosection/herosection1';
import FeatureServices from '../../widgets/featurebox/services';


class Index2 extends Component {
  constructor(props)
  {
      super(props)
  }
  componentDidMount() {
      window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <Herosection1 />
        {/*hero section end*/}
        {/*header start*/}
        <Header3 />
        {/*header end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*services start*/}
          <section className="custom-pb-3 bg-primary position-relative">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8">
                  <div>
                    <h2 className="text-white font-w-5"> Creativity At Work!</h2>
                    <p className="lead mb-0 text-light"> No Matter Where You Are in Your Project, We can Help</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
            </div>
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div>
          </section>
          <section className="mt-n15 p-0">
            <div className="container">
              <FeatureServices  bgshadow="bg-white shadow" />
            </div>
          </section>
          {/*services end*/}
          {/*counter start*/}
          
          {/*counter end*/}
          {/*about start*/}
         
          {/*about end*/}
          {/*feature start*/}
          
          {/*feature end*/}
          {/*team start*/}
          
          {/*team end*/}
          {/*pricing start*/}
          
          {/*pricing end*/}
          {/*blog start*/}
          
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index2;