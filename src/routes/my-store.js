const express = require('express');
const router = express.Router();

const mystoreController = require('../app/controllers/MyStoreController');

router.get('/courses', mystoreController.storeCourses);
router.get('/recycle/courses', mystoreController.recyleCourse);
module.exports = router;
