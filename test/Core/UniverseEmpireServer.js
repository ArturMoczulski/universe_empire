/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

describe('Core.UniverseEmpireServer', function() {
  describe('constructor', function() {
    it('should create a server object', function() {
      var server = new Core.UniverseEmpireServer();
      server.should.be.an.instanceOf(Core.UniverseEmpireServer);
    })
  })
});
