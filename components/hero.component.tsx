// components/Hero.tsx
import React from "react";
import styles from "@styles/home.module.css";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className={styles.parallax + " bg-base-200"}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <div className={styles.titleContainer}>
            <img
              src="/landing/cards.webp"
              alt="Left Decorative"
              className={styles.sideImage}
            />
            <div>
              <h1 className={styles.h1Title}>ONCHAIN</h1>
              <div className={styles.marginhero}>
                {" "}
                <h2 className={styles.h2Title}>Loteria</h2>
              </div>
            </div>
            <img
              src="/landing/cards2.webp"
              alt="Right Decorative"
              className={styles.sideImage}
            />
          </div>
          <p className="mb-5 font-black">
            A vibrant, digital-themed image that captures the essence of Onchain
            Loteria, blending traditional Mexican Lotería elements with a
            futuristic Web3 vibe.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
