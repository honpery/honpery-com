const path = require('path');
module.exports = (...paths) => path.join(__dirname, '..', ...paths);