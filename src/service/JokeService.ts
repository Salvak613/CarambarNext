import { addJoke } from "@/lib/Jokes/addJokes";
import { getJokes } from "@/lib//Jokes/getJokes";
import { getOne } from "@/lib/Jokes/getJoke";
import { getRandomJoke as getRandomJokeLib } from "@/lib/Jokes/getRandomJoke";
import { JokesModel } from "@/model/jokesModel";

export async function getall() {
  return getJokes();
}

export async function addOne(joke: Omit<JokesModel, "id">) {
  return addJoke(joke);
}

export async function getOneById(id: number): Promise<JokesModel> {
  return getOne(id);
}

export async function getRandomJoke() {
  return getRandomJokeLib();
}
