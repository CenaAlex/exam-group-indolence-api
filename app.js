const express = require('express');
const app = express();


app.use(express.json());

const examsRoute = require('./routes/exams');
app.use('/', examsRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
