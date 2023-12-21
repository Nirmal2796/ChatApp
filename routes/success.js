const path = require('path');

const express = require('express');

const successController=require('../controllers/success')

const router = express.Router();


router.post('/success', successController.success);


module.exports = router;