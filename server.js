const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })
  // res.status(400).json({ success: false, errors: [] });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` })
  // res.status(400).json({ success: false, errors: [] });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
  // res.status(400).json({ success: false, errors: [] });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` })
  // res.status(400).json({ success: false, errors: [] });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
  // res.status(400).json({ success: false, errors: [] });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
