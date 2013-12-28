/*!
 * index.js
 * Created by Kilian Ciuffolo on Dec 28, 2013
 * Copyright (c) 2013 Kilian Ciuffolo, me@nailik.org. All Rights Reserved.
 */

/**
 * Path to lib folder.
 */

var LIB_PATH = process.cwd() + (process.argv.some(function (arg) {
	return '--coverage' === arg
}) ? '/lib-cov' : '/lib')

/**
 * Loads libraries from ./lib or ./lib-cov
 *
 * @param {String} what Path to the module to load
 * @api public
 */

module.exports = function (what) {
  return require(LIB_PATH + '/' + what)
}