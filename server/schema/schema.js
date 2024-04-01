const {buildSchema} = require("graphql");

const schema = buildSchema(`
 type Query {
    url: String
  }
  
  type Mutation {
    shortenURL(longURL: String!): String
  }
`);

module.exports = {
    schema
};