import client from "../../client";

export default {
  Query: {
    seePhotoComments: (_, { id, lastId }) =>
      client.comment.findMany({
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
        where: {
          photoId: id,
        },
        orderBy: {
          createdAt: "asc",
        },
      }),
  },
};
