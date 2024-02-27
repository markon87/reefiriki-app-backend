"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;
var typeDefs = exports.typeDefs = "#graphql\n    type User {\n        id: ID!\n        name: String!\n        email: String!\n        username: String!\n        password: String!\n        tanks: [Tank!]\n    }\n    type Tank {\n        id: ID!\n        name: String!\n        size: Int!\n        owner: User\n        stocking: [Fish!]\n    }\n    type Fish {\n        id: ID!\n        name: String!\n        family: FishFamily!\n        careLevel: String!\n        temperament: String!\n        diet: String!\n        reefCompatibility: Boolean!\n        maxSize: Float!\n        minTankSize: Int!\n        imageUrl: String\n    }\n    type FishFamily {\n        id: ID!\n        name: String!\n        fish: [Fish!]\n    }\n    type CompatibilityChart{\n        id: ID!\n        family: FishFamily!\n        compatible: [String!]\n        notCompatible: [String!]\n        cautionRequired: [String!]\n    }\n\n    input UserInput {\n        name: String\n        email: String\n        username: String\n        password: String\n    }\n    input EditUserInput {\n        name: String\n        password: String\n        tanks: [String!]    \n    }\n    input TankInput{\n        name: String\n        size: Int \n        owner: String\n        stocking: [String!]\n    }\n    input FishInput{\n        name: String!\n        family: String!\n        careLevel: String!\n        temperament: String!\n        diet: String!\n        reefCompatibility: Boolean!\n        maxSize: Float!\n        minTankSize: Int!\n        imageUrl: String\n    }\n    input EditFishInput {\n        name: String\n        family: String\n        careLevel: String\n        temperament: String\n        diet: String\n        reefCompatibility: Boolean\n        maxSize: Float\n        minTankSize: Int\n        imageUrl: String\n    }\n    input CompatibilityChartInput{\n        family: String!\n        compatible: [String!]\n        notCompatible: [String!]\n        cautionRequired: [String!]\n    }\n    input FishFamilyInput{\n        name: String!\n        fish: [String!]\n    }\n    input EditFishFamilyInput{\n        name: String!\n        fish: [String!]\n    }\n\n    type Query {\n        getUsers: [User!]!\n        getUser(ID: ID): User!\n\n        getTanks: [Tank!]!\n        getTank(ID: ID): Tank!\n        \n        getFishes: [Fish!]!\n        getFish(ID: ID): Fish!\n\n        getFishFamilies: [FishFamily!]!\n        getFishFamily(ID: ID): FishFamily!\n\n        getCompatibility(ID: ID): CompatibilityChart!\n    }\n    type Mutation {\n        createUser(userInput: UserInput ): User!\n        deleteUser(ID: ID!): Boolean\n        editUser(ID: ID!, editUserInput: EditUserInput): Boolean\n\n        createTank(tankInput: TankInput ): Tank!\n        deleteTank(ID: ID!): Boolean\n        \n        createFish(fishInput: FishInput ): Fish!\n        deleteFish(ID: ID!): Boolean\n        editFish(ID: ID!, editFishInput: EditFishInput): Boolean\n\n        createCompatibilityChart(compatibilityChartInput: CompatibilityChartInput ): Boolean\n\n        createFishFamily(fishFamilyInput: FishFamilyInput ): Boolean\n        editFishFamily(ID: ID!, editFishFamilyInput: EditFishFamilyInput ): Boolean\n    }\n";