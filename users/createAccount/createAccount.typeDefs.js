import { gql } from "apollo-server";

export default gql`
  type createAccountResult {
    ok: Boolean
    error: String
  }
  type Mutation {
    createAccount(
      firstName: String!
      lastNmae: String
      username: String!
      email: String!
      password: String!
    ): createAccountResult!
  }
`;
