import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        hello: String
        greet(name: String): String
        Users: [User]
    }

    type Mutation {
        createUser(input: UserInput!): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int!
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});