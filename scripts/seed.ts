const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
        data: [
            { name: "Computer Science" },
            { name: "CSS" },
            { name: "Mongo DB" },
            { name: "HTML" },
            { name: "MySQL" },
            { name: "PostgreSQL" },
        ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seedint the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();