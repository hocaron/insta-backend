import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    firstName: String!
    lastNmae: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    bio: String
    avatar: String
  }
`;
