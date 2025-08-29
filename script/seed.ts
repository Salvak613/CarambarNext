import "dotenv/config";
import mysql from "mysql2/promise";

const { MYSQL_DB_HOST, MYSQL_DB_USER, MYSQL_DB_PASSWORD, MYSQL_DB_NAME } =
  process.env;

const seedData = [
  {
    question: "Quelle est la femelle du hamster ?",
    reponse: "L’Amsterdam",
  },
  {
    question: "Que dit un oignon quand il se cogne ?",
    reponse: "Aïe",
  },
  {
    question: "Quel est l'animal le plus heureux ?",
    reponse: "Le hibou, parce que sa femme est chouette.",
  },
  {
    question: "Pourquoi le football c'est rigolo ?",
    reponse: "Parce que Thierry en rit.",
  },
  {
    question: "Quel est le sport le plus fruité ?",
    reponse:
      "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
  },
  {
    question: "Que se fait un Schtroumpf quand il tombe ?",
    reponse: "Un Bleu.",
  },
  {
    question: "Quel est le comble pour un marin ?",
    reponse: "Avoir le nez qui coule.",
  },
  {
    question: "Qu'est ce que les enfants usent le plus à l'école ?",
    reponse: "Le professeur.",
  },
  {
    question: "Quel est le sport le plus silencieux ?",
    reponse: "Le para-chuuuut.",
  },
  {
    question: "Quel est le comble pour un joueur de bowling ?",
    reponse: "C’est de perdre la boule.",
  },
];

const seed = async () => {
  try {
    const db = await mysql.createConnection({
      host: MYSQL_DB_HOST,
      user: MYSQL_DB_USER,
      password: MYSQL_DB_PASSWORD,
      database: MYSQL_DB_NAME,
    });

    await db.query("DELETE FROM blagues");

    for (const { question, reponse } of seedData) {
      await db.query("INSERT INTO blagues (question, reponse) VALUES (?, ?)", [
        question,
        reponse,
      ]);
    }

    await db.end();
    console.log("🌱 Database seeded successfully");
  } catch (err) {
    console.error("❌ Error during seeding:", err);
  }
};

seed();
