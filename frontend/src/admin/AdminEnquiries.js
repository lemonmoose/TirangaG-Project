import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import './AdminEnquiries.css';

const AdminEnquiries = () => {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchEnquiries();
    }
  }, [navigate, filter]);

  const fetchEnquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const status = filter === 'all' ? '' : filter;
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/enquiries?status=${status}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setEnquiries(response.data.enquiries);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (enquiryId, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/enquiries/${enquiryId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchEnquiries();
    } catch (error) {
      console.error('Error updating enquiry:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enquiries - Tiranga Green</title>
        <meta name="description" content="Manage customer enquiries for Tiranga Green Energy Solutions" />
      </Helmet>
      <div className="enquiries-page">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/admin/dashboard')}>
            <FaArrowLeft /> Back to Dashboard
          </button>
          <h1>Enquiries</h1>

          <div className="filter-controls">
            <button 
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'active' : ''}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('new')}
              className={filter === 'new' ? 'active' : ''}
            >
              New
            </button>
            <button 
              onClick={() => setFilter('qualified')}
              className={filter === 'qualified' ? 'active' : ''}
            >
              Qualified
            </button>
            <button 
              onClick={() => setFilter('converted')}
              className={filter === 'converted' ? 'active' : ''}
            >
              Converted
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="enquiries-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map(enquiry => (
                    <tr key={enquiry._id}>
                      <td>{enquiry.name}</td>
                      <td>{enquiry.email}</td>
                      <td>{enquiry.phone}</td>
                      <td>{enquiry.type}</td>
                      <td>
                        <select 
                          value={enquiry.status}
                          onChange={(e) => handleStatusUpdate(enquiry._id, e.target.value)}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td>
                        <button onClick={() => setSelectedEnquiry(enquiry)}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedEnquiry && (
            <div className="modal-overlay" onClick={() => setSelectedEnquiry(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h2>Enquiry Details</h2>
                  <button className="close-btn" onClick={() => setSelectedEnquiry(null)}>×</button>
                </div>
                <div className="modal-body">
                  <div className="detail-row">
                    <strong>Name:</strong>
                    <span>{selectedEnquiry.name}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Email:</strong>
                    <span>{selectedEnquiry.email}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Phone:</strong>
                    <span>{selectedEnquiry.phone}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Type:</strong>
                    <span>{selectedEnquiry.type}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Status:</strong>
                    <span className={`status-badge ${selectedEnquiry.status}`}>{selectedEnquiry.status}</span>
                  </div>
                  {selectedEnquiry.message && (
                    <div className="detail-row">
                      <strong>Message:</strong>
                      <p>{selectedEnquiry.message}</p>
                    </div>
                  )}
                  <div className="detail-row">
                    <strong>Received:</strong>
                    <span>{new Date(selectedEnquiry.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminEnquiries;
