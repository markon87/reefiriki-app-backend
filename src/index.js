import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'
import 'dotenv/config'
import mongoose from 'mongoose'


import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js'



// Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});



// // connect to db
mongoose.connect(process.env.MONG_URI)
.then(() => {
    const {url} = startStandaloneServer(server, {
        listen: { port: process.env.PORT || 4000 }
    })
    console.log('🎉 connected to database successfully');
    console.log('🚀 Server ready at port', process.env.PORT || 4000);
})
.catch((error) => {
    console.log(error);
})
