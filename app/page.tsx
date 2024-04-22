import React from "react";
import styles from "@styles/home.module.css";
import Navbar from "@components/Navbar";
import Hero from "@components/hero.component";
import Cards from "@components/cards.component";
import NFTArtboard from "@components/NFTArtboard.component";
import Dashboard from "@components/Dashboard.component"; // Corrected to point to Dashboard component
import Footer from "@components/Footer.component";
import MyButton from "@components/MyButton"; // Adjust the path based on your file structure
// Imports remain the same
import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

// Assuming generateMetadata remains unchanged
export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.URL || "http://localhost:3000"}/api`
  );
  return {
    other: frameTags,
  };
}

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Cards />
    </div>
  );
};

export default HomePage;
