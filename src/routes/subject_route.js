const express = require('express');
const route = express.Router();
const subj_controller = require('../controller/subject_controller');

route.get( '/', subj_controller.getSubject);

route.post('/', subj_controller.saveSubject);

route.put('/', subj_controller.updateSubject);

route.delete('/:id', subj_controller.deleteSubject);

module.exports = route;