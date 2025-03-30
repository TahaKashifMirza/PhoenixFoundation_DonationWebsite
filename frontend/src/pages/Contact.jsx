import './CSS/Contact.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <h1 className='contacth1'>PHOENIX FOUNDATION</h1>
        <h2 className='contacth2'>Together, We Make A Difference</h2>
      </header>
      <form className="contact-form">
        <label>
          Username:
          <input type="text" name="username" required placeholder='Enter your username...'/>
        </label>
        <label>
          Email:
          <input type="email" name="email" required placeholder='Enter your email...'/>
        </label>
        <label>
          Message:
          <textarea name="message" required rows={5} placeholder='Enter your message...'></textarea>
        </label>
        <button type="submit"><strong>Send Message</strong></button>
      </form>
      <div className="contact-social-section">
        <h3 className='contact-h3'>Also Connect With Us On</h3>
        <div className="contact-social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};