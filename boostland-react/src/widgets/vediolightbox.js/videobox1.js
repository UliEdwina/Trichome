import React, { Component } from 'react';


class Videobox1 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
          
                    <div className="row ">
                         {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} /> */}
                               
                        <div className="col-12 col-lg-6 py-11 z-index-1 box">
                            {/* Heading */}
                        
                            {/* <div className="video-btn ml-5"> 
                                
                                <div className="spinner-eff">
                                <div className="spinner-circle circle-1" />
                                <div className="spinner-circle circle-2" />
                                </div>
                            </div> */}
                            <div className="boxtext">
                            <h1 className="display-4 mt-8 font-w-5">
                                Offering <span className="text-primary">edgy</span> and <span className="text-primary">radical</span> design for web.
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted"> High Performance &amp; Stellar Content.</p>
                            </div>
                        </div>
                    </div>
            

        );
    }
}

export default Videobox1;