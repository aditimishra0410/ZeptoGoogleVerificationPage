import React, { useState, useEffect } from 'react';
import bannerImg from '../images/home_banner.png';
import logo from '../images/main_logo.png';
import logoText from '../images/main_logo_text.png';
import './OnePageForGoogle.css';

const OnePageForGoogle = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTenure, setLoanTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(0.9);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const interest = (loanAmount * interestRate * loanTenure) / 100;
    setTotalAmount(Math.round(loanAmount + interest));
  }, [loanAmount, loanTenure, interestRate]);

  return (
    <div className="one-page-container">
      {/* Header with Logo */}
      <header className="one-page-header">
        <div className="logo-container">
          <img src={logo} alt="Zepto Logo" className="header-logo" />
          <img src={logoText} alt="Zepto" className="header-logo-text" />
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="hero-banner">
        <img src={bannerImg} alt="Banner" className="banner-bg" />
        <img src={logo} alt="Watermark Logo" className="banner-watermark" />
        <div className="banner-content">
          <h1>Money in Minutes. Magic in Moments.</h1>
          <p>Dream big. We've got your back.</p>
          <button className="banner-cta">Apply Now</button>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="calculator-section">
        <div className="calculator-container">
          <div className="calculator-left">
            <h2>Need a Quick Cash Boost?<br />Meet Your Money Matchmaker</h2>
            <p>
              Use our fun-sized loan calculator to plan your perfect loan.
              <br />Easy sliders. Zero surprises. <br />100% peace of mind.
            </p>
          </div>

          <div className="calculator-right">
            <div className="form-section">
              <div className="form-item">
                <label>How Much Do You Need?</label>
                <span>Loan Amount</span>
                <input
                  type="number"
                  min={5000}
                  max={100000}
                  className="input-field"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(Math.min(100000, Math.max(5000, Number(e.target.value))))}
                />
              </div>

              <div className="form-item">
                <label>How Long Do You Need It For?</label>
                <span>Number of Days</span>
                <input
                  type="number"
                  min={1}
                  max={30}
                  className="input-field"
                  value={loanTenure}
                  onChange={(e) =>
                    setLoanTenure(Math.min(30, Math.max(1, Number(e.target.value))))}
                />
              </div>

              <div className="form-item">
                <label>What's the Interest Looking Like?</label>
                <span>Interest Rate (Daily)</span>
                <input
                  type="number"
                  step={0.1}
                  min={0.5}
                  max={2.5}
                  className="input-field"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(Math.min(2.5, Math.max(0.5, Number(e.target.value))))}
                />
              </div>
            </div>

            <div className="result-summary">
              <p><strong>Loan Amount</strong> ₹{loanAmount.toLocaleString()}</p>
              <p><strong>Days</strong> {loanTenure} days</p>
              <p><strong>Interest Rate</strong> {interestRate}%</p>
              <p><strong>Total Amount</strong> ₹{totalAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Information Section */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-left">
            <h2>Here's How We've Got Your Back</h2>
          </div>
          <div className="info-right">
            <h3>Money Talk</h3>
            <ul>
              <li>Borrow from ₹5,000 to ₹1,00,000</li>
              <li>Tenure: 7 to 365 days</li>
              <li>Zero pre-closure or prepayment drama</li>
              <li>APR (aka boring bank speak): 15% – 35%</li>
              <li>Your monthly salary should be at least ₹40,000</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2>Why Choose Zepto?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Approval</h3>
              <p>Get approved in minutes, not days. Our smart algorithms work 24/7.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Safe</h3>
              <p>Bank-level security with end-to-end encryption for your data.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Flexible Terms</h3>
              <p>Choose your loan amount and tenure that fits your needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Digital First</h3>
              <p>Complete your application from anywhere, anytime on your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Apply Online</h3>
              <p>Fill out our simple application form with your basic details.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Get Verified</h3>
              <p>Complete KYC verification with your PAN and Aadhaar.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Upload Documents</h3>
              <p>Upload your salary slips and bank statements.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Money in Bank</h3>
              <p>Get instant approval and money transferred to your account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of customers who trust Zepto for their financial needs</p>
          <button className="cta-button">Apply for Loan Now</button>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="one-page-footer">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnePageForGoogle;