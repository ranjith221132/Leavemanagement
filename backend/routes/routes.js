const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();

// Assuming you have a controller function like createform
const { createform, getform } = require('../controller/usercontroller');

// Use multer middleware to handle file uploads
router.post('/createform', upload.single('fileAttachment'), createform);
router.get('/getform', getform)

module.exports = router;
