const buildWebpackConfig = require('./config/build/buildWebpackConfig.js');
const { MODE, PORT, PATHS } = require('./src/constants/build.js');

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
