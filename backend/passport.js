import passportJWT from "passport-jwt";

const { Strategy: JWTStrategy, ExtractJwt: ExtractJWT } = passportJWT;

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme(
  process.env.JWT_SCHEME
);
opts.secretOrKey = process.env.JWT_SECRET_OR_KEY;
const passportJWTStrategy = new JWTStrategy(opts, function (jwtPayload, done) {
  const email = jwtPayload.email;

  const user = await prisma.user.findUnique({
    where: {
      id: jwtPayload.sub,
    },
  });

  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});

module.exports = function (passport) {
  passport.use(passportJWTStrategy);

  return passport;
};
