import { gql } from "apollo-server-express";

export default gql`
  type Message {
    id: Int!
    createdAt: String!
    updatedAt: String!
    payload: String!
    user: User!
    room: Room!
    read: Boolean!
  }
  type Room {
    id: Int!
    users: [User]
    messages: [Message]
    unreadTotal: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
