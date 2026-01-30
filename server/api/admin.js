const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// utils
const JwtUtil = require('../utils/JwtUtil');
const CryptoUtil = require('../utils/CryptoUtil');

// models
const Models = require('../models/Models');

// dao
const AdminDAO = require('../models/AdminDAO');

/**
 * POST /api/admin/login
 * Login admin
 */
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please input username and password'
      });
    }

    // check account
    const admin = await AdminDAO.selectByUsernameAndPassword(username, password);

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Login failed'
      });
    }

    // generate token
    const token = JwtUtil.genToken({
      _id: admin._id,
      username: admin.username
    });

    res.json({
      success: true,
      token
    });

  } catch (err) {
    console.error('ADMIN LOGIN ERROR:', err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

/**
 * POST /api/admin/register
 * Register new admin
 */
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please input username and password'
      });
    }

    // check if username already exists
    const existingAdmin = await Models.Admin.findOne({ username: username });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Username already exists'
      });
    }

    // hash password
    const hashedPassword = CryptoUtil.md5(password);

    // create new admin
    const admin = new Models.Admin({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      password: hashedPassword
    });

    await admin.save();

    res.json({
      success: true,
      message: 'Admin created successfully'
    });

  } catch (err) {
    console.error('ADMIN REGISTER ERROR:', err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

/**
 * GET /api/admin/token
 * Check token
 */
router.get('/token', JwtUtil.checkToken, (req, res) => {
  res.json({
    success: true,
    admin: req.jwtDecoded
  });
});

module.exports = router;
