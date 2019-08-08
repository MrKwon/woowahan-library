const passport = require('passport')

const _AUTH_NONE = 'none'
const _AUTH_USER = 'user'

const _NO_AUTHORIZATION_ERROR = '권한이 없습니다.'

const isUserAuthNone = (user) => user.authorization == _AUTH_NONE
const isUserAuthUnderManage = (user) => user.authorization == _AUTH_NONE || user.authorization == _AUTH_USER

const userAuth = (req, res, next) => {
  passport.authenticate('jwt', function(err, user) {
    const userJson = user.toJSON()
    if (err || !user) {
      res.status(403).send({
        message: _NO_AUTHORIZATION_ERROR
      })
    } else if (isUserAuthNone(userJson)) {
      res.status(403).send({
        message: _NO_AUTHORIZATION_ERROR
      })
    } else {
      const serial = req.body.rentInfo.serial
      req.rentInfo = {
        user: userJson.id,
        serial
      }
      next()
    }
  })(req, res, next)
}

const manageAuth = (req, res, next) => {
  passport.authenticate('jwt', function(err, user) {
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
      // req.rentInfo = {
      //   user: userJson.id,
      //   serial
      // }
      next()
    }
  })(req, res, next)
}

module.exports = {
  userAuth,
  manageAuth
}