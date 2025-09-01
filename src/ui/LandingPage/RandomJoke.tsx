"use client";

import { useEffect, useState } from "react";
import { getRandomJoke } from "@/service/JokeService";
import { JokesModel } from "@/model/jokesModel";
import styles from "./RandomJoke.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.title}>Blague aléatoire</h1>
      <p className={styles.question}>{randomJoke?.question}</p>

      <div className={styles.answerZone}>
        {showAnswer && (
          <p className={styles.answerAppear}>{randomJoke?.reponse}</p>
        )}
      </div>

      <div className={styles.buttonZone}>
        {!showAnswer && (
          <button className={styles.button} onClick={toggleAnswer}>
            Voir la réponse
          </button>
        )}
        {showAnswer && (
          <button
            className={`${styles.button} ${styles.buttonAppear}`}
            onClick={handleNewJoke}
          >
            Nouvelle blague
          </button>
        )}
      </div>
    </div>
  );
}
