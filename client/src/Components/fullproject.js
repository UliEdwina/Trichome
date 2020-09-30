import React, {Component} from 'react';

class FullProject extends Component {


    render() {

        return(
            

<div className=" z-index-1 flex-container">


    

                    <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                Full<span className="text-primary">New</span> Project 
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5">If you need to hit the ground running with a site let us take care of it for you. We would discuss what your specific needs are and decide what platform suits you best. We can create graphics (video or still photo), create a database if you need one. Our process is 100% based on project management best practices as outlined in the PMBOK and approved by PMI (Project Management Institute). What this means is that you will be approving every single aspect of the project from conception to end.   </p>
                            </div>

                            <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                 Pricing
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Trichome Media has your best interests in mind. For this reason, we offer reduced pricing for non-profit organizations. If you have a for-profit business and are just starting, we will consider that as well when evaluating your vision. If you just want to make a website for the heck of it, we will take a holistic approach to develop your estimate. This means that we will assess with a heart, not with greed. The best part about our service is that you can rest assured that your vision is our priority. </p>
                            </div>

            </div>

        )
    }

}

export default FullProject