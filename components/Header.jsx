import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {
    const src = "logo_white.png"; // searches for file in the public folder?

    const router = useRouter();

    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <Image
                        loader={({ src }) => src}
                        src={src}
                        alt='Logo'
                        width={100}
                        height={50}
                    />
                </Link>
            </div>
            <nav>
                {/* giving active class to the current route */}
                <div className={("Home" + ' ' + `${router.pathname === '/' ? 'active' : ''}`)} >
                    <Link href="/">Home</Link>
                </div>
                <div className={("Program" + ' ' + `${router.pathname === '/Program' ? 'active' : ''}`)}>
                    <Link href="/Program">Program</Link>
                </div>
                <div className={("Download" + ' ' + `${router.pathname === '/Download' ? 'active' : ''}`)}>
                    <Link href="/Download">Download</Link>
                </div>
                <div className={("About" + ' ' + `${router.pathname === '/About' ? 'active' : ''}`)}>
                    <Link href="/About">About</Link>
                </div>                
            </nav>
        </header>
    )
}