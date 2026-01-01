import React from 'react';
import { Helmet } from 'react-helmet-async';
import './TermsConditions.css';

const TermsConditions = () => {
  const sections = [
    {
      id: 1,
      title: '1. Introduction',
      content: 'Welcome to Tiranga Green Energy Solutions. These Terms & Conditions govern your use of our website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 2,
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Tiranga Green\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.'
    },
    {
      id: 3,
      title: '3. Disclaimer',
      content: 'The materials on Tiranga Green\'s website are provided on an \'as is\' basis. Tiranga Green makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      id: 4,
      title: '4. Limitations of Liability',
      content: 'In no event shall Tiranga Green or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tiranga Green\'s website, even if Tiranga Green or an authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      id: 5,
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on Tiranga Green\'s website could include technical, typographical, or photographic errors. Tiranga Green does not warrant that any of the materials on its website are accurate, complete, or current. Tiranga Green may make changes to the materials contained on its website at any time without notice. Tiranga Green does not, however, make any commitment to update the materials.'
    },
    {
      id: 6,
      title: '6. Links to Third-Party Websites',
      content: 'Tiranga Green has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tiranga Green of the site. Use of any such linked website is at the user\'s own risk. If you decide to leave our website and access third-party content, you do so at your own risk.'
    },
    {
      id: 7,
      title: '7. Modifications to Terms',
      content: 'Tiranga Green may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. Users are responsible for reviewing the Terms & Conditions periodically for updates.'
    },
    {
      id: 8,
      title: '8. Service Terms',
      content: 'All solar installation and consultation services are provided subject to these terms. Customers must provide accurate information during consultations. Quotes are valid for 30 days unless otherwise stated. Installation timelines depend on weather conditions, site accessibility, and permit approvals. Tiranga Green reserves the right to refuse service to any customer.'
    },
    {
      id: 9,
      title: '9. Payment Terms',
      content: 'Payment terms will be mutually agreed upon during contract negotiations. A deposit may be required to initiate project commencement. Final payment is due upon project completion and inspection. Invoices are due within 30 days of receipt unless other terms are agreed upon in writing.'
    },
    {
      id: 10,
      title: '10. Warranty Information',
      content: 'Tiranga Green provides manufacturer warranties on all solar panels and inverters. Workmanship warranty covers installation defects for 5 years from the date of installation. System performance warranty is subject to proper maintenance. Warranty does not cover damage due to natural disasters, misuse, or unauthorized repairs.'
    },
    {
      id: 11,
      title: '11. Intellectual Property Rights',
      content: 'All content on this website, including text, graphics, logos, images, audio clips, digital downloads, and data compilations is the property of Tiranga Green or its content suppliers and is protected by international copyright laws. All rights reserved.'
    },
    {
      id: 12,
      title: '12. User Conduct',
      content: 'You agree not to use the website for any illegal or harmful purposes. This includes but is not limited to: transmitting obscene or offensive content; disrupting the normal flow of dialogue; attempting to gain unauthorized access to our systems; or engaging in any activity that violates applicable laws and regulations.'
    },
    {
      id: 13,
      title: '13. Privacy Policy',
      content: 'Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices. We are committed to protecting your personal information and use it only for purposes outlined in our Privacy Policy.'
    },
    {
      id: 14,
      title: '14. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in India.'
    },
    {
      id: 15,
      title: '15. Contact Information',
      content: 'If you have any questions about these Terms & Conditions, please contact us at: Email: legal@tirangagreen.com | Phone: +91 9876543210 | Address: Tiranga Green Energy Solutions, Your City, Country'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Tiranga Green</title>
        <meta name="description" content="Terms and Conditions for using Tiranga Green Energy Solutions website and services." />
      </Helmet>
      <div className="page terms-page">
        <div className="container">
          <h1>Terms & Conditions</h1>
          
          <div className="intro-box">
            <p>
              Please read these Terms & Conditions carefully before using our website and services. 
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to abide by these terms, please do not 
              use our services.
            </p>
            <p>
              Last Updated: January 2026
            </p>
          </div>

          <div className="terms-content">
            {sections.map(section => (
              <section key={section.id} className="terms-section">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>

          <div className="closing-box">
            <h2>Acceptance of Terms</h2>
            <p>
              By continuing to use Tiranga Green Energy Solutions website and services, you acknowledge that 
              you have read these Terms & Conditions and agree to be bound by them. If you do not agree with 
              any part of these terms, please stop using our website immediately.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
