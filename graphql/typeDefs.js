
export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        username: String!
        password: String!
        tanks: [Tank!]
    }
    type Tank {
        id: ID!
        name: String!
        size: Int!
        owner: User
        fish: [Fish!]
    }
    type Fish {
        id: ID!
        name: String!
        careLevel: String!
        temperament: String!
        diet: String!
        reefCompatibility: Boolean!
        maxSize: Float!
        minTankSize: Int!
    }

    input UserInput {
        name: String
        email: String
        username: String
        password: String
    }
    input EditUserInput {
        name: String
        password: String
        tanks: [String]    
    }
    input TankInput{
        name: String
        size: Int 
        owner: String
    }
    input FishInput{
        name: String
        careLevel: String
        temperament: String
        diet: String
        reefCompatibility: Boolean
        maxSize: Float
        minTankSize: Int
    }

    type Query {
        getUsers: [User!]!
        getUser(ID: ID): User!

        getTanks: [Tank!]!
        getTank(ID: ID): Tank!
        
        getFishes: [Fish!]!
        getFish(ID: ID): Fish!
    }
    type Mutation {
        createUser(userInput: UserInput ): User!
        deleteUser(ID: ID!): Boolean
        editUser(ID: ID!, editUserInput: EditUserInput): Boolean

        createTank(tankInput: TankInput ): Tank!
        deleteTank(ID: ID!): Boolean
        
        createFish(fishInput: FishInput ): Fish!
        deleteFish(ID: ID!): Boolean
    }
`