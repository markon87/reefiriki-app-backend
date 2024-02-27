"use strict";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "dotenv/config";
var _mongoose = _interopRequireDefault(require("mongoose"));
import { typeDefs as __typeDefs } from "./graphql/typeDefs.js";
import { resolvers as __resolvers } from "./graphql/resolvers.js";
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Apollo Server
var server = new ApolloServer({
  typeDefs: __typeDefs,
  resolvers: __resolvers
});

// // connect to db
_mongoose["default"].connect(process.env.MONG_URI).then(function () {
  var _startStandaloneServe = (0, startStandaloneServer)(server, {
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