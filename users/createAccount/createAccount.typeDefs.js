import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createAccount(
      firstName: String!
      lastNmae: String
      username: String!
      email: String!
      password: String!
    ): MutationResponse!
  }
`;
