const express = require('express');
const router = express.Router();

router.get('/exam-group', (req, res) => {
  res.json({ message: 'Group <Group H> API' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/exam-group', (req, res) => {
  const exams = [
    { id: 1, subject: 'Math', date: '2025-05-01' },
    { id: 2, subject: 'Science', date: '2025-05-03' }
  ];
  res.json(exam-group);
});

module.exports = router;

