import React, { Component } from 'react';
import ContactForm1 from '../../../widgets/contact/contactform1';


class Contact1 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        
        {/*body content start*/}
        <div className="page-content">
          
          <section>
            <div className="container">
              <div className="row justify-content-center mb-5 text-center">
                <div className="col-12 col-lg-8">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 mb-0">Send Us A Message! </h2>
                    <p className="lead mb-0">Give us an idea of what services you'd be interesting in learning about. </p>
                  </div>
                </div>
              </div>
              <ContactForm1 />
            </div>
          </section>
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Contact1;