require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/user.utils";
import logger from "morgan";
import { graphqlUploadExpress } from "graphql-upload";
import http from "http";

const PORT = process.env.PORT;
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: async ({ req }) => {
    if (req) {
      return {
        loggedInUser: await getUser(req.headers.token),
        protectResolver,
      };
    }
  },
});

const app = express();
app.use(graphqlUploadExpress());
app.use(logger("tiny"));
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);
httpServer.listen(PORT, () => {
  console.log(`🚀Server is running on http://localhost:${PORT}/graphql`);
});
