import { jokesMessages } from "@/data/responseMessages";
import { apiRoutes } from "@/data/ROUTES";

export async function getJokes() {
  const res = await fetch(apiRoutes.JOKES, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(jokesMessages.error);
  return res.json();
}
