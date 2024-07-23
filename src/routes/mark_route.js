const express = require('express');
const route = express.Router();
const ma_controller = require('../controller/mark_controller')

route.get( '/', ma_controller.getMark);

route.post('/', ma_controller.saveMark);

route.put('/', ma_controller.updateMark);

route.delete('/:id', ma_controller.deleteMark);

module.exports = route