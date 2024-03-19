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
        stocking: [Fish!]
    }
    type Fish {
        id: ID!
        name: String!
        family: FishFamily!
        careLevel: String!
        temperament: String!
        diet: String!
        reefCompatibility: String!
        maxSize: Float!
        minTankSize: Int!
        imageUrl: String
    }
    type FishFamily {
        id: ID!
        name: String!
        fish: [Fish!]
    }
    type CompatibilityChart{
        id: ID!
        family: FishFamily!
        compatible: [String!]
        notCompatible: [String!]
        cautionRequired: [String!]
    }

    input UserInput {
        name: String
        email: String
        username: String
        password: String
        confirmPassword: String
    }
    input EditUserInput {
        name: String
        password: String
        tanks: [String!]    
    }
    input TankInput{
        name: String
        size: Int 
        owner: String
        stocking: [String!]
    }
    input FishInput{
        name: String!
        family: String!
        careLevel: String!
        temperament: String!
        diet: String!
        reefCompatibility: String!
        maxSize: Float!
        minTankSize: Int!
        imageUrl: String
    }
    input EditFishInput {
        name: String
        family: String
        careLevel: String
        temperament: String
        diet: String
        reefCompatibility: String
        maxSize: Float
        minTankSize: Int
        imageUrl: String
    }
    input CompatibilityChartInput{
        family: String!
        compatible: [String!]
        notCompatible: [String!]
        cautionRequired: [String!]
    }
    input FishFamilyInput{
        name: String!
        fish: [String!]
    }
    input EditFishFamilyInput{
        name: String!
        fish: [String!]
    }

    type Query {
        getUsers: [User!]!
        getUser(ID: ID): User!

        getTanks: [Tank!]!
        getTank(ID: ID): Tank!
        
        getFishes: [Fish!]!
        getFish(ID: ID): Fish!

        getFishFamilies: [FishFamily!]!
        getFishFamily(ID: ID): FishFamily!

        getCompatibility(ID: ID): CompatibilityChart!
    }
    type Mutation {
        registerUser(userInput: UserInput ): User!
        deleteUser(ID: ID!): Boolean
        editUser(ID: ID!, editUserInput: EditUserInput): Boolean

        createTank(tankInput: TankInput ): Tank!
        deleteTank(ID: ID!): Boolean
        
        createFish(fishInput: FishInput ): Fish!
        deleteFish(ID: ID!): Boolean
        editFish(ID: ID!, editFishInput: EditFishInput): Boolean

        createCompatibilityChart(compatibilityChartInput: CompatibilityChartInput ): Boolean

        createFishFamily(fishFamilyInput: FishFamilyInput ): Boolean
        editFishFamily(ID: ID!, editFishFamilyInput: EditFishFamilyInput ): Boolean
    }
`;
