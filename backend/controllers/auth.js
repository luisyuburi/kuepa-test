const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const login = async (req, res) => {
  const email = req.body.email || "";
  const password = req.body.password || "";
  if (email && password) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    }); // check if user exist

    if (!user) {
      res.status(401).send({
        success: false,
        message: "KEYS.USER_NOT_EXIST",
      });
    } else {
      const token = jwt.sign(user, process.env.JWT_SECRET_OR_KEY, {
        expiresIn: process.env.JWT_TOKEN_EXPIRATION,
      });

      // return the information including token as JSON
      res.status(200).send({
        success: true,
        user: user,
        token: `${process.env.JWT_TOKEN_PREFIX} ${token}`,
      });
    }
  }
};

module.exports = { login };
