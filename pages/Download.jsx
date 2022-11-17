import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

export default function Download() {
    return (
        <>
            <Head>
                <title>Voice Control Webpage</title>
            </Head>
            <Header />
            <main>
                <div className="title">Download The Program</div>
                <Link class="download" download href="ProgramExe/voiceControl.exe" >Download</Link>
                <div className="mb">42 MB </div>
                <div className="add">(Only Windows and Mac)</div>
                <div className="add">For Linux - Check our <a href="https://github.com/GameOneYT/rc-voice-control/releases/tag/pre-release">Github</a></div>
            </main>

            <Footer />
        </>
    )
}