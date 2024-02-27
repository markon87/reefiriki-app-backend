"use strict";

var _server = require("@apollo/server");
var _standalone = require("@apollo/server/standalone");
require("dotenv/config");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _typeDefs = require("./graphql/typeDefs.js");
var _resolvers = require("./graphql/resolvers.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Apollo Server
var server = new _server.ApolloServer({
  typeDefs: _typeDefs.typeDefs,
  resolvers: _resolvers.resolvers
});

// // connect to db
_mongoose["default"].connect(process.env.MONG_URI).then(function () {
  var _startStandaloneServe = (0, _standalone.startStandaloneServer)(server, {
      listen: {
        port: process.env.PORT || 4000
      }
    }),
    url = _startStandaloneServe.url;
  console.log('🎉 connected to database successfully');
  console.log('🚀 Server ready at port', process.env.PORT || 4000);
})["catch"](function (error) {
  console.log(error);
});