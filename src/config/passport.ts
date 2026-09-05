import { log } from "node:console";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://localhost:4000/api/auth/v1/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]!.value;
        const name = profile.displayName;
        const avatar = profile.photos?.[0]?.value;
        const googleId = profile.id;
        console.log({name});
        
        return done(null, { googleId, email, name, avatar });
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

export default passport;
