"use client";

import { useEffect, useState } from "react";
import { getRandomJoke } from "@/service/JokeService";
import { JokesModel } from "@/model/jokesModel";

export default function RandomJoke() {
  const [randomJoke, setRandomJoke] = useState<JokesModel | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    getRandomJoke().then((joke) => setRandomJoke(joke));
  }, []);

  const handleNewJoke = async () => {
    const newJoke: JokesModel = await getRandomJoke();
    setRandomJoke(newJoke);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <h1>Random Joke</h1>
      <p>{randomJoke?.question}</p>
      {showAnswer && <p>{randomJoke?.reponse}</p>}
      <button onClick={toggleAnswer}>
        {showAnswer ? "Masquer la réponse" : "Voir la réponse"}
      </button>
      <button onClick={handleNewJoke}>Nouvelle blague</button>
    </div>
  );
}
