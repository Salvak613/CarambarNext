import { jokesMessages } from "@/data/responseMessages";
import { apiRoutes } from "@/data/ROUTES";

export async function getRandomJoke() {
  const res = await fetch(apiRoutes.RANDOM_JOKE, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(jokesMessages.error);
  return res.json();
}
