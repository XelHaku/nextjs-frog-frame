// Imports remain the same
import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

// Assuming generateMetadata remains unchanged
export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.URL || "http://localhost:3000"}/api`
  );
  return {
    other: frameTags,
  };
}

// Modified Home component for Onchain Loteria
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to Onchain Loteria!</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p>
            Dive into the future of lottery games with{" "}
            <strong>Onchain Loteria</strong>. Edit&nbsp;
            <code className={styles.code}>app/page.tsx</code> to customize your
            experience.
          </p>
          <p>
            Check out the API in action at{" "}
            <a
              href="/api/dev"
              style={{ display: "inline", fontWeight: "bold" }}
            >
              <code className={styles.code}>/api/dev</code>
            </a>
          </p>
        </div>
        <Image
          src={`/chalupa/1.jpg`}
          alt="Onchain Loteria Logo"
          width={250}
          height={250}
          priority
        />
      </div>
      <Image
        src={`/atlas/atlas-296x445.jpg`}
        alt="Onchain Loteria Logo"
        width={250}
        height={250}
        priority
      />
      <div className={styles.grid}>
        <a
          href="/play" // Adjust the href to point to your playing route
          className={styles.card}
        >
          <h2>Play Now &rarr;</h2>
          <p>Join the latest game of Onchain Loteria and win big!</p>
        </a>

        <a
          href="/about" // Adjust the href to your about page
          className={styles.card}
        >
          <h2>About Onchain Loteria &rarr;</h2>
          <p>
            Learn more about how Onchain Loteria is revolutionizing the lottery.
          </p>
        </a>

        <a
          href="/how-it-works" // Adjust the href to your guide or how it works page
          className={styles.card}
        >
          <h2>How It Works &rarr;</h2>
          <p>Discover the technology behind the secure and fair gameplay.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Deploy Your Own &rarr;</h2>
          <p>Start your own version of Onchain Loteria on Vercel.</p>
        </a>
      </div>
      <h1>
        <Link href="/check-boardless-tokens">check boardless tokens</Link>
      </h1>
      <h1>
        <Link href="/test">NOT FOUND</Link>
      </h1>
    </main>
  );
}
