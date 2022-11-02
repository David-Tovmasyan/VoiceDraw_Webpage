import Footer from "../components/Footer";
import Header from "../components/Header";
import DownloadPage from "../components/Download_page";
import Head from "next/head";

export default function Download() {
    return (
        <>
            <Head>
                <title>Voice Control Webpage</title>
            </Head>
            <Header />
            <DownloadPage />
            <Footer />
        </>
    )
}