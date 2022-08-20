// Page Imports
import PageBox from '../../Components/PageBox/PageBox';
// Package Imports
import { useState } from 'react';
import { send } from '@emailjs/browser';
// Icon Imports
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
// Style Imports
import './Contact.css';

const Contact = (props) => {
  const { Title, Description, OverlayUp, OverlayDown, AccentColor } = props;
  const emailFormTemplate = {
    name: '',
    emailAddress: '',
    subject: '',
    message: ''
  }

  const [emailForm, setEmailForm] = useState(emailFormTemplate);
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    setEmailForm(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    send("service_ebydno1", "template_t49rkfj",
      {
        from_name: emailForm.name,
        subject: emailForm.subject,
        message: emailForm.message,
        reply_to: emailForm.emailAddress
      },
      "GT9iD3jenxkHBGWzh"
    )
    .then((response) => {
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-message").value = "";
      setEmailForm(emailFormTemplate);
      // add success popup
      setSending(false);
    })
    .catch((err) => {
      // add failure popup
      setSending(false);
    });
  };

  return (
    <PageBox 
      Title={Title} 
      Description={Description} 
      OverlayUp={OverlayUp} 
      OverlayDown={OverlayDown}
      AccentColor={AccentColor}  
    >
      {/* Contact Section */}
      <div className="contact-section single-section">
        <div className="row">
          {/* <!-- Contact form--> */}
          <div className="col-12 col-lg-7">
            <form className="contact-form" id="contact-form" onSubmit={handleOnSubmit}>
              <h4 className="content-title">Message Me</h4>
              <div className="row">
                <div className="col-12 col-md-6 form-group"><input className="form-control" id="contact-name" type="text" name="name" onChange={onChange} placeholder="Name" style={{"--accentColor": `${props.AccentColor}`}} required /></div>
                <div className="col-12 col-md-6 form-group"><input className="form-control" id="contact-email" type="email" name="emailAddress" onChange={onChange} placeholder="Email" style={{"--accentColor": `${props.AccentColor}`}} required /></div>
                <div className="col-12 form-group"><input className="form-control" id="contact-subject" type="text" name="subject" onChange={onChange} placeholder="Subject" style={{"--accentColor": `${props.AccentColor}`}} required /></div>
                <div className="col-12 form-group form-message"><textarea className="form-control" id="contact-message" name="message" onChange={onChange} placeholder="Message" rows="5" style={{"--accentColor": `${props.AccentColor}`}} required></textarea></div>
                <div className="col-12 form-submit">
                  <button className="btn button-main button-scheme" id="contact-submit" type="submit" style={{"--accentColor": `${props.AccentColor}`}}>
                    {
                      sending ? 
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>: "Send Message"
                    }
                  </button>
                  <p className="contact-feedback"></p>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Contact info--> */}
          <div className="col-12 col-lg-5">
            <div className="contact-info">
              <h4 className="content-title">Contact Info</h4>
              <p className="info-description">Always available for freelance work if the right project comes along!</p>
              <ul className="list-unstyled list-info">
                <li>
                  <div className="media align-items-center"><span className="info-icon"><IoIcons.IoLogoIonic className="contact-icon" style={{"--accentColor": `${props.AccentColor}`}} /></span>
                    <div className="media-body info-details">
                      <h6 className="info-type">Name</h6><span className="info-value">Nicholas Hacault</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media align-items-center"><span className="info-icon"><MdIcons.MdPhone className="contact-icon" style={{"--accentColor": `${props.AccentColor}`}} /></span>
                    <div className="media-body info-details">
                      <h6 className="info-type">Call Me</h6><span className="info-value"><a href="tel:+14313015128">+1 (431) 301-5128</a></span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media align-items-center"><span className="info-icon"><IoIcons.IoMdSend className="contact-icon" style={{"--accentColor": `${props.AccentColor}`}} /></span>
                    <div className="media-body info-details">
                      <h6 className="info-type">Email Me</h6><span className="info-value"><a href="mailto:nhacault7@gmail.com">nhacault7@gmail.com</a></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageBox>
  );
}

export default Contact;