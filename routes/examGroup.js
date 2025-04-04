

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

let exams = [];

router.post('/exams', (req, res) => {
  const newExam = req.body;
  exams.push(newExam);
  res.status(201).json({ message: 'Exam added', exam: newExam });
});


router.put('/exams/:id', (req, res) => {
    const { id } = req.params;
    const updatedExam = req.body;
    let examIndex = exams.findIndex(e => e.id == id);
  
    if (examIndex !== -1) {
      exams[examIndex] = { ...exams[examIndex], ...updatedExam };
      res.json({ message: 'Exam updated', exam: exams[examIndex] });
    } else {
      res.status(404).json({ message: 'Exam not found' });
    }
  });
  