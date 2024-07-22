const express = require('express');
const route = express.Router();
const stud_controller = require('../controller/student_controller')

route.get( '/', stud_controller.getStudent);

route.post('/', stud_controller.saveStudent);

route.put('/', stud_controller.updateStudent);

route.delete('/:id', stud_controller.deleteStudent);

module.exports = route