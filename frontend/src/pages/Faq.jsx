import React, { useEffect } from 'react';
import './CSS/Faq.css';
import { NavLink } from 'react-router-dom';

export const FAQ = () => {
  useEffect(() => {
    const faqContent = document.querySelector('.faq-content');
    faqContent.classList.add('faq-content-visible');
  }, []);

  return (
    <div className="faq">
      <h1 className="faq-main-heading">PHOENIX FOUNDATION</h1>
      <h2 className="faq-slogan">Together, We Make A Difference</h2>
      <div className="faq-content">
        <h2 className='faq-h2'>FREQUENTLY ASKED QUESTIONS (FAQ)</h2>

        <div className="faq-item">
          <h3 className='faq-h3'>What is the PHOENIX FOUNDATION?</h3>
          <p className='faq-paragraph'>
            The PHOENIX FOUNDATION is a non-profit organization dedicated to providing humanitarian aid to those in need, particularly in regions affected by conflict, such as Gaza and Palestine. We focus on delivering food, shelter, medical supplies, and other essential support.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>How can I donate to the PHOENIX FOUNDATION?</h3>
          <p className='faq-paragraph'>
            You can donate directly through our website by clicking the "Donate Now" button. We accept various payment methods, including credit/debit cards and PayPal. All donations are secure and go directly towards our relief efforts.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>Is my donation tax-deductible?</h3>
          <p className='faq-paragraph'>
            Yes, all donations to the PHOENIX FOUNDATION are tax-deductible to the extent allowed by law. After making a donation, you will receive a receipt via email, which you can use for tax purposes.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>How does the PHOENIX FOUNDATION ensure that donations are used effectively?</h3>
          <p className='faq-paragraph'>
            We believe in transparency and accountability. Our team works closely with local partners on the ground to ensure that aid reaches those who need it most. We also provide regular updates on our website and social media about how donations are being used.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>Can I volunteer with the PHOENIX FOUNDATION?</h3>
          <p className='faq-paragraph'>
            Yes, we welcome volunteers! There are many ways to get involved, from fundraising and advocacy to hands-on work in the field. Please visit our "Get Involved" page for more information on volunteer opportunities.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>How do I know my donation is making a difference?</h3>
          <p className='faq-paragraph'>
            We provide regular reports and updates on our projects and the impact of your donations. You can follow our progress through our website, newsletters, and social media channels.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>What types of aid does the PHOENIX FOUNDATION provide?</h3>
          <p className='faq-paragraph'>
            We provide a wide range of humanitarian aid, including food, clean water, medical supplies, shelter, and educational resources. Our goal is to address both immediate needs and long-term recovery.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>Can I set up a recurring donation?</h3>
          <p className='faq-paragraph'>
            Yes, you can set up a recurring donation to provide ongoing support. Simply select the recurring donation option on our donation page, and choose the frequency of your donation.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>How can I stay updated on the PHOENIX FOUNDATION’s work?</h3>
          <p className='faq-paragraph'>
            You can stay updated by subscribing to our newsletter, following us on social media, and checking our website regularly for news and updates on our projects and impact.
          </p>
        </div>

        <div className="faq-item">
          <h3 className='faq-h3'>How can I contact the PHOENIX FOUNDATION?</h3>
          <p className='faq-paragraph'>
            You can contact us via email at <strong>contact@phoenixfoundation.org</strong> or through the contact form on our website. We are always here to answer any questions and provide more information about our work.
          </p>
        </div>

        {/* Donate Now and Contact Us buttons */}
        <div className="faq-buttons">
          <NavLink to="/donation">
            <button className="faq-button"><strong>Donate Now</strong></button>
          </NavLink>

          <NavLink to="/contact">
            <button className="faq-button"><strong>Contact Us</strong></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
