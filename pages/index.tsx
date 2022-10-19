import Head from "next/head";
import Exhibitors from "@/components/Exhibitors";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Medias from "@/components/Medias";
import Newsletter from "@/components/Newsletter";
import Sponsors from "@/components/Sponsors";
import Venue from "@/components/Venue";
import Lifestyle from "../components/Lifestyle";

const Home = () => {
  return (
    <>
      <Head>
        <title>DevJoy - 开发者的游园会</title>
        <meta
          name="description"
          content="DevJoy 是一个面向开发者 (Developer) 的游园会 (Joy)，汇聚了开发者感兴趣的方方面面，包括但不限于开发者工具，游戏，键盘，手办，漫画等。"
        />
        <meta property="og:url" content="https://www.devjoy.org/" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content="DevJoy - 开发者的游园会" />
        <meta
          name="og:description"
          content="DevJoy 是一个面向开发者 (Developer) 的游园会 (Joy)，汇聚了开发者感兴趣的方方面面，包括但不限于开发者工具，游戏，键盘，手办，漫画等。"
        />
        <meta
          name="og:image"
          content="https://www.devjoy.org/images/logos/devjoy.webp"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Lifestyle />
        <Exhibitors />
        <Venue />
        <Sponsors />
        <Medias />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
