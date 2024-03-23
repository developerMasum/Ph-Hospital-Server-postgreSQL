import jwt from "jsonwebtoken";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import { UserStatus } from "@prisma/client";

const loginUser = async (payload: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status:UserStatus.ACTIVE
    },
  });
  const isCorrectPassword = await bcrypt.compare(
    payload.password,
    userData.password
  );
  if (!isCorrectPassword) {
    throw new Error("Password is  Wrong");
  }
  const accessToken = jwtHelpers.generateToken(
    {
      email: userData.email,
      role: userData.role,
    },
    "accessTokenSecretKey",
    "5m"
  );

  const refreshToken = jwtHelpers.generateToken(
    {
      email: userData.email,
      role: userData.role,
    },
    "refreshTokenSecretKey",
    "30d"
  );

  return {
    accessToken,
    refreshToken,
    needPasswordChange: userData.needPasswordChange,
  };
  //    const result =
};

const refreshToken = async (token: string) => {
  let decodedData;
  try {
      decodedData = jwtHelpers.verifyToken(token, 'refreshTokenSecretKey');
  }
  catch (err) {
      throw new Error("You are not authorized!")
  }

  const userData = await prisma.user.findUniqueOrThrow({
      where: {
          email: decodedData.email,
          status: UserStatus.ACTIVE
      }
  });

  const accessToken = jwtHelpers.generateToken({
      email: userData.email,
      role: userData.role
  },
      "accessTokenSecretKey",
      "5m"
  );

  return {
      accessToken,
      needPasswordChange: userData.needPasswordChange
  };

}
export const AuthService = {
  loginUser,
  refreshToken,
};
