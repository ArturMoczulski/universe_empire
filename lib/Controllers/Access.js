/**
 * @author Artur Moczulski
 * @copyright Artur Moczulski 2013
 */

Access.prototype = new Core.Controller()
function Access() { }

Access.prototype.denied = function(req, res) {
  res.json(403, {
    errors: [ {
      message: "Access denied."
    } ]
  });
}

module.exports = Access;
