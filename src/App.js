import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route ,withRouter} from 'react-router-dom';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Index from './pages/Index/index2';

import $ from 'jquery';

import './App.css';
import './Vendor.js';

import Aboutus from './Components/aboutus';
import  {getProducts} from './actions';


import Contact1 from './Components/contact';

import { connect } from 'react-redux';
import Index2 from './pages/Index/index2';
import DigitalContent from './Components/digitalcontent'
import HandshakeDeal from './Components/handshakedeal'

import Scrolltop from './layout/back-to-top';
import FullProject from './Components/fullproject';
import Jumping from './Components/jumpin';
import PM from './Components/projectmanagment'
import { Jumbotron } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
  }
  UNSAFE_componentWillMount()
  {
    this.props.getProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/coming-soon' ? true : `/${pathArray[1]}` === '/maintenance' ? true : `/${pathArray[1]}` === '/page-not-found' ? true : false;
  }
  setHeader(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/index2' ? true  : false;
 
  }
  render() {
    const { location } = this.props;
    return (
      <Fragment>
         {
            
             

        <div className="page-wrapper">
          {this.setHeader(location.pathname) ? null : <Header />}
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/index2" component={Index2} />
            {/* <Route exact path="/index3" component={Index3} />
            <Route exact path="/index4" component={Index4} />
            <Route exact path="/index5" component={Index5} />
            <Route exact path="/index6" component={Index6} />
            <Route exact path="/Index7" component={Index7} />
            <Route exact path="/Index8" component={Index8} />
            <Route exact path="/Index9" component={Index9} /> */}

            {/* digitalContent */}
            <Route path= "/digitalcontent" component={DigitalContent} />

            {/* handshakeDeal */}
            <Route path= "/handshakedeal" component={HandshakeDeal} />
            {/* handshakeDeal */}
            <Route path= "/fullproject" component={FullProject} />
            {/* handshakeDeal */}
            {/* handshakeDeal */}
            <Route path= "/projectmanagement" component={PM} />
            {/* handshakeDeal */}
            <Route path= "/jumpin" component={Jumping} />
            {/* Company Pages */}
            <Route path="/aboutus" component={Aboutus} />
            

            

            {/* Contact Pages */}
            <Route path="/contact" component={Contact1} />
            
            

          </Switch>
          <Footer />
          <Scrolltop />
        </div>
         }
      </Fragment>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

const AppMapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};


export default connect(AppMapStateToProps,AppMapDispatchToProps)(withRouter(App))

