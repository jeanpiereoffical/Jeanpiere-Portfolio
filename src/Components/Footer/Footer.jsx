import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from'../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Thanks for visiting my portfolio. I’m always open to new ideas, collaborations, and opportunities. If you’d like to work with me or just start a conversation, feel free to reach out. Let’s build something meaningful together.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />    
            <input type="email" placeholder='Enter Your Email' />
            </div>    
            <div className="footer-subscribe">Get in Touch</div>
        </div> 
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2025 Jeanpiere. All right reserved</p>
        <div className="footer-bottom-right">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Connect with me</p>
        </div>
      </div>
        
    </div>
  )
}

export default Footer
