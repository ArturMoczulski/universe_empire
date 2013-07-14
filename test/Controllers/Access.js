/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

var request = require('supertest')

describe('Controllers.Access', function() {
  describe('#denied()', function() {
    it('should provide access denied information', function(done) {

      request(new Core.UniverseEmpireServer()).
        get("/access/denied").
        expect('Content-Type', /json/).
        expect(403, done);

    })
  })
});
