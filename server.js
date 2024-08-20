const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const stud_route = require('./src/routes/student_route');
const subj_route = require('./src/routes/subject_route');
const ma_route = require('./src/routes/mark_route');
const auth_route = require('./src/routes/auth_route');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyparser.json());

app.use('/student', stud_route);
app.use('/subject', subj_route);
app.use('/mark', ma_route);
app.use('/auth', auth_route);
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  });
