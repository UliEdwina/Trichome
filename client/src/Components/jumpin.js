import React, {Component} from 'react';

class Jumpin extends Component {


    render() {

        return(
            

<div className=" z-index-1 flex-container">


    

                    <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                Jumping<span className="text-primary"></span> In!
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Sometimes you need someone to jump in and fix something right away. Or maybe you need graphics and other content because you have a deadline you need to meet. Perhaps you started a project already and just need a little bit of help because your other work has you swamped. Let us jump in and help. Get in contact with us and tell us about your needs and we will accommodate you.  </p>
                            </div>

                            <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                Pricing
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Trichome Media has your best interests in mind. For this reason we offer reduced pricing for non-profit organizations. If you have a for profit business and are just starting, we will take that into consideration as well as we evaluate your vision. If you just want to make a website for the heck of it, we will take care to take a holistic approach in developing your estimate. The best part about our service is that you can rest assured that your vision is our priority. </p>
                            </div>

            </div>

        )
    }

}

export default Jumpin