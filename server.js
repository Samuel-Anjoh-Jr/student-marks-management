const bodyparser = require('body-parser');
const express = require('express');
const stud_route = require('./src/routes/student_route');
const subj_route = require('./src/routes/subject_route');
const app = express();
const port = 3000;
app.use(bodyparser.json());

app.use('/student', stud_route);
app.use('/subject', subj_route);
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  });
