import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function Program() {

    // check if animation was played
    const [wasAnimationPlayed, setPlayed] = useState(() => sessionStorage.getItem("wasAnimationPlayed"));

    const styles = {
        fontWeight: "200",
    }
    const spanStyles = {
        fontWeight: "600",
        animation: `${wasAnimationPlayed ? "none" : "fade 2s"}`
    }

    useEffect((e) => {
        //set information in session storage in first render
        sessionStorage.setItem("wasAnimationPlayed", "true")
    })

    return (
        <>
            <Head>
                <title>Voice Control Webpage</title>
            </Head>
            <Header />
            
            <main>
                <div className="title" style={styles}><span style={spanStyles}>Voice Control</span> is an application</div>
                <div className="title" style={styles}>Where you can draw with your <span style={spanStyles}>Voice</span></div>
            </main>

            <Footer />
        </>
    )
}