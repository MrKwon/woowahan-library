const passport = require('passport')
const logger = require('../logger')

module.exports = function(req, res, next) {
  passport.authenticate('jwt', function(err, user) {
    if (err || !user) {
      logger.error(err)
      res.status(403).send({
        error: '접근이 불가능합니다.'
      })
    } else {
      req.user = user.toJSON()
      next()
    }
  })(req, res, next)
}