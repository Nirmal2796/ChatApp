const path = require('path');

const express = require('express');

const contactUsController=require('../controllers/contactus')


const router = express.Router();

router.get('/contactus', contactUsController.contactUs);

router.post('/success',contactUsController.success);



module.exports = router;

