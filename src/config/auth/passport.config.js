import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { User } from "../../models/user.model.js";
import env from "../env.config.js";

export const initPassport = () => {

  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: env.JWT_SECRET
      },
      async (payload, done) => {
        try {

          const user = await User.findById(payload.sub).lean();

          if (!user) return done(null, false);

          return done(null, {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role
          });

        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
};