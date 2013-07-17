/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

var request = require('supertest')

describe('Controllers.Access', function() {
  describe('#denied()', function() {
    it('should provide access denied information', function(done) {

      var server = new Core.UniverseEmpireServer()

      request(server).
        get("/access/denied").
        expect(403, {
          errors: [ { 
            message: "Access denied." 
            } ]
      }, done); 

    })
  })
});
