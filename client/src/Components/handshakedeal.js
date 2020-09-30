import React, {Component} from 'react';

class Handshake extends Component {


    render() {

        return(
            

<div className=" z-index-1 flex-container">


    

                    <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                Handshake<span className="text-primary">Deal</span> 
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Everyone has the right to find out who they're dealing with before any commitment is made. Our Handshake Deal aims at building a rapport with you, learning about your project, and determining how best to help you succesd. For this reason we will provide a free evaluation on your website's User Experience(UX), and User Interface (UI) and provide you a solid report on what you can do to strengthen your investment.  </p>
                            </div>

                            <div className="flex-child">
                            <h1 className="display-4 mt-8 font-w-5">
                                 How Can We Help?
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted font-w-5"> Let us give you some free pointers if you're wanting to start a website and don't know where to start. There are plenty of agencies where you can DIY a website with drag-and-drop interfaces but tailoring those kinds of platforms often means that they will charge you extra fees if you need more advanced features. With us, you will receive a free report, a free estimate, and a basic guide to launching your dream site no matter what stage in the project that you happen to be in. Email us today via our Contact Portal.    </p>
                            </div>

            </div>

        )
    }

}

export default Handshake;