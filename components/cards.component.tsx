// Cards.component.tsx

import React from "react";
import styles from "@styles/home.module.css"; // Ensure this path is correct in your project structure

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {" "}
      {/* Flex container for responsive layout */}
      {/* Each card now uses DaisyUI's card styles for consistent UI */}
      <div
        className={
          styles.cardbody +
          "card card-compact w-full md:w-80 bg-base-100 shadow-xl m-2"
        }
      >
        {" "}
        {/* Responsive width */}
        <figure>
          <img src="/landing/cards3.webp" alt="How to Play" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How to Play</h2>
          <p>Answer the trivia to get the chance to mint your NFT Board.</p>
        </div>
      </div>
      <div className="card card-compact w-full md:w-80 bg-base-100 shadow-xl m-2">
        <figure>
          <img src="/landing/cards4.webp" alt="Unique Game Features" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Unique Game Features</h2>
          <p>
            Explore the unique features of Onchain Loteria, including
            blockchain-powered boards, NFTs, and more.
          </p>
        </div>
      </div>
      <div className="card card-compact w-full md:w-80 bg-base-100 shadow-xl m-2">
        <figure>
          <img src="/landing/cards5.webp" alt="Join Our Community" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Join Our Community</h2>
          <p>
            Become part of the Onchain Loteria community to engage with other
            players, participate in special events, and enjoy continuous updates
            and rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
