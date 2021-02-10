import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import Axios from "axios";

const Contact=()=>{

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [phone, setPhone] = useState();
    // const [msg, setMsg] = useState();
    
    // const submit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const newSms = { name, email, phone, msg };
    //       console.log(newSms)
    //     //   await Axios.post("/api/sms/", newSms);
    //     API.saveSms(newSms)
    //     .then(res => 
    //         console.log(res.data)
            
    //     )
    //     } catch (err) {
    //       console.log(err)
    //     }
    //     e.target.reset();
    // };

    return(
        <Container className="contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form >
                <h3>Drop Me a Message</h3>
            <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="name" name="txtName" className="form-control" placeholder="Your Name"  />
                        </div>
                        <div className="form-group">
                            <input type="email" name="txtEmail" className="form-control" placeholder="Your Email"  />
                        </div>
                        <div className="form-group">
                            <input type="phone" name="txtPhone" className="form-control" placeholder="Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="msg" className="form-control textArea" placeholder="Your Message"  ></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    );
}

export default Contact