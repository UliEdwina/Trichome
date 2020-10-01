import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureServices extends Component {
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center ${this.props.bgshadow}`}>
                        <div>
                            <img className="img-fluid" src="/images/svg/01.svg" alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">HandShake Deal</h5>
                            <h5>Free</h5>
                            <ul className="deals">
                                <li>Website Audit
                                </li>
                                <li>Free Estimate
                                </li>
                                <li>New Site Basic Tutorial
                                </li>
                            </ul>
                        <Link  to="/handshakedeal" className="btn-link">Read Details</Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                        <div>
                            <img className="img-fluid" src="/images/svg/02.svg" alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Project Jump-In</h5>
                            <h5>Negotiable Fee Upon Estimate</h5>
                            <ul className="deals">
                                <li> Existing project help
                                </li>
                                <li>Project Management
                                </li>
                                <li>Video/Images for Web
                                </li>
                            </ul>
                        <Link  to="/jumpin" className="btn-link">Read Details</Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center ${this.props.bgshadow}`}>
                        <div>
                            <img className="img-fluid" src="/images/svg/03.svg" alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Full Project</h5>
                            <h5>Fee Upon Estimate</h5>
                            <ul className="deals">
                                <li>Start from Scratch
                                </li>
                                <li>Back and Front End
                                </li>
                                <li>Graphic Design/Content
                                </li>
                                <li>Deployment
                                </li>
                            </ul>
                        <Link to="/fullproject" className="btn-link">Read Details</Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default FeatureServices;