import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Voice Control Webpage</title>
      </Head>

      <Header />
      <main>
        
          <div className="title">Voice Control</div>
          <div className="description">A Draw App created with Python</div>
          <div className="forward_buttons">
            <Link className="download" href="/Program" style={{ backgroundColor: "white", color: "black", marginRight: "30px" }}>Learn More</Link>
            <Link className="download" href="/Download">Download</Link>
          </div>
        
      </main>
      <Footer />
    </>
  );
}
