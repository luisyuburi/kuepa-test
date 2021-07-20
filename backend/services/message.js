const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  const users = await prisma.message.findMany({ include: { user: true } });
  return users;
};

const get = async (id) => {
  const message = await prisma.message.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return message;
};

const create = async (data) => {
  const message = await prisma.message.create({
    data,
    include: {
      user: true,
    },
  });
  return message;
};

const update = async (id, data) => {
  const updateUser = await prisma.message.update({
    where: {
      id: parseInt(id),
    },
    data,
  });
  return message;
};

const remove = async (id) => {
  const deleteUser = await prisma.message.delete({
    where: {
      id: parseInt(id),
    },
  });
  return message;
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
