import { protectedResolver } from "../../users/user.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {}
    ),
  },
};
