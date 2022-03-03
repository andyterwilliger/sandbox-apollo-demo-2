const { gql } = require("apollo-server");

const typeDefs = gql`
  type Player {
    id: Int!
    name: String!
    position: String!
  }

  type Query {
    allPlayers: [Player!]!
    player(id: Int!): Player
  }

  type Mutation {
    createPlayer(name: String!, position: String!): Player!
  }
`;

module.exports = typeDefs;
