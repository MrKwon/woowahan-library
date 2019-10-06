import SpringApi from './SpringApi'

const oauth = () => (
  SpringApi.base().get('github/user/oauth')
)

const login = (code) => (
  SpringApi.base().get('github/user/api', {
    params: { code: code }
  })
)

export default {
  oauth,
  login
}