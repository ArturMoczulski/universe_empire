/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

var fs = require('fs')

/**
 * Singleton
 * @todo Needs adjusting if there will be a need for many datasources
 * @classdesc Core.Datasource
 * @constructor
 */
var datasourceInstance = (function() {

  /**
   * Singleton implementation.
   * @private
   */
  var _instance;

  function privateConstructor() {
    /**
    * @property {string} _configPath
    * @memberof Core.Datasource
    * @private
    */
    var _configPath = __dirname+"/../../config/db.json"

    /**
    * @property {array} _configs
    * @memberof Core.Datasource
    * @private
    */
    var _configs = []

    /**
    * Singleton impelementation
    * @property {Core.Datasource} Datasource._instance
    * @memberof Core.Datasource
    * @private
    */
    if( Datasource._instance ) {
      return Datasource._instance
    }
    Datasource._instance = this;

    // Loading source connection configurations
    _configs = readConfig()

    /**
    * Exposes the datasource configurations from the config file
    * to the class inernally.
    * @method readConfig
    * @memberof Core.Datasource
    * @returns {json}
    * @private
    */
    function readConfig() {
      return JSON.parse(fs.readFileSync(_configPath))
    }

  }

  /**
  * Singleton implementation.
  * @method Instance
  * @returns {Core.Datasource}
  * @static
  */
  return {
    Instance: function() {

      return _instance : privateConstructor()

    }
  }

})()

/**
 * Connects to a MongoDB database found in the config file.
 * @method connect
 * @memberof Core.Datasource
 * @returns {mongoose.connection}
 */
Datasource.prototype.connect = function(sourceName) {

  if( !this[sourceName] ) {
    var mongoose = require('mongoose')
    var config = _configs[sourceName]
    mongoose.connect(
      "mongodb://"+
      config.user+":"+
      config.password+
      "@"+config.host+
      "/"+config.name)
    this[sourceName] = mongoose.connection
  }

  return this[sourceName]

}

module.exports = datasourceInstance;
