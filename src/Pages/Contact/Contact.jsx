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
  const { Title, Description, OverlayDown, AccentColor } = props;
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
    send("service_77rr048", "template_l57otch",
      {
        from_name: emailForm.name,
        subject: emailForm.subject,
        message: emailForm.message,
        reply_to: emailForm.emailAddress
      },
      "db9qm4jXT2AwGt4gs"
    )
    .then((response) => {
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-message").value = "";
      setEmailForm(emailFormTemplate);
      // filler
      window.alert("Your message has been sent");
      setSending(false);
    })
    .catch((err) => {
      // filler
      window.alert("There was an error");
      setSending(false);
    });
  };

  return (
    <PageBox 
      Title={Title} 
      Description={Description} 
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
                      <h6 className="info-type">Text Me</h6><span className="info-value"><a href="tel:+12048181248">+1 (204) 818-1248</a></span>
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