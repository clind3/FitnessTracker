const express = require('express');
const router = express.Router();
const path = require("path");

//send user hompage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//send user exercise page
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//send user stats page
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;