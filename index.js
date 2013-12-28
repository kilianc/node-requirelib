/**
 * Loads libraries from ./lib or ./lib-cov
 *
 * @param {String} env Env variable to check for code coverage
 * @api public
 */

module.exports = function (env) {
  if (undefined !== GLOBAL.LIB_PATH) return requirelib(env)

  GLOBAL.CWD = process.cwd()
  GLOBAL.LIB_PATH = CWD + (process.env[env] ? '/lib-cov' : '/lib')
  GLOBAL.CONFIG_PATH = CWD
                       + '/config/'
                       + (process.env.NODE_ENV || 'development')
                       + '.json'

  return requirelib
}

/**
 * Loads libraries from ./lib or ./lib-cov
 *
 * @param {String} env Env variable to check for code coverage
 * @api public
 */

function requirelib(what) {
  return require(LIB_PATH + '/' + what)
}