const path = require('path');

exports.root = (...paths) => path.join(__dirname, '..', ...paths);

exports.isDev = () => process.env.NODE_ENV === 'dev';

exports.isProd = () => process.env.NODE_ENV === 'prod';