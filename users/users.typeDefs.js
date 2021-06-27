import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastNmae: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    bio: String
    avatar: String
    following: [User]
    followers: [User]
    totalFollowing: Int!
    totalFollowers: Int!
    isFollowing: Boolean!
    isMe: Boolean!
  }
`;
