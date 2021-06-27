import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    hashtags: ({ id }) =>
      client.hashtag.findMany({
        where: {
          photos: {
            some: {
              id,
            },
          },
        },
      }),
    likeNumber: ({ id }) =>
      client.like.count({
        where: {
          photoId: id,
        },
      }),
    comments: ({ id }) =>
      client.comment.count({
        where: {
          photoId: id,
        },
      }),
  },
  Hashtag: {
    photos: async ({ id }, { page }) =>
      await client.hashtag.findUnique({ where: { id } }).photos({
        take: 5,
        skip: (page - 1) * 5,
      }),
    totalPhotos: ({ id }) =>
      client.photo.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
  },
};
