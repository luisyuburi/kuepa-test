const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      role: "STUDENT",
      password: "123456",
    },
  });

  const jonh = await prisma.user.upsert({
    where: { email: "jonh@prisma.io" },
    update: {},
    create: {
      email: "jonh@prisma.io",
      name: "Jonh",
      role: "MODERATOR",
      password: "123456",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      role: "STUDENT",
      password: "123456",
    },
  });
  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
