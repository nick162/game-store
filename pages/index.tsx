import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import Header from "../components/organisms/Header";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";
import React from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* SEO */}
      <Head>
        <title>gameStore - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
                    players menjadi pemenang sejati"
        />
        <meta property="og:title" content="gameStore - Get a New Experience in Game" />
        <meta property="og:description" content="players menjadi pemenang sejati" />
        <meta property="og:image" content="https://unsplash.com" />
        <meta property="og:url" content="https:mmorpg.com" />
      </Head>
      {/* Navbar Section */}
      <Navbar />

      {/* Header Section */}
      <Header />

      {/* Feature Section */}
      <TransactionStep />
      <FeaturedGame />

      {/* Reached Section */}
      <Reached />

      {/* Story Section */}
      <Story />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
