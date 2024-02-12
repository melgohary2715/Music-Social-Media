const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt.js');

// Endpoint to register a new user
router.post('/register', async (req, res) => {
  try {
    // create a password for the user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    // create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword, 
    });

    const user = await newUser.save();
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json(error);
  }
})

//Endpoint to login a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;