import React, { useState } from 'react';
import "./home.css";
import "./contact.css";
import star from "./stars.svg";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Contact()
{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    
      // Update state when input values change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
       const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your logic for handling the form data, such as sending it to a server
        console.log('Form data submitted:', formData);
        
        try {
          const response = await fetch('http://localhost:5000/api/form/contact',{
            method:'POST', 
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
          });
          console.log(response);
          
          if(response.ok){
            // You can reset the form after submission if needed
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            });

          }
        } catch (error) {
          console.log("contact",error); 
        }
      };
    return(
        <div className="contactm">
            <Navbar />
            <div className="contact-main">
                <h1>we are glad you ended up here</h1>
                <span className="peacekaka">Peacebliss@gmail.com</span>
            </div>
            <div className="ourteams">
                <img src={star} className="star2"/>
                <span className="small-header">Who are we?</span>
                <img src={star} className="star2"/>
            </div>
            <div className="whoarewe">
                <div className="contact-textalign">
                    <br></br><br></br>
                    <span>PeaceBliss provides information, advice and support for anyone experiencing <br></br>issues with their mental wellbeing.</span>
                    <br></br><br></br>
                    <span>The service will help people understand mental health issues, and connect <br></br>people to the services which may best support them.</span>
                    <br></br><br></br>
                    <span>By providing an open, non-stigmatizing, positive and hopeful service, people <br></br>will be able to address issues before they become problems, and find the right <br></br>service for them, which meets their support needs.</span>
                    <br></br><br></br>
                    <span>PeaceBliss is a service for every community and can help the family, friends <br></br>and careers of people with mental health issues.</span>
                    <br></br><br></br><br></br><br></br><br></br>
                </div>
                
            </div>
            <div className="ourteams">
                    <img src={star} className="star2"/>
                    <span className="small-header">Contact Us</span>
                    <img src={star} className="star2"/>
                </div>
                <div className="cform">
      <div>
        <br />
        <span>First Name:</span> <br />
        <br />
        <span>Last Name:</span> <br />
        <br />
        <span>Email:</span> <br />
        <br />
        <span>Message:</span> <br />
        <br />
      </div>
      <div className="cinputs">
        <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="cinput"
        />{' '}
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="cinput"
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="cinput"
        />
        <br />
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="cinput cinput2"
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Send</button>
        <br />
        <br />
        <br />
      </div>
    </div>
                
            <div className="contact-health">
                <br></br>
                <br></br>
                <br></br>
                <span className="health-imp">YOUR HEALTH </span> <br></br>
                <span className="health-imp">IS IMPORTANT FOR US</span><br></br>
                <span className="talktous">TALK TO US</span>
            </div>
            
            <Footer />
        </div>
    );
}
export default Contact;