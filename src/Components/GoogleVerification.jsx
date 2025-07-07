import React, { useState, useEffect } from 'react';
import bannerImg from '../images/home_banner.png';
import logo from '../images/main_logo.png';
import logoText from '../images/main_logo_text.png';
import './GoogleVerification.css';

const GoogleVerification = () => {

  return (
    <div className="google-verification-container">
      {/* Header with Logo */}
      <header className="gv-header">
        <div className="logo-container">
          <img src={logo} alt="Zepto Logo" className="header-logo" />
          <img src={logoText} alt="Zepto" className="header-logo-text" />
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="gv-hero-banner">
        <img src={bannerImg} alt="Banner" className="banner-bg" />
        <img src={logo} alt="Watermark Logo" className="banner-watermark" />
        <div className="banner-content">
          <h1>Money in Minutes. Magic in Moments.</h1>
          <p>Dream big. We've got your back.</p>
          <button className="banner-cta">Apply Now</button>
        </div>
      </section>

      {/* Here's How We Help You Win Section */}
      <section className="help-section">
        <div className="help-container">
          <h2>Here's How We Help You Win</h2>
          <p className="help-subtitle">From surprise bills to celebration thrills, Zepto is your go-to buddy for every money moment.</p>
          
          <div className="help-grid">
            <div className="help-card">
              <h3>Party Now, Pay Later</h3>
              <p>Your Wallet's Best Backup Plan</p>
              <p>Cash, Fast & Hassle Free</p>
              <p>Birthday? Big move? Dream vacation? Get the funds to make every moment count.</p>
            </div>
            
            <div className="help-card">
              <h3>Simplify Your Loans Like a Pro</h3>
              <p>Manage everything in one smooth move</p>
              <p>Your Smart Loan Sidekick</p>
              <p>Because "easy, speedy, and secure" isn't just talk—it's our thing.</p>
            </div>
            
            <div className="help-card">
              <h3>From lightning-fast approvals to support that actually supports, everything we do is made for your convenience.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>₹160M+</h3>
            <p>disbursed</p>
          </div>
          <div className="stat-item">
            <h3>7M+</h3>
            <p>happy users</p>
          </div>
          <div className="stat-item">
            <h3>40+</h3>
            <p>cities served and growing</p>
          </div>
        </div>
      </section>



      {/* Rates and Fees Section */}
      <section className="rates-section">
        <div className="rates-container">
          <h2>Rates and Fees</h2>
          <div className="rates-grid">
            <div className="rate-item">
              <h4>Monthly Interest Rate</h4>
              <p>2.9166%</p>
            </div>
            <div className="rate-item">
              <h4>Offered Annual Percentage Rate (APR)</h4>
              <p>35% (Fixed)</p>
            </div>
            <div className="rate-item">
              <h4>Tenure/Repayment Period</h4>
              <p>1 - 3 Years</p>
            </div>
            <div className="rate-item">
              <h4>Minimum-Maximum Loan Amount</h4>
              <p>INR 10,000 - 5,00,000</p>
            </div>
            <div className="rate-item">
              <h4>Processing Fee</h4>
              <p>2%</p>
            </div>
            <div className="rate-item">
              <h4>GST on Processing Fee (Exclusive)</h4>
              <p>18%</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Zepto Works Section */}
      <section className="how-zepto-works-section">
        <div className="how-zepto-works-container">
          <h2>How Zepto Works</h2>
          <p className="section-subtitle">Quick, Simple, Sorted</p>
          
          <div className="works-grid">
            <div className="work-card">
              <h3>Quick Start, No Drama</h3>
              <p>We only ask for your Aadhaar, PAN, and bank details. No boring forms. No paperwork jungle. Just you and your phone.</p>
            </div>
            
            <div className="work-card">
              <h3>Before Your Chai Cools</h3>
              <p>Seriously. Your loan is processed and credited instantly. It is that seamless.</p>
            </div>
            
            <div className="work-card">
              <h3>You're Pre-approved Before You Blink</h3>
              <p>We run lightning-fast eligibility checks. No queues. No calls. No waiting around.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Speedy Section */}
      <section className="simple-speedy-section">
        <div className="simple-speedy-container">
          <h2>Simple. Speedy. Zepto.</h2>
          <p>That's how we roll smooth, smart, and lightning fast.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>No Credit Score? Who Cares!</h3>
              <p>New to loans? No sweat. Zepto checks your vibes and potential not your financial past.</p>
            </div>
            
            <div className="feature-card">
              <h3>+ Boom! You're Approved</h3>
              <p>Apply in minutes. Get the green light in seconds.</p>
            </div>
            
            <div className="feature-card">
              <h3>Repay Like a Boss</h3>
              <p>Pick EMIs that match your life — online, offline, anytime, anywhere.</p>
              <p>Because flexibility is the real flex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="terms-section">
        <div className="terms-container">
          <h2>Terms and Conditions</h2>
          <div className="terms-content">
            <p>Welcome to the Salarywalle website, operated by Naman Finlease Private Limited ("we", "us", "our"). By accessing or using our website ("Site") and services ("Services"), you agree to be bound by the following terms and conditions.</p>
            
            <h3>Key Terms:</h3>
            <ul>
              <li>All loans are subject to approval and verification</li>
              <li>APR of 35% applies to all approved loans</li>
              <li>Processing fee of 2% + 18% GST is applicable</li>
              <li>Minimum loan amount: ₹10,000</li>
              <li>Maximum loan amount: ₹5,00,000</li>
              <li>Tenure: 12 to 36 months</li>
              <li>Monthly salary requirement: Minimum ₹40,000</li>
            </ul>
            
            <p><strong>Read more</strong> about our complete terms and conditions, privacy policy, and loan agreement before applying.</p>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="gv-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Zepto Logo" className="footer-logo-img" />
              <img src={logoText} alt="Zepto" className="footer-logo-text" />
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>📧 support@zepto.com</p>
              <p>📞 1800-123-4567</p>
              <p>📍 Mumbai, Maharashtra, India</p>
            </div>
            <div className="footer-legal">
              <h4>Legal</h4>
              <p>© 2024 Zepto. All rights reserved.</p>
              <p>Registered with RBI as NBFC</p>
              <p>Naman Finlease Private Limited</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleVerification; 