import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Direct login without OTP
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        credentials
      );

      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminUser', JSON.stringify(response.data.admin));
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Tiranga Green</title>
        <meta name="description" content="Admin login portal for Tiranga Green Energy Solutions" />
      </Helmet>
      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <div className="login-logo">
              <div className="login-logo-icon"></div>
            </div>
            <h1>Admin Login</h1>
            <p className="login-subtitle">Access your Tiranga Green dashboard</p>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group password-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <span className="eye-icon">👁️</span>
                  ) : (
                    <span className="eye-icon">👁️‍🗨️</span>
                  )}
                </button>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login to Dashboard'}
              </button>
            </form>
            <div className="login-footer">
              <a href="/">← Back to Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
