const path = require('path');
const buildWebpackConfig = require('./config/build/buildWebpackConfig.js');

const PATHS = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const MODE = 'development';
const PORT = 3000;

module.exports = (env) => {
  const mode = env.mode || MODE;
  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths: PATHS,
    isDev,
    port: env.port || PORT,
  });
};
