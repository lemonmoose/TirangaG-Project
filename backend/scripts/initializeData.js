// Script to initialize sample data in MongoDB
// Run this after setting up MongoDB

const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');

const initializeData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tiranga-solar');
    console.log('Connected to MongoDB');

    // Create default admin user
    const adminExists = await Admin.findOne({ email: 'admin@tirangagreen.com' });
    if (!adminExists) {
      const admin = new Admin({
        name: 'Admin User',
        email: 'admin@tirangagreen.com',
        password: 'admin123',
        role: 'admin',
        permissions: {
          canViewEnquiries: true,
          canManageEnquiries: true,
          canViewAnalytics: true,
          canManageContent: true,
          isActive: true
        }
      });
      await admin.save();
      console.log('Default admin user created');
    }

    // Create sample testimonials
    const testimonialsCount = await Testimonial.countDocuments();
    if (testimonialsCount === 0) {
      const testimonials = [
        {
          name: 'Rajesh Kumar',
          photo: 'https://via.placeholder.com/150',
          designation: 'Business Owner',
          company: 'Kumar Industries',
          content: 'Excellent service! Our solar installation was completed on time and we are saving ₹5000/month on electricity bills.',
          rating: 5,
          featured: true
        },
        {
          name: 'Priya Singh',
          photo: 'https://via.placeholder.com/150',
          designation: 'Homeowner',
          company: 'Residential',
          content: 'Best decision to go solar. The team was professional and the installation process was seamless.',
          rating: 5,
          featured: true
        },
        {
          name: 'Amit Patel',
          photo: 'https://via.placeholder.com/150',
          designation: 'Factory Manager',
          company: 'Manufacturing Co.',
          content: 'Reduced our energy costs significantly. Highly recommended!',
          rating: 4,
          featured: true
        }
      ];
      await Testimonial.insertMany(testimonials);
      console.log('Sample testimonials created');
    }

    // Create sample projects
    const projectsCount = await Project.countDocuments();
    if (projectsCount === 0) {
      const projects = [
        {
          title: 'Residential Rooftop Solar Installation',
          description: 'Successfully installed 5 kW rooftop solar system on a residential property in Mumbai',
          category: 'residential',
          images: ['https://via.placeholder.com/400x300'],
          thumbnail: 'https://via.placeholder.com/200x150',
          location: 'Mumbai, Maharashtra',
          systemCapacity: 5,
          annualSavings: 60000,
          co2Reduction: 6,
          installationDate: new Date('2024-01-15'),
          featured: true
        },
        {
          title: 'Commercial Building Solar Array',
          description: '25 kW commercial solar system installed on shopping mall',
          category: 'commercial',
          images: ['https://via.placeholder.com/400x300'],
          thumbnail: 'https://via.placeholder.com/200x150',
          location: 'Bangalore, Karnataka',
          systemCapacity: 25,
          annualSavings: 300000,
          co2Reduction: 30,
          installationDate: new Date('2023-11-20'),
          featured: true
        },
        {
          title: 'Industrial Off-Grid Solution',
          description: '100 kW off-grid system with battery backup for 24/7 power supply',
          category: 'industrial',
          images: ['https://via.placeholder.com/400x300'],
          thumbnail: 'https://via.placeholder.com/200x150',
          location: 'Pune, Maharashtra',
          systemCapacity: 100,
          annualSavings: 1200000,
          co2Reduction: 120,
          installationDate: new Date('2023-10-10'),
          featured: true
        }
      ];
      await Project.insertMany(projects);
      console.log('Sample projects created');
    }

    console.log('Data initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing data:', error);
    process.exit(1);
  }
};

initializeData();
