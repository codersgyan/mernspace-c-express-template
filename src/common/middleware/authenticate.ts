import { expressjwt, GetVerificationKey } from "express-jwt";
import { Request } from "express";
import jwksClient from "jwks-rsa";
import config from "config";
import { AuthCookie } from "../../types";

export default expressjwt({
  secret: jwksClient.expressJwtSecret({
    jwksUri: config.get("auth.jwksUri"),
    cache: true,
    rateLimit: true,
  }) as GetVerificationKey,
  algorithms: ["RS256"],
  getToken(req: Request) {
    const authHeader = req.headers.authorization;

    // Bearer eyjllsdjfljlasdjfljlsadjfljlsdf
    if (authHeader && authHeader.split(" ")[1] !== "undefined") {
      const token = authHeader.split(" ")[1];
      if (token) {
        return token;
      }
    }

    const { accessToken } = req.cookies as AuthCookie;
    return accessToken;
  },
});
