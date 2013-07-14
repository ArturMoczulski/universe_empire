/**
 * @author Artur Moczulski <artur.moczulski@gmail.com>
 * @copyright Artur Moczulski 2013
 */

/**
 * @classdesc UniverseEmpireServer
 * @constructor
 */
UniverseEmpireServer.prototype = require('express')()
function UniverseEmpireServer()
{

  // express module returns an instance of express through a function,
  // however the function is not the constructor of the returned 
  // object
  var express = require('express')
  var server = express();

  // fixing the proto chain to force inheritance
  server.constructor = UniverseEmpireServer;
  server.__proto__ = UniverseEmpireServer.prototype;

  loadRoutes()

  return server;

  /**
   * Setting up the routes
   */
  function loadRoutes() {

    registerRoute("/access/denied", Controllers.Access.prototype.denied)

  }

  function registerRoute(urlPattern, action) {

    server.get(urlPattern, function(req,res) {
      action(req,res);
    });

  }
}

module.exports = UniverseEmpireServer;
