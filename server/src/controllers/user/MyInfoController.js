const { User } = require('../../models')

module.exports = {
  async editName(req, res) {
    const user = req.body.user
    const newName = req.body.newName

    console.log(user, newName)

    try {
      const updateResult = await User.update(
        { name: newName },
        { where: { id: user.id } }
      )

      if (updateResult[0] !== 1) {
        res.status(404).send({
          error: '변경 실패'
        })
        return
      }
      const editedUser = await User.findOne({
        where: { id: user.id }
      })
      res.send({
        newName: editedUser.name
      })
    } catch (error) {
      res.status(404).send({
        error
      })
    }
  }
}