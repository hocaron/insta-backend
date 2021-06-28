import client from "../../client";
import { protectedResolver } from "../../users/user.utils";
import { PrismaDelete } from "@paljs/plugins";

export default {
  Mutation: {
    deletePhoto: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const photo = await client.photo.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!photo) {
        return {
          ok: false,
          error: "Photo not found",
        };
      } else if (photo.userId != loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized",
        };
      } else {
        const prismaDelete = new PrismaDelete(client);
        await prismaDelete.onDelete({
          model: "Photo",
          where: {
            id,
          },
          // 하위 항목 뿐만 아니라 자기 자신도 삭제한다는 의미
          deleteParent: true,
        });
        return {
          ok: true,
        };
      }
    }),
  },
};
