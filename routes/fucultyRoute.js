const express = require('express');

const facultyRouter = express.Router();

const {getFaculty,postFaculty,deleteFaculty,updateFaculty,getOneFaculty}=require('../controller/facultyController')

facultyRouter.route('/').get(getFaculty);
facultyRouter.route('/').post(postFaculty);
facultyRouter.route('/:id').get(getOneFaculty);
facultyRouter.route('/:id').put(updateFaculty);
facultyRouter.route('/:id').delete(deleteFaculty);


module.exports = facultyRouter;