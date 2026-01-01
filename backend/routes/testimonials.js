const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'Testimonials endpoint' });
});

module.exports = router;
