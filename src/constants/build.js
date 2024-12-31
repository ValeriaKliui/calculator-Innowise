const path = require('path');

const PATHS = {
	entry: path.resolve('src', 'index.js'),
	build: path.resolve('dist'),
	html: path.resolve('public', 'index.html'),
	src: path.resolve('src'),
};

const MODE = 'development';
const PORT = 3000;

module.exports = { PATHS, MODE, PORT };
