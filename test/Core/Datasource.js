/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

describe('Core.Datasource', function() {

  describe('constructor', function() {
    it('should always provide the same instance', function() {
      var datasource = new Core.Datasource();
      datasource.
        should.
        equal(new Core.Datasource())
    })
  })

  describe('#Instance()', function() {
    it('should always provide the same instance', function() {
      var datasource = Core.Datasource.Instance()
      datasource.
        should.
        equal(Core.Datasource.Instance())
    })
  })

  describe('#connect()', function() {
    it('should connect to a config-file-specified datasource', function() {
      Core.Datasource.Instance().connect('default')
    })
  })
});
