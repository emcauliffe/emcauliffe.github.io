import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethan McAuliffe</title>
        <meta name="description" content="My personal website and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainColumn}>
          <h1 className={styles.title}>Ethan McAuliffe</h1>
          <div className={styles.subheader}>
            Computer + Management Engineering student at McMaster University
          </div>
          <div className={styles.detailsRow}>
            <a href="https://www.emcauliffe.ca/resume">Resume</a>
            <Link href="/blog">Blog</Link>
          </div>
          <div className={styles.detailsRow}>
            <a href="https://github.com/emcauliffe">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/ethan-mcauliffe/">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="mailto:ethan[ a t ]emcauliffe[ d o t ]ca?body=%5E%5Eplease%20update%20the%20%22to%22%20field%5E%5E">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
