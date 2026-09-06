import { log } from "node:console";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { pool } from "./db.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://localhost:4000/api/auth/v1/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {


        const user = {
            email :profile.emails?.[0]!.value,
            name: profile.displayName,
            avatar: profile.photos?.[0]?.value,
            googleId: profile.id
        }
       
        const existingUser = await pool.query(
          "SELECT * FROM business_user WHERE google_id = $1",
          [user.googleId],
        );


        if (existingUser.rowCount && existingUser.rowCount > 0){
            return done(null, existingUser.rows[0]);
        }

        const result = await pool.query("INSERT INTO business_user (email, avatar_url, google_id) VALUES ($1, $2, $3)", [user.email, user.avatar, user.googleId]);

        
        return done(null, result.rows[0]);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

export default passport;
