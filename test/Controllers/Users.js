/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

var request = require('supertest')

describe('Controllers.Users', function() {
  describe('#register()', function() {

    it('should register a new user', function(done) {

      var server = new Core.UniverseEmpireServer()

      request(server).
        post("/users/register").
        type("json").
        send({
          username: "test-user@universeempire.com",
          password: "test-password"
        }).
        expect(200, /.*\"success\": true.*/, done)

    })

  })
});
