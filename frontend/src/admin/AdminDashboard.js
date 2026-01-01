import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaChartBar, FaUsers, FaCheckCircle, FaInbox, FaEnvelope, FaLightbulb, FaUser, FaSignOutAlt, FaTasks, FaFire, FaHandshake, FaCoins } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState(null);
  const [stats, setStats] = useState({
    totalEnquiries: 0,
    newEnquiries: 0,
    qualifiedLeads: 0,
    conversionRate: '0%',
    totalProjects: 0,
    completedProjects: 0
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    if (!token) {
      navigate('/admin/login');
    } else {
      setAdminUser(user ? JSON.parse(user) : null);
      fetchDashboardStats();
    }
  }, [navigate]);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/enquiries?limit=100`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const enquiries = response.data.enquiries || [];
      setStats({
        totalEnquiries: response.data.total || enquiries.length,
        newEnquiries: enquiries.filter(e => e.status === 'new').length,
        qualifiedLeads: enquiries.filter(e => e.status === 'qualified').length,
        conversionRate: enquiries.length > 0 ? `${Math.round((enquiries.filter(e => e.status === 'qualified').length / enquiries.length) * 100)}%` : '0%',
        totalProjects: 12,
        completedProjects: 10
      });
      setRecentEnquiries(enquiries.slice(0, 5));
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - Tiranga Green</title>
        <meta name="description" content="Admin dashboard for Tiranga Green Energy Solutions" />
      </Helmet>
      <div className="dashboard-page">
        <header className="admin-header">
          <div className="header-content">
            <div className="header-left">
              <h1>Admin Dashboard</h1>
              <p className="header-subtitle">Welcome, {adminUser?.email || 'Administrator'}</p>
            </div>
            <div className="header-right">
              <div className="admin-profile">
                <FaUser className="profile-icon" />
                <span>{adminUser?.email || 'Admin'}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          <section className="stats-section">
            <h2 className="section-title">Performance Overview</h2>
            <div className="stats-grid">
              <div className="stat-card enquiries">
                <div className="stat-icon"><FaInbox /></div>
                <div className="stat-info">
                  <h3>Total Enquiries</h3>
                  <p className="stat-value">{stats.totalEnquiries}</p>
                </div>
              </div>
              <div className="stat-card new-enquiries">
                <div className="stat-icon"><FaFire /></div>
                <div className="stat-info">
                  <h3>New Enquiries</h3>
                  <p className="stat-value">{stats.newEnquiries}</p>
                </div>
              </div>
              <div className="stat-card qualified">
                <div className="stat-icon"><FaHandshake /></div>
                <div className="stat-info">
                  <h3>Qualified Leads</h3>
                  <p className="stat-value">{stats.qualifiedLeads}</p>
                </div>
              </div>
              <div className="stat-card conversion">
                <div className="stat-icon"><FaCoins /></div>
                <div className="stat-info">
                  <h3>Conversion Rate</h3>
                  <p className="stat-value">{stats.conversionRate}</p>
                </div>
              </div>
              <div className="stat-card projects">
                <div className="stat-icon"><FaTasks /></div>
                <div className="stat-info">
                  <h3>Total Projects</h3>
                  <p className="stat-value">{stats.totalProjects}</p>
                </div>
              </div>
              <div className="stat-card completed">
                <div className="stat-icon"><FaCheckCircle /></div>
                <div className="stat-info">
                  <h3>Completed</h3>
                  <p className="stat-value">{stats.completedProjects}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="dashboard-grid">
            <section className="quick-actions-section">
              <h2 className="section-title">Quick Actions</h2>
              <div className="admin-nav">
                <a href="/admin/enquiries" className="nav-link enquiries-link">
                  <FaInbox /> View Enquiries
                </a>
                <a href="/admin/projects" className="nav-link projects-link">
                  <FaTasks /> Manage Projects
                </a>
                <a href="#" className="nav-link analytics-link">
                  <FaChartBar /> View Analytics
                </a>
                <a href="#" className="nav-link users-link">
                  <FaUsers /> Manage Users
                </a>
              </div>
            </section>

            <section className="recent-enquiries-section">
              <h2 className="section-title">Recent Enquiries</h2>
              <div className="enquiries-list">
                {recentEnquiries.length > 0 ? (
                  recentEnquiries.map((enquiry, index) => (
                    <div key={index} className="enquiry-item">
                      <div className="enquiry-header">
                        <span className="enquiry-name">{enquiry.name}</span>
                        <span className={`enquiry-status ${enquiry.status}`}>{enquiry.status}</span>
                      </div>
                      <p className="enquiry-message">{enquiry.message?.substring(0, 60)}...</p>
                      <p className="enquiry-date">{new Date(enquiry.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))
                ) : (
                  <p className="no-data">No recent enquiries</p>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
