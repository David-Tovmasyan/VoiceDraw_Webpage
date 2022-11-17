import Image from "next/image"
import React from "react";

function Github({ link }) {

    const src = "GitHub.png";
    return (
        <>
            <a href={link} target="_blank">
                <Image
                    loader={({ src }) => src}
                    src={src}
                    alt="Github Logo"
                    width={25}
                    height={25}
                />
            </a>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer>
                <span>Created by</span>
                <div className="author">David</div>
                <Github link={'https://github.com/David-Tovmasyan'} />
                <span>and</span>
                <div className="author">Denis</div>
                <Github link={'https://github.com/GameOneYT'} />
            </footer>
        </>
    )
}

export default React.memo(Footer);