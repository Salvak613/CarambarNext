import { jokesMessages } from "@/data/responseMessages";
import { apiRoutes } from "@/data/ROUTES";

export async function addJoke(joke: { question: string; reponse: string }) {
  const res = await fetch(apiRoutes.JOKES, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  });

  if (!res.ok) throw new Error(jokesMessages.addFail);
  return res.json();
}
