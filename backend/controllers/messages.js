const { PrismaClient } = require("@prisma/client");

const messageService = require("../services/message");

const prisma = new PrismaClient();

const getAll = async (req, res) => {
  const users = await messageService.getAll();
  res.json(users);
};

module.exports = {
  getAll,
};
