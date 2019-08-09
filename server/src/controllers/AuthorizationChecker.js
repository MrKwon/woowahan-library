const passport = require('passport')
const logger = require('../logger')

const _AUTH_NONE = 'none'
const _AUTH_USER = 'user'

const _NO_AUTHORIZATION_ERROR = '권한이 없습니다.'

const isUserAuthNone = (user) => user.authorization == _AUTH_NONE
const isUserAuthUnderManage = (user) => user.authorization == _AUTH_NONE || user.authorization == _AUTH_USER

const userAuth = (req, res, next) => {
  passport.authenticate('jwt', function(err, user) {
    logger.error(err)
    if (err || !user) {
      res.status(403).send({
        message: _NO_AUTHORIZATION_ERROR
      })
    } else if (isUserAuthNone(user)) {
      res.status(403).send({
        message: _NO_AUTHORIZATION_ERROR
      })
    } else {
      req.user = user.id
      if (req.body.rentInfo) {
        req.rentInfo = {
          user: user.id,
          serial: req.body.rentInfo.serial
        }
      }
      next()
    }
  })(req, res, next)
}

const manageAuth = (req, res, next) => {
  passport.authenticate('jwt', function(err, user) {
    logger.error(err)
    const userJson = user.toJSON()
    if (err || !user) {
      res.status(403).send({
        message: _NO_AUTHORIZATION_ERROR
      })
    } else if (isUserAuthUnderManage(userJson)) {
      res.status(403).send({
        message: _NO_AUTHORIZATION_ERROR
      })
    } else {
      const page = req.body.page
      req.page = page
      next()
    }
  })(req, res, next)
}

module.exports = {
  userAuth,
  manageAuth
}