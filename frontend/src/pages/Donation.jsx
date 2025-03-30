import React, { useState } from 'react';
import './CSS/Donation.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";  // Import the useAuth hook

export const Donation = () => {
  const [showForm, setShowForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(1000000); // Default amount set to $1 million
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Get the isLoggedIn state from the auth context

  const handleChangeAmount = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleChangeAccount = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleChangeBankName = (e) => {
    setBankName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(donationAmount);
    if (!isNaN(amount) && amount > 0) {
      setTotalAmount(totalAmount + amount);
      setDonationAmount('');
      setAccountNumber('');
      setBankName('');
      setShowForm(false);
    }
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDonateClick = () => {
    if (isLoggedIn) {
      setShowForm(true);
    } else {
      alert('You cannot access to donate! Please register now first.');
      navigate('/signup'); // Redirect to register page
    }
  };

  return (
    <div className="Donation-page">
      <div className="Donation-form-container">
        <header>
          <h1 className='donationh1'>PHOENIX FOUNDATION</h1>
          <h2 className='donationh2'>Together, We Make A Difference</h2>
          <h3 className='donationh3'>Support the People of Gaza and Palestine</h3>
          <h4 className='donationh4'>Your Generosity Can Bring Hope and Relief</h4>
        </header>
        
        <div className="Donation-image-section">
          <img src="Images/Donation1.jpeg" alt="Hope and Relief" />
        </div>
        
        <p>
          The ongoing conflict in Gaza and Palestine has left thousands of families in dire need of basic necessities. Homes have been destroyed, lives uprooted, and communities devastated. The people of Gaza and Palestine are in urgent need of humanitarian aid.
        </p>
        <p>
          <strong>Why Your Help Is Needed</strong>: Every day, families in Gaza and Palestine struggle to access essential resources such as food, clean water, medical care, and safe shelter. Children lose their lives, and many are left traumatized by the violence and instability.
        </p>

        <div className="Donation-image-section">
          <img src="Images/Donation2.jpeg" alt="Hope and Relief" />
        </div>

        <p>
          <strong>How Your Donation Will Be Used</strong>:
          <ul>
            <li>Provides food for a family.</li>
            <li>Supplies essential medical aid to those in need.</li>
            <li>Helps rebuild homes and schools.</li>
            <li>Supports long-term educational and psychosocial programs for children.</li>
          </ul>
        </p>
        <p>
          <strong>Success Stories</strong>: "Thanks to your donations, we were able to rebuild the local school, providing a safe space for children to learn and play. Families received food packages and medical care, bringing relief and hope in these challenging times."
        </p>

        <button className="show-form-button" onClick={handleDonateClick}><strong>Click Here To Donate Now!</strong></button>

        <div className="Donation-total-amount">
          <h3>Total Amount Donated: ${totalAmount.toFixed(2)}</h3>
        </div>

        <div className="Donation-image-section">
          <img src="Images/Donation3.jpeg" alt="Hope and Relief" />
        </div>

        <div className="Donation-additional-info">
          <p>We are committed to transparency and accountability. All donations are tracked and audited to ensure they reach those who need them most.</p>
        </div>
        <div className="Donation-contact-info">
          <p>For more information or assistance, please contact us at <strong>contact@phoenixfoundation.org</strong></p>
          <br />
          <NavLink to="/contact">
            <button className="Donation-contact-button"><strong>Click Here to CONTACT US!</strong></button>
          </NavLink>
        </div>
      </div>

      {showForm && (
        <div className="Donation-form-modal">
          <form className="Donation-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Make a Donation</h2>
            <label>
              Payment Method:
              <select value={paymentMethod} onChange={handlePaymentChange} required>
                <option value="">Select Payment Method</option>
                <option value="paypal">PayPal</option>
                <option value="easypaisa">Easypaisa</option>
                <option value="bank">Bank Account</option>
              </select>
            </label>
            {paymentMethod && (
              <>
                {paymentMethod === 'bank' && (
                  <label>
                    Bank Name:
                    <select value={bankName} onChange={handleChangeBankName} required>
                      <option value="">Select Bank</option>
                      <option value="bankA">Askari Bank</option>
                      <option value="bankB">Bank Alfalah</option>
                      <option value="bankC">Faysal Bank</option>
                      <option value="bankC">Allied Bank ltd</option>
                      <option value="bankC">Bank Al Habib</option>
                      <option value="bankC">Habib Bank ltd</option>
                      <option value="bankC">Meezan Bank</option>
                      <option value="bankC">Dubai Islamic Bank Pakistan ltd</option>
                      <option value="bankC">Soneri Bank</option>
                      <option value="bankC">Habib Metro</option>
                    </select>
                  </label>
                )}
                <label>
                  {paymentMethod === 'bank' ? 'Bank Account Number:' : 'Account Number:'}
                  <input type="text" value={accountNumber} onChange={handleChangeAccount} required placeholder="Enter account number..." />
                </label>
                <label>
                  Donation Amount:
                  <input type="number" value={donationAmount} onChange={handleChangeAmount} required placeholder="Enter donation amount..." />
                </label>
                <button type="submit"><strong>Donate Now</strong></button>
                <button type="button" onClick={() => setShowForm(false)}><strong>Cancel</strong></button>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
};
