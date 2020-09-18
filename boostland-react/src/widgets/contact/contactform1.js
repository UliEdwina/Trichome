import React, { Component } from 'react';
import axios from 'axios';


class ContactForm1 extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName:'',
            email: '',
            phone: '',
            subject: '',
            message:'',

        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    
    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
onChangeSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    }
onChangeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    onSubmit = (e) => {
        
        
        e.preventDefault();
        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            subject: this.state.subject,
            message: this.state.message
        }

      
            axios.post(`http://localhost:3000/message/message`, contact)
           
            .then(res => console.log(res.data))
            .catch(err => { console.log("error occured", err) })

            
            this.setState({
                firstName: '',
                lastName:'',
                email: '',
                phone: '',
                subject: '',
                message:'',
    
            });
                
}

    

    
    render() {
        return (
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-10">
                    <form id="contact-form" className="row" onSubmit={this.onSubmit} >
                        <div className="messages" />
                        <div className="form-group col-md-6">
                            <input  id="form_name1" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Name is required."  value={this.state.firstName} onChange={this.onChangeFirstName}/>
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6">
                            <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." value={this.state.lastName} onChange={this.onChangeLastName} />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12">
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." value={this.state.email} onChange={this.onChangeEmail} />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12">
                            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" value={this.state.phone} onChange={this.onChangePhone} />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6">
                            <select className="form-control">
                                <option>- Select Service</option>
                                <option>Web Dev</option>
                                <option>Graphics</option>
                                <option>Marketing</option>
                                <option>Project Management</option>

                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required" value={this.state.subject} onChange={this.onChangeSubject} />
                            <div className="help-block with-errors"
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} 
                            value={this.state.message} onChange={this.onChangeMessage}
                            />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12 text-center mt-4 form-group" >
                            <button type="submit"  className="btn btn-primary" value= {this.state.submit} onChange= {this.onSubmit}><span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default ContactForm1;