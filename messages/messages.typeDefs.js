import { gql } from "apollo-server-express";

export default gql`
  type Message {
    id: Int!
    createdAt: String!
    updatedAt: String!
    payload: String!
    user: User!
    room: Room!
  }
  type Room {
    id: Int!
    user: [User]
    messages: [Message]
    createdAt: String!
    updatedAt: String!
  }
`;
