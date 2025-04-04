const express = require('express');
const router = express.Router();

router.get('/exam-group', (req, res) => {
  res.json({ message: 'Group <your_group> API' });
});

module.exports = router;
