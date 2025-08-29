import { jokesMessages } from "@/data/responseMessages";
import { apiRoutes } from "@/data/ROUTES";
import { JokesModel } from "@/model/jokesModel";

export async function getOne(id: number): Promise<JokesModel> {
  const res = await fetch(`${apiRoutes.JOKE(id)}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (res.status === 404) {
    throw new Error(jokesMessages.notFound || "Blague non trouvée");
  }

  if (!res.ok) {
    throw new Error(jokesMessages.error);
  }

  return res.json();
}
