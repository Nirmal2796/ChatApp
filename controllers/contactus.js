const rootDir = require('../util/path');
const path = require('path');


exports.contactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};