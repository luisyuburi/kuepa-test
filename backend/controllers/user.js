const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

const get = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(user);
};

const create = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });
  res.json(user);
};

const update = async (req, res) => {
  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: req.body.name,
    },
  });
  res.json(user);
};

const remove = async (req, res) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(user);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
