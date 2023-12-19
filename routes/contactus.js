const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const sucessRoute = require('./success');

const router = express.Router();

router.use('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
})

router.use(sucessRoute);



module.exports = router;

