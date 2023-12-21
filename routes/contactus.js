const path = require('path');

const express = require('express');

const contactUsController=require('../controllers/contactus')
const sucessRoute = require('./success');

const router = express.Router();

router.use('/contactus', contactUsController.contactUs);

router.use(sucessRoute);



module.exports = router;

