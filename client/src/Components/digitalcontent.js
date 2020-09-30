import React, {Component} from 'react';

class Content extends Component {


    render() {

        return(
            

<div className=" z-index-1 flex-container">


    

                    <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                Digital <span className="text-primary">Content</span> Design for Web
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Trichome Media has the tools to create various graphics and content for any project. We work from Adobe Creative Cloud so if you need your files in short notice and our consultant is on the buss, she can make sure she shares the file with you via the all mighty cloud. We can work with still photos and video. We also composie video for social-media ready promo. We can also write, shoot, and edit your vision and basically produce the marketing content you truly desire. </p>
                            </div>

                            <div className="flex-child font-w-5">
                            <h1 className="display-4 mt-8 font-w-5">
                                 <span className="text-primary">Editorial</span> Content Production
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Experienced writers with graduate degrees will consult with you to get an idea of what type of content is best suited for your site. Your deliverable will be exactly what you ask for because we use tried and true processes and methods from the Project Manament Institue with everything and keep meticulous records on a secure cloud. Constant communication with you is how we intend to deliver exactly what you have in mind. </p>
                            </div>

            </div>

        )
    }

}

export default Content;