import styles from "./page.module.css";
import RandomJoke from "@/ui/LandingPage/RandomJoke";

export default async function Home() {
  return (
    <div className={styles.page}>
      <RandomJoke />
    </div>
  );
}
