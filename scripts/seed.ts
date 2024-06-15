const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
        data: [
            { name: "Бесполезные вещи" },
            { name: "Полезные вещи" },
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