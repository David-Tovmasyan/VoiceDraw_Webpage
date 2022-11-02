import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Voice Control Webpage</title>
      </Head>
      <Header />
      <Footer />
    </>
  );
}
