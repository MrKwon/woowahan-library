const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      uid: Joi.string().min(1).max(10),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'uid':
          if (!req.body.uid || !req.body.password) {
            res.status(400).send({
              error: '가입을 위해 비어있는 칸을 모두 채워주세요.'
            })
          } else {
            res.status(400).send({
              error: '아이디는 최대 10자 입니다.'
            })
          }
          break
        case 'password':
          res.status(400).send({
            error: `비밀번호는 다음의 규칙들을 따라야합니다.
              <br>
              1. 비밀번호는 영어 대소문자, 숫자만을 포함할 수 있습니다.
              <br>
              2. 비밀번호는 최소 8문자, 최대 32문자로 설정할 수 있습니다.
            `
          })
          break
        default:
          res.status(400).send({
            error: '회원가입 중 에러 발생 '
          })
      }
    } else {
      console.log('AuthControllerPolicy 가뿐하게 통과')
      next()
    }
  }
}