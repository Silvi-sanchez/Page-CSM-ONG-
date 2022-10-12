import Head from "next/head";
import PhotoCarousel from "../components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "../components/Card";
import Carta from "../components/Carta";
import Video from "/components/Video";
import Alianzas from "../components/Alianzas";

export default function Home() {
  return (
    <>
      <Head>
        <title>Corresponsabilidad Social</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo/logo-ICO.ico" />
      </Head>
      <PhotoCarousel></PhotoCarousel>
      <CardGroup />
      <Carta />
      <Video />
      <Alianzas />
    </>
  );
}

// "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@corresp.mx"
