import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jokesMessages } from "@/data/responseMessages";
import { JokesModel } from "@/model/jokesModel";

export async function GET(request: Request) {
  try {
    const [rows] = await db.query(
      "SELECT id, question, reponse FROM blagues ORDER BY RAND() LIMIT 1;"
    );
    const results = Array.isArray(rows) ? (rows as JokesModel[]) : [];

    if (results.length === 0) {
      return NextResponse.json(
        { error: jokesMessages.notFound },
        { status: 404 }
      );
    }

    return NextResponse.json(results[0]);
  } catch (error) {
    console.error("Erreur MySQL (GET /api/blagues/random) :", error);
    return NextResponse.json({ error: jokesMessages.server }, { status: 500 });
  }
}
