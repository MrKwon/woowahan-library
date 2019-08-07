const passport = require('passport')

module.exports = function(req, res, next) {
  passport.authenticate('jwt', function(err, user) {
    const userJson = user.toJSON()
    console.log(req.body)
    if (err || !user) {
      res.status(403).send({
        message: '권한이 없습니다.'
      })
    } else if (userJson.authorization == 'none') {
      res.status(403).send({
        message: '권한이 없습니다.'
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