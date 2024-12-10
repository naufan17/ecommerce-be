import jwt, { JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";

export const generateToken = (payload: JwtPayload) => {
  const secretToken: string = process.env.JWT_SECRET || "";
  const options: SignOptions = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secretToken, options);
};

export const verifyToken = (token: string) => {
  const secretToken: string = process.env.JWT_SECRET || "";
  const options: VerifyOptions = {
    ignoreExpiration: false,
  };

  return jwt.verify(token, secretToken, options);
};