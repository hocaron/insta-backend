import client from "../../client";
import { protectedResolver } from "../user.utils";

export default {
  Query: {
    seeMyProfile: protectedResolver((_, __, { loggedInUser }) =>
      client.user.findUnique({
        where: {
          id: loggedInUser.id,
        },
      })
    ),
  },
};
