/**
 * @author Artur Moczulski
 * @copyright Artur Moczulski 2013
 */

Users.prototype = new Core.Controller()
function Users() {}

Users.prototype.register = function(req, res) {
  res.send({
    success: true, 
    successMessage: "Registered a new user."
  })
}

module.exports = Users;
