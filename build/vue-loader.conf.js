'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	postcss: [require('postcss-object-fit-images')()],
	loaders: utils.cssLoaders({
		sourceMap: isProduction
			? config.build.productionSourceMap
			: config.dev.cssSourceMap,
		extract: isProduction
	}),
	transformToRequire: {
		video: 'src',
		source: ['src', 'srcset'],
		vector: 'src',
		img: 'src',
		image: 'xlink:href',
	}
}
