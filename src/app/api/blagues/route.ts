import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jokesMessages } from "@/data/responseMessages";

interface InsertResult {
  insertId: number;
  affectedRows?: number;
  warningStatus?: number;
}

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT id, question, reponse FROM blagues ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erreur MySQL :", error);
    return NextResponse.json({ error: jokesMessages.server }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { question, reponse } = await req.json();

    if (
      typeof question !== "string" ||
      typeof reponse !== "string" ||
      question.trim() === "" ||
      reponse.trim() === "" ||
      question.length > 100
    ) {
      return NextResponse.json(
        { error: jokesMessages.invalidData },
        { status: 400 }
      );
    }

    const [result] = (await db.query(
      "INSERT INTO blagues (question, reponse) VALUES (?, ?)",
      [question.trim(), reponse.trim()]
    )) as [InsertResult, unknown];

    return NextResponse.json({
      message: jokesMessages.addSuccess,
      insertedId: result.insertId,
    });
  } catch (error) {
    console.error("Erreur MySQL (POST) :", error);
    return NextResponse.json({ error: jokesMessages.server }, { status: 500 });
  }
}
