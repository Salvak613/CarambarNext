import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/Logo.webp" alt="Carambar & Co" className={styles.logo} />
    </header>
  );
}
