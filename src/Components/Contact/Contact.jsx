import React from 'react'
import "./Contact.css"
import theme from "../../assets/Untitled design.png";
import mail_icon from "../../assets/Contact/mail.png"
import location_icon from "../../assets/Contact/location.png"
import call_icon from "../../assets/Contact/call.png"

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e551493a-31ec-4267-9e9f-96e016863b0b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" height={"120px"}/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'am currenlty avaliable to take on new projects, so feel free to send a message about anything that you want me to work on. You can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" height={"30px"} />
                        <p>vasanth27092002@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" height={"30px"}/>
                        <p>+91 7904266753</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" height={"30px"}/>
                        <p>Salem, Tamilnadu</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={"8"} placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}


export default Contact