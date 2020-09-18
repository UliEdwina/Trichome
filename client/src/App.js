import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route ,withRouter} from 'react-router-dom';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Index from './pages/Index/index2';

import $ from 'jquery';

import './App.css';
import './Vendor.js';

import Aboutus from './Components/aboutus';
import Aboutus2 from './pages/company/aboutus2';
import Career from './pages/company/career';
import CareerSingle from './pages/company/careersingle';
import BlogCard from './pages/blog/blogcard';
import Bloglisting1 from './pages/blog/bloglisting/bloglisting1';
import Bloglisting2 from './pages/blog/bloglisting/bloglisting2';
import BlogSingle from './pages/blog/blogsingle';
import Contact1 from './Components/contact';
import Contact2 from './pages/contacts/contact2';
import SignIn1 from './pages/account/signin/signin1';
import SignIn2 from './pages/account/signin/signin2';
import ForgotPassword from './pages/account/forgotpassword';
import SignUp from './pages/account/signup';
import Pricing from './pages/utilities/pricing';
import Faq from './pages/utilities/faq';
import Maintenance from './pages/utilities/maintenance';
import ComingSoon from './pages/utilities/comingsoon';
import PageNotFound from './pages/utilities/404';
import PrivacyPolicy from './pages/utilities/privacypolicy';
import TermCondition from './pages/utilities/termcondition';
import ProductList from './pages/shop/product/productlist';
import Checkout from './pages/shop/product/checkout';
import OrderComplate from './pages/shop/product/ordercomplate';
import BlogDemo from './pages/features/blog';
import PricingTable from './pages/features/pricingtable';
import Gallery from './pages/features/gallery';
import FeatureBox from './pages/features/featurebox';
import HeroBanner from './pages/features/herobanner';
import VideoLightbox from './pages/features/videobox';
import Team from './pages/features/team';
import TestimonialDemo from './pages/features/testimonial';
import ProductGrid from './pages/shop/product/productgrid';
import ProductSingle from './pages/shop/product/productsingle';
import Cart from './pages/shop/product/cart';
import FeaturesAccordion from './pages/features/accordition';
import CounterDemo from './pages/features/counter';
import Portfoliolist from './pages/portfolio/portfoliolist';
import Portfoliosingle from './pages/portfolio/portfoliosingle';
import  {getProducts} from './actions';
import { connect } from 'react-redux';
import Index2 from './pages/Index/index2';
import DigitalContent from './Components/digitacontent'
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
             this.getUrl(location.pathname) ?
                <Switch>
                    <Route path="/coming-soon" component={ComingSoon} />
                    <Route path="/maintenance" component={Maintenance} />
                    <Route path="/page-not-found" component={PageNotFound} />
                </Switch>
              :
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
            <Route path="/about-us" component={Aboutus} />
            <Route path="/about-us2" component={Aboutus2} />
            <Route path="/career" component={Career} />
            <Route path="/career-single" component={CareerSingle} />

            {/* Blog Pages */}
            <Route path="/blog-card" component={BlogCard} />
            <Route path="/blog-listing-1" component={Bloglisting1} />
            <Route path="/blog-listing-2" component={Bloglisting2} />
            <Route path="/blog-single" component={BlogSingle} />

            {/* Contact Pages */}
            <Route path="/contact-us" component={Contact1} />
            <Route path="/contact-us-1" component={Contact2} />

            {/* Portfolio Pages */}
            <Route path="/portfolio" component={Portfoliolist} />
            <Route path={`/portfolio-single/:category/:id`} component={Portfoliosingle} /> 
            
            {/* Account Pages */}
            <Route path="/sign-in" component={SignIn1} />
            <Route path="/sign-in-1" component={SignIn2} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />

            {/* Utilitie Pages */}
            <Route path="/pricing" component={Pricing} />
            <Route path="/faq" component={Faq} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/term-condition" component={TermCondition} />

            {/* Shop Pages */}
            <Route path="/product-list" component={ProductList} />
            <Route path="/product-grid" component={ProductGrid} />
            <Route path={`/product-single/:category/:id`} component={ProductSingle} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order-complate" component={OrderComplate} />

            {/* Feature Pages */}
            <Route path="/accordion" component={FeaturesAccordion} />
            <Route path="/blog-list" component={BlogDemo} />
            <Route path="/number-counter" component={CounterDemo} />
            <Route path="/feature-box" component={FeatureBox} />
            <Route path="/hero-banner" component={HeroBanner} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/pricing-table" component={PricingTable} />
            <Route path="/video-lightbox" component={VideoLightbox} />
            <Route path="/team" component={Team} />
            <Route path="/testimonial" component={TestimonialDemo} />

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

