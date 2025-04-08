import Head from "next/head";
import styles from "../styles/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foam - A Better Twitch Experience</title>
      </Head>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Foam</h1>
          <p>Your new favorite way to experience Twitch on mobile.</p>
          <button className={styles.ctaButton}>Coming Soon</button>
        </div>
      </div>

      {/* Teaser Section */}
      <main className={styles.main}>
        <section className={styles.teaser}>
          <h2>Why Foam?</h2>
          <p>
            Foam is a lightweight, open-source Twitch client designed for iOS
            and Android. With a sleek interface and enhanced features, Foam
            offers a better way to watch your favorite streams.
          </p>
          <p>
            Stay tuned for updates and be the first to try Foam when it
            launches!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          <Link
            href="https://github.com/luke-h1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by luke-h1
          </Link>{" "}
          • Follow us for updates!
        </p>
      </footer>
    </div>
  );
}
