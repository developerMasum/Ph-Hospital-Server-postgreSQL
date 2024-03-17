import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getAllFromDB = async (params: any) => {
  const { searchTerm, ...filterData } = params;

  const andCondition: Prisma.AdminWhereInput[] = [];
  const adminSearchAbleFields = ["name", "email"];
  if (params.searchTerm) {
    // [
    //     {
    //       name: {
    //         contains: params.searchTerm,
    //         mode: "insensitive",
    //       },
    //     },
    //     {
    //       email: {
    //         contains: params.searchTerm,
    //         mode: "insensitive",
    //       },
    //     },
    //   ]
    andCondition.push({
      OR: adminSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
        AND: Object.keys(filterData).map(key => ({
            [key]: {
                equals: filterData[key]
            }
        }))
    })
}

  const whereConditions: Prisma.AdminWhereInput = { AND: andCondition };

  const result = await prisma.admin.findMany({
    where: whereConditions,
  });
  return result;
};
export const AdminService = {
  getAllFromDB,
};
