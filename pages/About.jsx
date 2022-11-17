import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function About() {

    return (
        <>
            <Head>
                <title>Voice Control Webpage</title>
            </Head>
            <Header />
            <main>
                <div className="title">About Project</div>
                <div className="table">
                    <div className="row">
                        <div className="element"></div>
                        <div className="element hd">Application</div>
                        <div className="element hd">Webpage</div>
                    </div>
                    <div className="row">
                        <div className="element hd">Language</div>
                        <div className="element">Python</div>
                        <div className="element">JavaScript</div>
                    </div>
                    <div className="row">
                        <div className="element hd">Library</div>
                        <div className="element">SpeechRecognition PythonTurtle</div>
                        <div className="element">React - Next.js SCSS</div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
